<?php

namespace App\Console\Commands;

use App\Mail\AcceptedMentorProfileMail;
use App\Models\CronLog;
use App\Models\MatchingQueue;
use App\Models\User;
use App\Services\MatchSmeMentor;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class MatchMentorsToSme extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:match-mentors-to-sme';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Match a not-matched Mentor in Matching Queue with its matching SMEs';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $mentor_id = 0;
        $this->saveLog($mentor_id, 'app:match-mentors-to-sme | Started');
        try {
            $not_matched = MatchingQueue::where('status', 'not matched')->get();
            foreach($not_matched as $not_matched_mentor){
                $mentor_id = $not_matched_mentor->mentor_id;
                $not_matched_mentor->status = "matching";
                $not_matched_mentor->save();
                $matches = new MatchSmeMentor();
                $data =  $matches->matchingSme($mentor_id);
                $user = User::where('user_role', 'mentor')->where('functional_id', $mentor_id)->first();
                if($data['limit'] == 0){
                     $not_matched_mentor->status = "matched";
                     $this->saveLog($mentor_id, 'Matching limit reached');
                }
                else if(count($data['matched_smes']) == 0){
                    $not_matched_mentor->status = "not matched";
                    $this->saveLog($mentor_id, 'Not Matched with existing SMEs');
                }
                else{
                    $not_matched_mentor->status = "matched";
                    Mail::to($user->email)->send(new AcceptedMentorProfileMail($data));
                    $this->saveLog($mentor_id, 'Matched with existing SMEs');
                }
                $not_matched_mentor->save();
            }
        } catch (\Exception $e) {
            $this->saveLog($mentor_id, 'Error occured while matching'. $e->getMessage());
            return $e->getMessage();
        }
        $this->saveLog($mentor_id, 'app:match-mentors-to-sme | Ended');
    }

    public function saveLog($id, $msg){
        CronLog::create([
            "timestamp" => now()->timestamp,
            "mentor_id" => $id,
            "status" => $msg
        ]);
    }
}
