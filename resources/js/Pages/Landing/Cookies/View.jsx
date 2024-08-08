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
      <h1>Welcome to Our Website</h1>
      <CookieConsent
        onAccept={handleAccept}
        buttonText="Accept All Cookies"
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}

export default Cookie;
