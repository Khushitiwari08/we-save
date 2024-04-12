import React from 'react';
import '../styles/index.css';
import App from '../components/Navbar';
import DonationBanner from '../components/DonationBanner';
import AboutUs from '../components/AboutUs';
import Services from '../components/services';
import JoinUs from '../components/Joinus';

function Home() {
  return (
    <div >
      <App />
    <DonationBanner />
    <AboutUs />
    <Services />
    <JoinUs />
    </div>
  );
}

export default Home;

