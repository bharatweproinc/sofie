import { Landing } from '@/Layouts/Landing';
import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const BackgroundImageContainer = styled('div')({
  backgroundImage: 'url(./images/image7.png)',
  backgroundSize: 'cover',
  height: '896px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundPosition: 'right top !important'
});

function FAQ() {
  return (
    <Landing>
      <Box>
        <Typography sx={{ height: '65px' }}></Typography>
        <div className="row p-8 justify-normal">
          <div className="col-md-12 mt-5">
            <Typography component="div">
            <div className='text-center'><strong>FAQs</strong></div>
            <em> Announcement:  upcie launches formally on 9 August 2024.  If you enter your information between 9th - 31st August, 2024, upcie will run the match for you starting 1st September 2024. If you enter your information beginning 1st September onwards, your information will be matched 2nd September 2024 thereafter.</em>
            <br/><br/>
            <strong className='justify-center h-10'>SMALL & MEDIUM ENTERPRISES (SME)</strong><br/><br />
              <ol>
                <li>
                  <strong>Q.1 How can I join upcie as an SME?</strong>
                  <p>
                    The process is very simple! You just have to meet 2 criteria before signing up:
                    <br /> 1) have a valid, LIVE Singapore UEN status
                    <br /> 2) meet the criteria of being a valid Singapore SME: revenue of less than SGD$100 million annual turnover, employ less than 200 people, have minimum 30% local shareholding, and be registered and operating in Singapore.
                    <br />
                    If you meet the 2 criteria above, please click to sign up. Or, go to the upcie homepage and just click on "Sign up as SME" to lead you to the steps to sign up.
                  </p>
                </li><br/>
                <li>
                  <strong>Q.2 Does upcie charge a fee to use?</strong>
                  <p>No. As upcie was started as a pay-it-forward project, there is no fee to join or use this program.</p>
                </li><br/>
                <li>
                  <strong>Q.3 Do I have to fill out all the information requested?</strong>
                  <p>Some questions are mandatory, but it would be to your advantage to fill out all the information requested (there aren't that many questions!) so that when a potential Mentor reviews your profile, he/she can get a better sense of your company and what help you need.</p>
                </li><br/>
                <li>
                  <strong>Q.4 What is expected of me as an SME Mentee if I join upcie?</strong>
                  <p>
                    upcie would like to request all SME Mentee to be mindful of the following:
                    <br /> a) Respect your Mentor's time - Mentors who sign up at upcie are experienced business professionals who may still run or work at their companies. Please be mindful that your Mentor DOES NOT WORK for you. He/she is here to help provide business consultations and advice based on the issues you stated in your profile. Please DO NOT abuse this. Mentors in upcie have promised to give up-to-10 hours of their time to each SME Mentee per year. Time is not free, and you should make the most of their time. Therefore, please respect your Mentor's time.
                    <br /> b) Be clear in what you ask of your Mentor - make sure you know what issues you would like your Mentor to help you solve. It's not OK just to want a Mentor for the sake of having a Mentor. You need to identify and clarify what issues to address to maximize the time spent with your Mentor. Make your meeting time with your Mentor count.
                    <br /> c) Deliver on your promise - once you have a Mentor, after meeting with him/her, they will most likely yield some To-Dos for you. Make sure you work on the items that you promise to your Mentor before your next session with him/her.
                  </p>
                </li><br/>
                <li>
                  <strong>Q.5 Once I submit my SME company information, how long do I have to wait to be listed in the upcie platform?</strong>
                  <p>Please wait up-to-5 business days for us to verify your company's UEN. After the verification process, we will notify you if you are accepted into the system or not via the email you have provided us with. If you are accepted, your profile will be listed on the upcie platform.</p>
                </li><br/>
                <li>
                  <strong>Q.6 How long does upcie take to verify my company information?</strong>
                  <p>It may take up-to-5 business days to verify your company UEN and status.</p>
                </li><br/>
                <li>
                  <strong>Q.7 Can I edit my company information AFTER I submit it?</strong>
                  <p>Yes, absolutely! You can edit your information by logging into your profile page, clicking on the "EDIT" button. You can then edit and submit the new updated information. Please note that you can only edit your information ONCE a week; this is to prevent confusion to potential Mentors who may receive your profile before or after your edit.</p>
                </li><br/>
                <li>
                  <strong>Q.8 Once I'm fully registered with upcie, how long do I have to wait for a Mentor match?</strong>
                  <p>
                    The process may take up to two weeks. upcie's algorithm will run on a daily schedule. However, you need to give potential matched mentors time to review your profile, and this process may take some time as some Mentors travel often for work or have other work commitments. We ask that you please be patient with this process.
                    <br /> Please take note: If you enter your information between 9th - 31st August, 2024, upcie will run the match for you starting on 1st September 2024 onwards. If you enter your information beginning 1st September, your information will be matched 2nd September 2024 thereafter.
                  </p>
                </li><br/>
                <li>
                  <strong>Q.9 How many hours of my Mentor's time will I receive during the mentorship?</strong>
                  <p>
                    upcie's Mentors have committed to giving up-to-10 hours per year to each of their accepted and matched SME Mentee. The start of your first meeting begins the time count for the year.
                    <br /> Please take note: Mentorship is free for the first year. Afterwards or when the 10 hours are fulfilled, You, the Mentee, and the Mentor, are free to continue working together. However, the hours may be billable.
                  </p>
                </li><br/>
                <li>
                  <strong>Q.10 I have submitted my company profile several weeks ago but have not heard back yet. How can I find out what's going on?</strong>
                  <p>If you have not heard back from upcie within two weeks of being listed in our platform, please email us at hello@upcie.net and give us your written permission to access your profile to check on your status. To prevent any delay, we urge you to completely fill out all the fields in your profile page when you sign up, as any missing information may delay the potential Mentor's decision making process.</p>
                </li><br/>
                <li>
                  <strong>Q.11 If I was matched with a Mentor but ultimately, the Mentor declines, do I get to know why he/she declines my company?</strong>
                  <p>Yes, feedback will be given why a Mentor declines your profile. We ask all our Mentors to provide a reason why they decline a certain matched profile. Sometimes, it is not the fault of the SME Mentee. Mentors may have other companies in their mentoring portfolio that prevents them from working with certain SME Mentee due to conflict of interest. Mentors may also not have experience in dealing with the specific issues that the SME Mentee stated in his/her profile.</p>
                </li><br/>
                <li>
                  <strong>Q.12 Can I contact the Mentors listed on upcie platform directly, let's say through their LinkedIn profile?</strong>
                  <p>Yes, you can contact them privately. However, if you are not matched through our upcie platform, the Mentor may not be able to provide free consultation and mentorship to you. The free mentorship is exclusive to upcie, where the Mentors volunteer their time and sign-up on the upcie platform.</p>
                </li><br/>
                <li>
                  <strong>Q.13 How many Mentors can I have through upcie?</strong>
                  <p>Each SME Mentee is limited to having 3 Mentors in different functional business areas at any given time.</p>
                </li><br/>
                <li>
                  <strong>Q.14 What happens if I meet my Mentor on the first meeting and we don't really get along...can I decline that mentorship?</strong>
                  <p>If you feel you will not be able to get along with your matched Mentor after your first meeting, you can end the match by logging into your account and clicking “end match”. We request that you provide feedback on why the match has ended.</p>
                </li><br/>
                <li>
                  <strong>Q.15 I get along with my Mentor really well and he/she is really helping my business. Can I ask my Mentor for more hours than the 10 hours per year they committed to mentor me as part of the upcie program?</strong>
                  <p>Yes, of course! However, it will be up to you and your Mentor to discuss if the additional hours are billable. upcie will not get involved in any deals.</p>
                </li><br/>
                <li>
                  <strong>Q.16 My Mentor asked me to pay for his/her consulting hours, but I thought the Mentor's time is free if I sign up on upcie?</strong>
                  <p>upcie Mentors are committed to giving up-to-10 hours of free consultation time during the first year that they are your Mentor. The start of your first meeting begins the time count. If the Mentor asks for upfront payment from your first meeting or during the 10-hour count, please report him/her to us at feedback@upcie.net</p>
                </li><br/>
                <li>
                  <strong>Q.17 I no longer want to be on upcie, how can I delete my company profile on the upcie website?</strong>
                  <p>We're sorry to hear you want to leave our platform. If you want to delete your account from our system, please login to your profile page and click on the "DELETE" button. The system will prompt your confirmation. After your confirmation, your profile will be deleted within 72 hours. Please note that upcie will delete your profile and all the affiliated associations with any mentors. No data pertaining to your profile will be saved.</p>
                </li><br/>
                <li>
                  <strong>Q.18 If I would like to join upcie later after leaving the platform, can I do that?</strong>
                  <p>Yes, you can rejoin upcie after leaving the platform after 3 months have passed.</p>
                </li><br/>
              </ol>

              <br/>
              <strong className='justify-center h-10'>MENTORS</strong><br/><br/>
                <ol>
                    <li>
                        <strong>Q.1 How can I join upcie as a Mentor?</strong>
                        <p>First of all, thank you so much for your interest!  We are looking for Mentors from local and international who can help provide business consultation to our Singaporean SMEs.  To register, please click here. Or you can go to our upcie homepage, and click on the "Sign up as Mentor" button.  It will lead you to the next steps in registration.</p>
                    </li><br/>
                    <li>
                        <strong>Q.2 Do I have to fill out all the information requested? </strong>
                        <p>Yes please! Your potential SME Mentees would also like to learn about you and your background experience. </p>
                    </li><br/>
                    <li>
                        <strong>Q.3 What is expected of me as a Mentor if I join upcie? </strong>
                        <p>As a Mentor at upcie, we ask that you donate up-to-10 hours of your time per SME Mentee in a year.  The one-year timeframe starts when you have your first meeting. Usually Mentors meet with their SME Mentees once per quarter to review the progress.    </p>
                    </li><br/>
                    <li>
                        <strong>Q.4 How many hours do I have to commit to my SME mentee per year? </strong>
                        <p>We kindly request for you to donate up-to-10 hours of your time per SME Mentee in a year. The recommended number of hours to be donated per company that you are matched with is 8-10 hours. The one-year timeframe starts when you have your first meeting.</p>
                    </li><br/>
                    <li>
                        <strong>Q.5 Once I submit my information, how long do I have to wait to be listed in the upcie platform?</strong>
                        <p>Please allow us up-to 10 business days to verify your information and profile.  After the verification process, we will notify you via email of your acceptance.</p>                    </li><br/>
                    <li>
                        <strong>Q.6 How long does upcie take to verify my information?</strong>
                        <p>Please allow us up-to-10 business days to verify your information. </p>
                    </li><br/>
                    <li>
                        <strong>Q.7 Can I edit my information AFTER I submit it? </strong>
                        <p>Yes, absolutely! After you submit your information, you can edit your information by login onto your profile page, click on the "EDIT" button, then you can edit and then re-submit.  </p>
                    </li><br/>
                    <li>
                        <strong>Q.8 Once I'm registered fully with upcie, how long do I have to wait for a mentee match?</strong>
                        <p>The process may take up to 5 business days. Once there is a match with a potential SME Mentee, you will be notified via your registered email.  From there you can review the proposed SME Mentee profile, and should you wish to engage with them, you can click on the conditional "Accept" button.  Then your information will be sent to the SME Mentee to review.  Please give the SME Mentee some time to review your profile at this point.  Should the SME Mentee accept your mentorship, upcie will provide them with your contact and notify them to reach out to you.  The SME Mentee will initiate the first contact.</p>
                    </li><br/>
                    <li>
                        <strong>Q.9 I submitted my profile several weeks ago but have not heard back yet. How do I find out what's going on?</strong>
                    <p>If you have not heard back from upcie within one month of being listed in our platform, please email us at hello@upcie.net and give us your written permission to access your profile to check on your status. There may be no potential matches of SME that match your preferred industry that need your specialized area of help. </p>
                    </li><br/>
                    <li>
                        <strong>Q.10 If I was matched with an SME, and I did a conditional acceptance, but ultimately, the SME declines, do I get to know why he/she declined my offer of mentorship? </strong>
                    <p>Yes, feedback will be given why an SME declines your profile. We ask all our SMEs to provide a reason why they decline a certain matched profile. Possible reasons may include the Mentor's profile is not aligned sufficiently with the problem that they face, or they have resolved the issue by then. </p>
                    </li><br/>
                    <li>
                        <strong>Q.11 Can I contact the SME listed on upcie platform directly, for example through their LinkedIn profile?</strong>
                        <p>You are free to contact the SME listed on upcie. However, since the contact was not initiated through upcie, you are not obliged to provide any free business consultation to them.  </p>
                    </li><br/>
                    <li>
                        <strong>Q.12  How many SMEs can I mentor through upcie?</strong>
                        <p>There is no restriction on how many SMEs you can mentor through upcie as the mentorship is done on your own time. upcie was created as a pay-it-forward project so any help that you can lend to the SMEs would be greatly appreciated.  We ask that you provide up-to 10 hours per year to your accepted and matched SME Mentee.</p>
                    </li><br/>
                    <li>
                        <strong>Q.13 What happens if I meet my SME mentee on the first meeting and we don't really get along...can I decline that mentorship?</strong>
                        <p>If you feel you will not be able to get along with your matched Mentee after your first meeting, you can end the match by logging into your account and clicking “end match”. We request that you provide feedback on why the match has ended. </p>
                    </li><br/>
                    <li>
                        <strong>Q.14  I get along with my SME mentee really well and he/she is a joy to work with.  My SME mentee asked if I can provide consultation beyond the upcie-committed 10 hours.  Can I charge my SME mentee for the extra hours should he/she agreed to it?</strong>
                        <p>Yes, of course!  However, it will be up to you and your Mentor to discuss the additional billable hours. upcie will not get involved in any deals between you and your SME Mentee.</p>
                    </li><br/>
                    <li>
                        <strong>Q.15 My SME mentee is really abusing my time, they do not respect my time and call me for every little thing. Can I request to stop mentoring this SME mentee?</strong>
                        <p>We are very sorry to hear this. Yes, you can stop your mentoring at any time should you feel your time is not respected. We would like to request that you fill up the reason why you chose to stop the match when ending the match, as well as update us by feedback@upcie.net so we can resolve this issue with the SME and feedback to them. </p>
                    </li><br/>
                    <li>
                        <strong>Q.16 I no longer want to be on upcie, how can I delete my company profile on the upcie website?</strong>
                        <p>We're sorry to hear you want to leave upcie.  If you want to delete your account from our system, please login to your profile page and click on the "DELETE" button.  The system will prompt your confirmation. After your confirmation, your profile will be deleted within 72 hours.  Please note that upcie will delete your profile and all the affiliated associations with any mentors.  No data pertaining to your profile will be saved.</p>
                    </li><br/>
                    <li>
                        <strong>Q.17  If I would like to join upcie later after leaving the platform, can I do that?</strong>
                        <p>Yes, you can rejoin upcie after leaving the platform after 3 months have passed.</p>
                    </li><br/>
                </ol>
            </Typography>
          </div>
        </div>
      </Box>
    </Landing>
  );
}

export default FAQ;
