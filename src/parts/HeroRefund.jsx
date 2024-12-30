/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

export default function HeroRefund({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-5 pb-5">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Refund Policy</h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
          We currently do not offer refunds for purchases made on our website.  
<br />
If you face any issues with our services or products, please contact our support team. We strive to resolve all concerns promptly to ensure customer satisfaction.  
<br />
For more information, reach out to us at [aintendsolutions@gmail.com].

          </p>
        </Fade>
      </div>
    </div>
  );
}
