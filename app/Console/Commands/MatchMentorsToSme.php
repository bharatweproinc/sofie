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
        try{
            //timestamp = 1
            $timestamp = now()->timestamp;
            $log = new CronLog();
            $not_matched = MatchingQueue::where('status', 'not matched')->get();
            foreach($not_matched as $not_matched_mentor){
                $not_matched_mentor->status = "matching";
                $matches = new MatchSmeMentor();
                $data =  $matches->matchingSme($not_matched_mentor->mentor_id);
                $user = User::where('user_role', 'mentor')->where('functional_id', $not_matched_mentor->mentor_id)->first();
                if(count($data['matched_smes']) == 0){
                    $not_matched_mentor->status = "not matched";
                    $log->timestamp = $timestamp;
                    $log->mentor_id = $not_matched_mentor->mentor_id;
                    $log->status = 'Not matched with existing SMEs';
                    $log->save();
                }else{
                    $not_matched_mentor->status = "matched";
                    $log->timestamp = $timestamp;
                    $log->mentor_id = $not_matched_mentor->mentor_id;
                    $log->status = 'Matched with existing SMEs';
                    $log->save();
                    Mail::to($user->email)->send(new AcceptedMentorProfileMail($data));
                }
            }

        }catch(\Exception $e){
            $log = new CronLog();
            $log->timestamp = now()->timestamp;
            $log->mentor_id = $not_matched_mentor->mentor_id;
            $log->status = 'Error occured while matching'. $e->getMessage();
            return $e->getMessage();
        }
    }
}
