/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

export default function HeroPrivacy({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-5 pb-5">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Privacy Policy</h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
          At AIntend Solutions, we value your privacy and are committed to protecting your personal information.  
<br />
**Information We Collect:**  <br />
- Personal details (e.g., name, email).  <br />
- Usage data for improving services.  <br />
<br />
**How We Use Information:**  <br />
- To process orders and communicate with you.  <br />
- To enhance user experience.<br />
<br />
**Your Rights:**  <br />
- You can request access, correction, or deletion of your data.  <br />
<br />
For more details, contact us at [aintendsolutions@gmail.com].

          </p>
        </Fade>
      </div>
    </div>
  );
}
