import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className='container'>
    <div className="about-us">
      <h1>How we're making a difference?</h1>
      <p>


Welcome to WeSave, your trusted platform for organ donation. We are 
dedicated to saving livesby connecting potential
 donors with those in need. Every day, countless individuals await life-changing 
 organ transplants, and you can make a
  difference. Registering as an organ donor is a powerful act of compassion and generosity  that can provide a second chance 
  at life. Join us in our mission to inspire and empower 
individuals to save lives through organ donation. Together, we can create a world where everyone has access to the life-saving
 organs they desperately need. Register as a donor today!</p>
 
      <div className="explore-button">
        <button>Explore Now</button>
        </div>
    </div>
        <div className="statistics">
    <img src="./images/Aboutus.png" alt="About Us"></img>
 </div>
      
    </div>
  );
}

export default AboutUs;
