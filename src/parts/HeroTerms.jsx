/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

export default function HeroTerms({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-5 pb-5">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Terms & Conditions</h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
          Welcome to AIntend Solutions! These terms and conditions outline the rules and regulations for the use of our website and services.<br />  
<br />
By accessing our website, you agree to abide by these terms. If you disagree with any part, please discontinue use of our services.  <br />
<br />
**Key Points:**  <br />
- Our services are provided as-is.  <br />
- You agree to use the website only for lawful purposes.<br />  
- Unauthorized use or reproduction of content is prohibited.  <br />
- We reserve the right to modify these terms at any time.<br />
<br />
For detailed information, feel free to contact us.


          </p>
        </Fade>
      </div>
    </div>
  );
}
