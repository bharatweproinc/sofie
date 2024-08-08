import React from 'react';
import { useCookies } from 'react-cookie';
import CookieConsent from 'react-cookie-consent';

function Cookie() {
  const [cookies, setCookie] = useCookies(['user']);

  const handleAccept = () => {
    setCookie('user-consent', 'accepted', { path: '/' });
  };

  return (
    <div>
      <CookieConsent
        onAccept={handleAccept}
        buttonText="Agree"
      >
        This website uses cookies for analytics and functionality purposes. To find out more, view our <a href={route('landing.termsconditions')}>Cookie Policy</a> & <a href={route('landing.privacy')}>Privacy Policy.</a>
      </CookieConsent>
    </div>
  );
}

export default Cookie;
