/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import HeroRefund from 'parts/HeroRefund';
// import AllTeam from 'parts/AllTeam';
import Footer from 'parts/Footer';

// import { TeamMembers } from 'json/landingPageData';

export default class RefundPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <HeroRefund />
        {/* <AllTeam data={TeamMembers} /> */}
        <Footer />
      </>
    );
  }
}
