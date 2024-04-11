import React from 'react';
import './DonationBanner.css'; 

function DonationBanner() {
  return (
    <div className="donation-banner">
      <h1>Want to raise more funds and help<br></br>
      each other by donating</h1> 
      <p>
        We Save is an initiative towards saving lives, as it is an essential and noble pursuit that we
       <br></br>all should support. Their efforts have saved countless lives over the years.
      </p>
      <div className="donation-buttons">
        <button>Donate Now</button>
        <button>Watch Now</button>
      </div>
      <div className="donation-image">
        <img src="./images/Hero.png" alt="Hero"></img>
      </div>
    </div>
  );
}

export default DonationBanner;
