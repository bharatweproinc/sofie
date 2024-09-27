import { Landing } from '@/Layouts/Landing';
import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const BackgroundImageContainer = styled('div')({
  backgroundImage: 'url(./images/image7.png)',
  backgroundSize: 'cover',
  height: '896px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundPosition:'right top !important'
});

function Privacy() {
  return (
    <Landing>
      <Box>
        <Typography sx={{ height: '65px' }}></Typography>
        <div className="row p-8 justify-normal" >
            <div className="col-md-12 mt-5">
                <div className='text-center justify-center'>
                    <strong>UPCIE PRIVACY POLICY</strong>
                </div>
                <hr/><br/>
                <p><strong>1. Introduction</strong></p><br/>
                <p>At UPCIE Pte. Ltd. (“UPCIE”) we respect the privacy and confidentiality of the personal data of our
                    clients, associates, and others whom we interact with in the course of providing our services. We are
                    committed to implementing policies, practices, and processes to safeguard the collection, use and
                    disclosure of the personal data you provide us, in compliance with the
                    <a href = "https://sso.agc.gov.sg/Act/PDPA2012"> <u>Singapore Personal Data Protection Act (PDPA) 2020.</u></a>
                </p>

                <br/><p>We have developed this Data Privacy Notice to assist you in understanding how we collect, use,
                    disclose, process, protect and retain your personal data that is in our possession.
                </p>

                <hr/><br/><p><strong>2. How We Collect Your Personal Data</strong></p><br/>
                
                <p>Personal data refers to any information that can uniquely identify an individual person (a) on its own,
                or (b) when combined with other information. Under the PDPA, business contact information (e.g.,
                full name, business address, business telephone number) is not considered as personal data so
                long as it is used strictly for business-to-business (B2B) transactions.</p><br/>

                <p>We collect your personal data when you:</p>
                <ol>
                    <li>* Enter into an acknowledgement with upcie, to receive/provide free mentoring advisory
                    services</li>
                    <li>* Create an account on the upcie platform, to register for our upcie matching program</li>
                    <li>* Provide information to be used for upcie matching program</li>
                    <li>* Visit our website and leave behind your contact information through our contact form</li>
                    <li>* Communicate with us via emails</li>
                </ol>

                <hr/><br/><p><strong>3. Types of Personal Data We Collect About You</strong></p><br/>
                <p>The types of personal data we collect about you include:</p>
                <ol>
                    <li>* First and last name</li>
                    <li>* Email</li>
                    <li>* Photo (Profile/Founder/Company logo)</li>
                    <li>* Position in company</li>
                    <li>* How you have heard about us</li>
                    <li>* Phone number (optional)</li>
                </ol>

                <hr/><br/><p><strong>4. How We Use Your Personal Data</strong></p><br/>
                <p>We use the personal data you provide us for one or more of the following purposes:</p>
                <ol>
                    <li>* Verifying user identity and accuracy of personal details provided</li>
                    <li>* Registration for upcie matching platform</li>
                    <li>* Profile creation on upcie</li>
                    <li>* Matching process on upcie</li>
                    <li>* Communication via email</li>
                    <li>* Respond to inquiries and feedback</li>
                    <li>* Carry out our obligations arising from any contracts entered into between you and us</li>
                    <li>* Comply with or fulfil legal obligations and regulatory requirements</li>
                    <li>* Transmitting to any unaffiliated third parties including our third party service providers and
                        agents, and relevant governmental and/or regulatory authorities, whether in Singapore or
                        abroad, for the aforementioned purposes</li>
                </ol>

                <hr/><br/><p><strong>5. Who We Disclose Your Personal Data To</strong></p><br/>
                
                <p>We disclose some of the personal data you provide us to the following entities or organisations
                outside UPCIE in order to fulfil our services to you:</p>
                <ol>
                    <li>* upcie Team</li>
                    <li>* upcie Web Developers</li>
                    <li>*  EDM/Email Service Vendor, Twillo SendGrid</li>
                    <li>* Cloud Service Provider, Digital Ocean Server Hosting</li>
                    <li>* Google Analytics</li>
                </ol><br/>

                <p>Where required to do so by law, we may disclose personal data about you to the relevant authorities
                or to law enforcement agencies.</p>
                                
                <hr/><br/><p><strong>6. How We Manage the Collection, Use and Disclosure of Your Personal Data</strong></p><br/>
           
                <p><strong>6.1 Obtaining Consent</strong></p><br/>
                <p>Before we collect, use, or disclose your personal data, we will notify you of the purpose why we are
                doing so. We will obtain written confirmation from you on your expressed consent. We will not collect
                more personal data than is necessary for the stated purpose. We will seek fresh consent from you if
                the original purpose for the collection, use or disclosure of your personal data has changed.
                Under certain circumstances, we may assume deemed consent from you when you voluntarily
                provide your personal data for the stated purpose, e.g., when you apply for a job with us by sending
                in your resume/CV containing personal information.</p><br/>
                
                <p>We may rely on exceptions to the need for consent under the PDPA for the collection, use or
                disclosure of your personal data under the following circumstances (only those relevant to UPCIE
                are included):</p>
                <ol>
                    <li>* the personal data is publicly available;</li>
                    <li>* the personal data is disclosed by a public agency or disclosed to a public agency;</li>
                    <li>* the personal data is necessary for any investigation or proceedings;</li>
                    <li>*  the personal data is necessary for evaluative purposes (e.g., determining the suitability and
                        authenticity of the applicant);</li>
                    <li>* the personal data is necessary for evaluative purposes (e.g., determining the suitability of a
                        job applicant for the job applied for);</li>
                    <li>* the personal data is necessary for the purpose of managing or terminating an agreement
                    relationship; and</li>
                    <li>* Personal data is necessary for a business asset transaction</li>
                </ol><br/>

                <p><strong>6.2 Withdrawal of Consent</strong></p><br/>
                <p>If you wish to withdraw consent, you should give us reasonable advance notice. We will advise you
                of the likely consequences of your withdrawal of consent, e.g., without your personal contact
                information we may not be able to inform you of future services offered by us.
                Your request for withdrawal of consent can take the form of an email or letter to us, or through the
                “Unsubscribe” feature in an online service</p><br/>

                <p><strong>6.3 Use of Cookies</strong></p><br/>
                <p>We use “cookies” to collect information about your online activity on our website. A cookie is a small
                text file created by the website that is stored in your computer to allow the website to recognise you
                and keep track of your preferences.
                The cookie makes it convenient for you, so you do not have to retype the same information again
                when you revisit the website or fill out electronic forms.</p>

                <p>The majority of cookies we use are “session cookies,” which are automatically deleted from your
                computer's hard disk at the end of each session.
                You may choose not to accept cookies by turning off this feature in your web browser. Note that by
                doing so, you may not be able to use some of the features and functions in our web applications.</p><br/>

                <p><strong>6.4 Third-Party Consent</strong></p><br/>
                <p>We do not obtain consent on behalf of another individual; we only obtain consent from the individual
                who will be dealing directly with us</p><br/>

                <hr/><br/><p><strong>7. How We Ensure the Accuracy of Your Personal Data</strong></p><br/>

                <p>We will take reasonable steps to ensure that the personal data we collect about you is accurate,
                complete, not misleading and kept up to date.
                From time to time, we may conduct a data verification exercise to ask you to update us on any
                changes to the personal data we hold about you. If we are in an ongoing relationship with you, you
                must update us on any changes to your personal data (such as a change in your mailing address).</p><br/>

                <hr/><br/><p><strong>8.  How We Protect Your Personal Data</strong></p><br/>
                
                <p>We have implemented appropriate information security and technical measures to protect the
                personal data we hold about you against loss, misuse, destruction, unauthorised
                alteration/modification, access, disclosure, or similar risks.</p>
                <p>We have also implemented reasonable and appropriate organizational measures to maintain the
                confidentiality and integrity of your personal data and will only share it with authorised persons on a "need to know" basis.
                When we engage third-party data processors to process personal data on our behalf, we will ensure
                that they provide sufficient guarantees that they have implemented the necessary organisational and
                technical security measures and taken reasonable steps to comply with these measures.</p> <br/>

                <hr/><br/><p><strong>9. How We Retain Your Personal Data</strong></p><br/>
               
                <p>We have a document retention policy that tracks the retention schedules of the personal data you
                provide us in paper or electronic forms. We will not retain any of your personal data when it is no
                longer needed for business or legal purposes.
                When the retention limit is reached, we will dispose of or destroy any documents containing your
                personal data in a proper and secure manner.</p>

                <hr/><br/><p><strong>10. How You Can Access and Make Corrections to Your Personal Data</strong></p><br/>
                
                <p>You may write to us to find out how we have been using or disclosing your personal data over the
                past year. Before we accede to your request, we may need to verify your identity by checking your
                NRIC or other legal identification document. We will respond to your request as soon as possible, or
                within 30 days from the date we receive your request. If we are unable to do so within 30 days, we
                will let you know and give you an estimate of how much longer we require. We may also charge you
                a reasonable fee for the cost involved in processing your access request.</p>
                <p>If you find that the personal data we hold about you is inaccurate, incomplete, misleading or not
                up-to-date, you may ask us to correct the data. Where we are satisfied on reasonable grounds that a
                correction should be made, we will correct the data as soon as possible, or within 30 days from the
                date we receive your request.</p>

                <hr/><br/><p><strong>11. Transfer of Personal Data</strong></p><br/>
                
                <p>Where your personal data needs to be transferred to a country outside Singapore, we will ensure
                that the standard of data protection in the recipient country is comparable to that of Singapore’s
                PDPA. If this is not so, we will enter into a contractual agreement with the receiving party to accord
                similar levels of data protection as those in Singapore.</p>

                <hr/><br/><p><strong>12.  Mandatory Data Breach Notification</strong></p><br/>
                
                <p>In the unlikely event that we suffer a data breach involving unauthorised access or disclosure of
                personal data stored or processed by us, we will meet the PDPA’s breach notification timelines and
                requirements to perform the needful, including but not limited to informing relevant authorities and
                affected individuals, based on the Significant Harm or Significant Scale definitions as set out by the
                PDPA.</p>

                <hr/><br/><p><strong>13. Contacting Us</strong></p><br/>
                
                <p>If you have any query or feedback regarding this Notice, or any complaint you have relating to how
                we manage your personal data, you may contact our Data Protection Officer (DPO) at:
                dpo@upcie.net</p><br/>

                <p>Any query or complaint should include, at least, the following details:</p>
                <ol>
                    <li>* your full name and contact information; and</li>
                    <li>* a brief description of your query or complaint.</li>
                </ol><br/>

                <p>We treat such queries and feedback seriously and will deal with them confidentially and within a
                reasonable time.</p><br/>

                <hr/><br/><p><strong>14. Changes to this Data Privacy Notice</strong></p><br/>
                
                <p>We may update this Data Privacy Notice from time to time. We will notify you of any changes by
                posting the latest Notice on our website. Please visit our website periodically to note any changes.
                Changes to this Notice take effect when they are posted on our website.</p>
            </div>
        </div>

      </Box>
    </Landing>
  );
}

export default Privacy;
