<?php

namespace App\Console\Commands;

use App\Mail\DeletionMail;
use App\Models\Company;
use App\Models\Deletion;
use App\Models\MatchingMentorSme;
use App\Models\MatchingQueue;
use App\Models\Mentor;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class DeleteScheduledUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'users:delete-scheduled';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete users that are scheduled for deletion';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        DB::transaction(function () {
            $now = now();

            $deletions = Deletion::where('scheduled_deletion_at', '<=', $now)->get();

            foreach ($deletions as $deletion) {
                if ($deletion->user_role == 'mentor') {
                    $delete_user = User::where('user_role', 'mentor')->where('id', $deletion->user_id)->first();
                    $mentor_id = $delete_user->functional_id;
                    $mentor = Mentor::find($mentor_id);
                    if($mentor) {
                        $matchedEntry = MatchingMentorSme::where('mentor_id', $mentor_id)->first();
                        $matchqueue = MatchingQueue::where('mentor_id', $mentor_id)->where('status', 'matched')->first();
                        $matchedSme = $matchedEntry->company_id; //27
                        $functional_area = $matchedEntry->functional_area;
                        $company = Company::where('id',$matchedSme)->first();
                        $company_user = User::where('user_role', 'entrepreneur')->where('functional_id', $company->id)->first();
                        if($company && $company->functional_area_1 == $functional_area){
                            $company->assigned_mentor_1 = null;
                            $company->save();
                        }else if($company && $company->functional_area_2 == $functional_area){
                            $company->assigned_mentor_2 = null;
                            $company->save();
                        }else if($company && $company->functional_area_3 == $functional_area){
                            $company->assigned_mentor_3 = null;
                            $company->save();
                            //dd('test');
                        }
                        $matchedEntry->delete();
                        $matchqueue->delete();
                        $mentor->delete();
                        //mail to company pending
                        Mail::to($company_user->email)->send(new DeletionMail($company_user->name));
                    }
                } elseif($deletion->user_role == 'entrepreneur') {
                    $delete_user = User::where('user_role', 'entrepreneur')->where('id', $deletion->user_id)->first();
                    $company_id = $delete_user->functional_id;
                    $company = Company::find($company_id);
                    if($company) {
                        //max 3 mentors can be attached
                        $matched_mentors_ids = MatchingMentorSme::where('company_id', $company_id)->pluck('mentor_id')->toArray();
                        foreach($matched_mentors_ids as $matched_mentor_id){
                            $mentor = Mentor::where('id', $matched_mentor_id)->first();
                            $mentor_user = User::where('user_role', 'mentor')->where('functional_id', $mentor->id)->first();
                            $matchqueue = MatchingQueue::where('mentor_id', $matched_mentor_id)->where('status','matched')->first();
                            $matchqueue->status = 'not matched';
                            $matchqueue->save();
                            $matchedEntry = MatchingMentorSme::where('mentor_id', $matched_mentor_id)->where('company_id', $company_id)->where('functional_area', $mentor->functional_area)->first();
                            $matchedEntry->delete();
                            Mail::to($mentor_user->email)->send(new DeletionMail($mentor_user->name));
                        }
                        $company->delete();
                    }
                }

                $user = User::find($deletion->user_id);
                if ($user) {
                    $user->delete();
                }
                $deletion->delete(); // Remove the entry from the deletion table
            }
        });
    }
}
