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

function TermsAndConditions() {
  return (
    <Landing>
      <Box>
        <Typography sx={{ height: '65px' }}></Typography>
        <div className="row p-8 justify-normal">
          <div className="col-md-12 mt-5">
            <Typography component="div">
            <div className='text-center'><strong>Terms & Conditions</strong><br/>
                <em> Please read these terms and conditions carefully before using Our Service.</em>
            </div>
            <br/>
            <strong className='justify-center h-10'>Interpretation and Definitions</strong><br/><br />
                <ol>
                    <li>
                    <strong>Interpretation</strong>
                    <p>
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>
                    </li><br/><hr/>

                    <li>
                    <strong>Definitions</strong>
                    <p>For the purposes of these Terms and Conditions:</p>
                    </li><br/>

                    <li>
                    <p><strong>1. Affiliate </strong>means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                    </li><br/>

                    <li>
                    <p><strong>2. Account </strong>means a unique account created for You to access our Service or parts of our Service</p>
                    </li><br/>

                    <li>
                    <p><strong>3. Country </strong> refers to: Singapore</p>
                    </li><br/>

                    <li>
                    <p><strong>4. Company </strong>(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Upcie Pte Ltd, 6001 Beach Road, #21-02, Singapore 199589.</p>
                    </li><br/>

                    <li>
                    <p><strong>5. Content </strong>refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content.</p>
                    </li><br/>

                    <li>
                    <p><strong>6. Device </strong>means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
                    </li><br/>

                    <li>
                    <p><strong>7. Feedback </strong>means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of our Service.</p>
                    </li><br/>

                    <li>
                    <p><strong>8. Mentee </strong>refers to an individual from a valid Small or Medium Enterprise business in Singapore (SME) who signs up on the Website to seek business advice from theWebsite's Mentor(s). A Mentee is also referred to as an "SME" on the Website. </p>
                    </li><br/>

                    <li>
                    <p><strong>9. Mentor </strong>refers to an individual who signs up as on Website to provide business consultation free-of-charge to SME(s) or Mentee(s). A Mentor shares his/her business experience, insights, and expertise with his/her assigned SME(s) or Mentee(s) with the goal of helping the SME(s) or Mentee(s) learn and grow his/her business.</p>
                    </li><br/>

                    <li>
                    <p><strong>10. Promotions </strong>refer to contests, sweepstakes or other promotions offered through the Service.</p>
                    </li><br/>

                    <li>
                    <p><strong>11. Service</strong> refers to the Website</p>
                    </li><br/>

                    <li>
                    <p><strong>12. SME </strong>means a Small and Medium Enterprise company. According to Singapore's Ministry of Trade and Industry, an SME is defined as a business with annual sales  turnover of not more than SGD$100 million or employing no more than 200 staff. An individual from an SME company can sign up on the Website to seek business advice from the Website's Mentor(s). An SME is also referred to as a "Mentee" on the Website. </p>
                    </li><br/>

                    <li>
                    <p><strong>13. Terms and Conditions </strong>(also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</p>
                    </li><br/>

                    <li>
                    <p><strong>14. Third-party Social Media Service </strong>means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>
                    </li><br/>

                    <li>
                    <p><strong>15. Website </strong>refers to upcie, accessible from upcie.net</p>
                    </li><br/>

                    <li>
                    <p><strong>16. You </strong>means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                    </li><br/>

                </ol>

                <div className='text-center'>
                    <strong>Acknowledgments</strong>
                </div><hr/><br/>

                <p>
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                </p>
                <p>
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                </p>
                <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                <p>You represent that You are at least 18 years old and have the necessary legal capacity, right, power and authority to agree to this Terms & Conditions agreement and You are either: 1) accessing the Website, using the Services and contracting in your own personal capacity; or 2) accessing the Website, using the Services and contracting on behalf of a corporate entity. The Company does not permit those under 18 to use the Service.</p>
                <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
                <br/>

                <div className='text-center'>
                    <strong>Promotions</strong>
                </div><hr/><br/>
                <p>Any Promotions made available through the Service may be governed by rules that are separate from these Terms.</p>
                <p>If You participate in any Promotions, please review the applicable rules as well as ourPrivacy policy. If the rules for a Promotion conflict with these Terms, the Promotion rules will apply.</p>
                <br/>

                <div className='text-center'>
                    <strong>User Accounts</strong>
                </div><hr/><br/>
                <p>When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.</p>
                <p>You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service.</p>
                <p>You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account.</p>
                <p>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than You without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.</p>
                <p>Before submitting your account profile to us, as either an SME or a Mentor, You must agree to our Privacy Policy, Terms and Conditions, and all the checklisted items stated in the popup box before your Account can be accepted by our Website. Failure to comply with all requested legal conditions will result in non-acceptance systematically by our Website.</p>
                <br/>

                <div className='text-center'>
                    <strong>Content</strong>
                </div><hr/><br/>
                <p><strong>a) Your Right to Post Content</strong></p>
                <p>Our Service allows You to post Content. You are responsible for the Content that You post to the Service, including its legality, reliability, and appropriateness. By posting Content to the Service, You grant Us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of Your rights to any Content You submit, post or display on or through the Service and You are responsible for protecting those rights. You agree that this license includes the right for Us to make Your Content available to other users of the Service, who may also use Your Content subject to these Terms.</p>
                <p>You represent and warrant that: (i) the Content is Yours (You own it) or You have the right to use it and grant Us the rights and license as provided in these Terms, and (ii) the posting of Your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.</p>
                <br/>

                <p><strong>b) Content Restrictions</strong></p>
                <p>The Company is not responsible for the content of the Service's users. You expressly understand and agree that You are solely responsible for the Content and for all activity that occurs under Your account, whether done so by You or any third person using Your account.</p>
                <p>You may not transmit any Content that is unlawful, offensive, upsetting, intended to disgust, threatening, libelous, defamatory, obscene or otherwise objectionable. Examples of such objectionable Content include, but are not limited to, the following:</p>
                <ol>
                    <li>* Unlawful or promoting unlawful activity.</li>
                    <li>* Defamatory, discriminatory, or mean-spirited content, including references or commentary about religion, race, sexual orientation, gender, national/ethnic origin, or other targeted groups.</li>
                    <li>* Spam, machine - or randomly - generated, constituting unauthorized or unsolicited advertising, chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling</li>
                    <li>* Containing or installing any viruses, worms, malware, trojan horses, or other content that is designed or intended to disrupt, damage, or limit the functioning of any software, hardware or telecommunications equipment or to damage or obtain unauthorized access to any data or other information of a third person.</li>
                    <li>* Infringing on any proprietary rights of any party, including patent, trademark, trade secret, copyright, right of publicity or other rights.</li>
                    <li>* Impersonating any person or entity including the Company and its employees or representatives.</li>
                    <li>* Violating the privacy of any third person.</li>
                    <li>* False information and features.</li>
                </ol><br/>
                <p>The Company reserves the right, but not the obligation, to, in its sole discretion, determine whether or not any Content is appropriate and complies with these Terms, refuse or remove this Content. The Company further reserves the right to make formatting and edits and change the manner of any Content. The Company can also limit or revoke the use of the Service if You post such objectionable Content. As the Company cannot control all content posted by users and/or third parties on the Service, you agree to use the Service at your own risk. You understand that by using the Service You may be exposed to content that You may find offensive, indecent, incorrect or objectionable, and You agree that under no circumstances will the Company be liable in any way for any content, including any errors or omissions in any content, or any loss or damage of any kind incurred as a result of your use of any content.</p>
                <br/>

                <div className='text-center'>
                    <strong>Content Backups</strong>
                </div><hr/><br/>
                <p>Although regular backups of Content are performed, the Company does not guarantee there will be no loss or corruption of data. Corrupt or invalid backup points may be caused by, without limitation, Content that is corrupted prior to being backed up or that changes during the time a backup is performed.</p>
                <p>The Company will provide support and attempt to troubleshoot any known or discovered issues that may affect the backups of Content. But You acknowledge that the Company has no liability related to the integrity of Content or the failure to successfully restore Content to a usable state. You agree to maintain a complete and accurate copy of any Content in a location independent of the Service.</p>
                <br/>

                <div className='text-center'>
                    <strong>Copyright Policy</strong>
                </div><hr/><br/>

                <p><strong>Intellectual Property Infringement</strong></p>
                <p>We respect the intellectual property rights of others. It is Our policy to respond to any claim that Content posted on the Service infringes a copyright or other intellectual property infringement of any person.</p>
                <p>If You are a copyright owner, or authorized on behalf of one, and You believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, You must submit Your notice in writing to the attention of our copyright agent via email at hello@upcie.net and include in Your notice a detailed description of the alleged infringement.</p>
                <p>You may be held accountable for damages (including costs and attorneys' fees) formisrepresenting that any Content is infringing Your copyright.</p>

                <p><strong> DMCA Notice and DMCA Procedure for Copyright Infringement Claims</strong></p>
                <p>You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):</p>

                <p>1.An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest.</p>
                <p>2. A description of the copyrighted work that You claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work.</p>
                <p>3. Identification of the URL or other specific location on the Service where the material that You claim is infringing is located.</p>
                <p>4. Your address, telephone number, and email address.</p>
                <p>5. A statement by You that You have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</p>
                <p>6. A statement by You, made under penalty of perjury, that the above information in Your notice is accurate and that You are the copyright owner or authorized to act on the copyright owner's behalf.</p>

                <p>You can contact our copyright agent via email at hello@upcie.net. Upon receipt of a notification, the Company will take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged content from the Service.</p>
                <br/>

                <div className='text-center'>
                    <strong>Matching Process</strong>
                </div><hr/><br/>

                <p><strong> Criteria for Matching </strong></p>
                <p>Matches between SMEs or Mentees and Mentors are made based on the information provided during registration, including but not limited to industry sector and functional areas of help (for SMEs), and industry sector experience and mentorship experience (for Mentors).</p>
                <br/>
                <p><strong>Acceptance of Match</strong></p>
                <p>Both SMEs and Mentors will be notified of a potential match via their registered email and must accept or decline the recommended match within 10 business days from the date the email notification was sent out. Declining a recommended match will not affect future matching opportunities. </p>
                <br/>


                <div className='text-center'>
                    <strong>Commitment and Responsibilities</strong>
                </div><hr/><br/>

                <p><strong>Time Commitment</strong></p>
                <p>Once mentorship is accepted by both SME and recommended Mentor, both parties agree to meet in-person or virtually for a total of up to 10 hours over the course of 12-month period, with the time count starting from a mutually-agreed-upon first meeting. The scheduling and mode of communication for these mentorship meetings are to be arranged directly between the SME and Mentor based on their scheduling convenience. The Company will not be involved in any arrangement of meeting or communication process. </p>
                <br/>
                <p><strong>Responsibilities of SMEs</strong></p>
                <p>Once accepted into the Website, SMEs are encouraged to provide accurate and up-to-date information on their page profile, to actively participate in the mentorship process, and to respect their Mentor's time and expertise. </p>
                <br/>
                <p><strong>Responsibilities of Mentors</strong></p>
                <p>Once accepted into the Website, Mentors are encouraged to provide accurate and up-to-date information on their page profile, to actively participate in the mentorship process, and to respect the SME's goals and challenges.</p>
                <br/>
                <p><strong>Communication Expectations</strong></p>
                <p>Both SMEs and Mentors are expected to maintain regular communication and be responsive to each other's outreach in order to ensure a smooth and fruitful mentorship process. </p>
                <br/>

                <div className='text-center'>
                    <strong>Code of Conduct </strong>
                </div><hr/><br/>

                <p><strong>Professionalism </strong></p>
                <p>Both SMEs and Mentors are expected to conduct themselves professionally and respectfully at all times. Should there be any incident of unprofessional conduct, You may report the incident to us at feeback@upcie.net</p>
                <br/>
                <p><strong>Confidentiality </strong></p>
                <p>Both SMEs and Mentors agree that any information shared during the mentoring relationship must be kept confidential unless both parties agree otherwise. Signing of a Non-Disclosure Agreement is optional, unless one party deems it necessary and get the consent of the other party to execute.</p>
                <br/>
                <p><strong>Respect and Non-Discrimination </strong></p>
                <p>Both SMEs and Mentors are expected to treat each other with mutual respect and must not
                engage in discriminatory behavior of any kind.</p>
                <br/>
                <p><strong>Intellectual Property</strong></p>
                <p>The Service and its original content (excluding Content provided by You or other users),
                features and functionality are and will remain the exclusive property of the Company and its
                licensors.</p>
                <p>The Service is protected by copyright, trademark, and other laws of both the Country and
                foreign countries.</p>
                <p>Our trademarks and trade dress may not be used in connection with any product or service
                without the prior written consent of the Company.</p>

                <br/>

                <p><strong>Your Feedback to Usrong/tr</strong></p>
                <p>You assign all rights, title and interest in any Feedback You provide the Company. If for any
reason such assignment is ineffective, You agree to grant the Company a non-exclusive,
perpetual, irrevocable, royalty free, worldwide right and license to use, reproduce, disclose,
sub-license, distribute, modify and exploit such Feedback without restriction.</p>
<br/>
                <p><strong>Links to Other Websitesstrong</strong></p>
                <p>Our Service may contain links to third-party web sites or services that are not owned or
controlled by the Company.</p><p>The Company has no control over, and assumes no responsibility for, the content, privacy
policies, or practices of any third party web sites or services. You further acknowledge and
agree that the Company shall not be responsible or liable, directly or indirectly, for any
damage or loss caused or alleged to be caused by or in connection with the use of or
reliance on any such content, goods or services available on or through any such web sites
or services.</p><p>We strongly advise You to read the terms and conditions and privacy policies of any third-
party web sites or services that You visit.</p>
<br/>
                <p><strong>Termination</strong></p>
                <p>We may terminate or suspend Your Account immediately, without prior notice or liability,
for any reason whatsoever, including without limitation if You breach these Terms and
Conditions.</p>
<p>Upon termination, Your right to use the Service will cease immediately. If You wish to
terminate Your Account, You may simply discontinue using the Service.</p>
<br/>
                <p><strong>Limitation of Liabilitystrong</strong></p>
                <p>Notwithstanding any damages that You might incur, the entire liability of the Company and
any of its suppliers under any provision of this Terms and Your exclusive remedy for all of
the foregoing shall be limited to the amount actually paid by You through the Service.</p><p>To the maximum extent permitted by applicable law, in no event shall the Company or its
suppliers be liable for any special, incidental, indirect, or consequential damages
whatsoever (including, but not limited to, damages for loss of profits, loss of data or other
information, for business interruption, for personal injury, loss of privacy arising out of or
in any way related to the use of or inability to use the Service, third-party software and/or
third-party hardware used with the Service, or otherwise in connection with any provision
of this Terms), even if the Company or any supplier has been advised of the possibility of
such damages and even if the remedy fails of its essential purpose.</p>
<p>Some countries do not allow the exclusion of implied warranties or limitation of liability for
incidental or consequential damages, which means that some of the above limitations may
not apply. In these countries, each party's liability will be limited to the greatest extent
permitted by law.</p>
<p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects
without warranty of any kind. To the maximum extent permitted under applicable law, the
Company, on its own behalf and on behalf of its Affiliates and its and their respective
licensors and service providers, expressly disclaims all warranties, whether express,
implied, statutory or otherwise, with respect to the Service, including all implied warranties
of merchantability, fitness for a particular purpose, title and non-infringement, and
warranties that may arise out of course of dealing, course of performance, usage or trade
practice. Without limitation to the foregoing, the Company provides no warranty or
undertaking, and makes no representation of any kind that the Service will meet Your
requirements, achieve any intended results, be compatible or work with any other software,
applications, systems or services, operate without interruption, meet any performance or
reliability standards or be error free or that any errors or defects can or will be corrected.</p>

<br/>
                <p><strong>"AS IS" and "AS AVAILABLE" Disclaimer</strong></p>
                <p>   The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects
without warranty of any kind. To the maximum extent permitted under applicable law, the
Company, on its own behalf and on behalf of its Affiliates and its and their respective
licensors and service providers, expressly disclaims all warranties, whether express,
implied, statutory or otherwise, with respect to the Service, including all implied warranties
of merchantability, fitness for a particular purpose, title and non-infringement, and
warranties that may arise out of course of dealing, course of performance, usage or trade
practice. Without limitation to the foregoing, the Company provides no warranty or
undertaking, and makes no representation of any kind that the Service will meet Your
requirements, achieve any intended results, be compatible or work with any other software,
applications, systems or services, operate without interruption, meet any performance or
reliability standards or be error free or that any errors or defects can or will be corrected.   </p>

<p>   Without limiting the foregoing, neither the Company nor any of the company's provider
makes any representation or warranty of any kind, express or implied: (i) as to the
operation or availability of the Service, or the information, content, and materials or
products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as
to the accuracy, reliability, or currency of any information or content provided through the
Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of
the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or
other harmful components.</p>

<p> Some jurisdictions do not allow the exclusion of certain types of warranties or limitations
on applicable statutory rights of a consumer, so some or all of the above exclusions and
limitations may not apply to You. But in such a case the exclusions and limitations set forth
in this section shall be applied to the greatest extent enforceable under applicable law.  </p>

<br/>
                <p><strong> Governing Law   </strong></p>
                <p> The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and
Your use of the Service. Your use of the Application may also be subject to other local, state,
national, or international laws.    </p>
<br/>
<div className='text-center'>
                    <strong>Disputes Resolution</strong>
                </div><hr/><br/>
               
               
                <p><strong>Process for Addressing Issues Between SMEs and Mentors</strong>    </p>

                <p>If any issues arise between the SMEs and Mentors, both parties agree to attempt to resolve the
issues directly. If unresolved, the Company may mediate, but its involvement will be limited. For
any unresolved issues, You can email the Company at feedback@upcie.net</p>
<br/>

                <p><strong>  Role of Company  </strong></p>
                <p>  The Company acts as a facilitator and is not responsible for resolving disputes between parties.
If You have any concern or dispute about the Service, You agree to first try to resolve the dispute
informally by contacting the Company at feedback@upcie.net   </p>
<br/>
                <p><strong>  For European Union (EU) Users  </strong></p>
                <p> If You are a European Union consumer, you will benefit from any mandatory provisions of
                the law of the country in which You are resident.    </p>
                <br/>
                <p><strong>  United States Legal Compliance  </strong></p>
                <p>You represent and warrant that (i) You are not located in a country that is subject to the
United States government embargo, or that has been designated by the United States
government as a "terrorist supporting" country, and (ii) You are not listed on any United
States government list of prohibited or restricted parties. </p>
<br/>
                
<div className='text-center'>
                    <strong>Severability and Waiver</strong>
                </div><hr/><br/>
               
                <p><strong>  Severability  </strong></p>
                <p>  If any provision of these Terms is held to be unenforceable or invalid, such provision will be
changed and interpreted to accomplish the objectives of such provision to the greatest
extent possible under applicable law and the remaining provisions will continue in full force
and effect. </p>
<br/>
                <p><strong>  Waiver  </strong></p>
                <p> Except as provided herein, the failure to exercise a right or to require performance of an
obligation under these Terms shall not affect a party's ability to exercise such right or
require such performance at any time thereafter nor shall the waiver of a breach constitute
a waiver of any subsequent breach.    </p>
<br/>
                <p><strong>  Translation Interpretation  </strong></p>
                <p>   These Terms and Conditions may have been translated if We have made them available to
You on our Service. You agree that the original English text shall prevail in the case of a
dispute.  </p>
<br/>
                <p><strong>  Changes to These Terms and Conditions  </strong></p>
                <p>  We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If
a revision is material We will make reasonable efforts to provide at least 30 days' notice
prior to any new terms taking effect. What constitutes a material change will be determined
at Our sole discretion.   </p>
<p>By continuing to access or use Our Service after those revisions become effective, You agree
to be bound by the revised terms. If You do not agree to the new terms, in whole or in part,
please stop using the website and the Service.</p>
<br/>
                <p><strong>    Contact Us</strong></p>
                <p> If you have any questions about these Terms and Conditions, You can contact us by email:
                hello@upcie.net    </p>

                

            </Typography>
          </div>
        </div>
      </Box>
    </Landing>
  );
}

export default TermsAndConditions;
