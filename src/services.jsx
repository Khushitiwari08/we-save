import React from 'react';
import './services.css';

function Services() {
  return (
    <div className="parent">
    <div className="service">
      <h1>What do we provide?</h1>
      <p> Donate, receive or volunteer with us in connecting.</p>
    </div>
    <div className='donate-organs'>
        <div className='donate-img'>
        <img src="./images/DonateOrgans.png" alt="Donate Organs"></img>
        </div>
        <div className='donate-text'>
            <h2>Donate Organs</h2>
            <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.Horem ipsum dolor sit amet, con sectetur adipiscing elit.Nunc vulputate
               libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Horem ipsum dolor
               sit amet, consectetur adipiscing elit.Horem ipsum dolor sit amet.</p>
        </div>
        <div className='donate-button'>
            <button>Donate Now</button>
        </div>
    </div>
    <div className='receive-organs'>
        <div className='receive-img'>
            <img src="./images/receiveorgans.png" alt="Receive"></img>
        </div>
        <div className='receive-text'>
            <h2>Receive Organs</h2>
            <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.Horem ipsum dolor sit amet, con sectetur adipiscing elit.Nunc vulputate
               libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Horem ipsum dolor
               sit amet, consectetur adipiscing elit.Horem ipsum dolor sit amet.</p>
        </div>
        <div className='receive-button'>
            <button>Receive Now</button>
        </div>
    </div>
    <div className='volunteer'>
        <div className='volunteer-img'>
        <img src="/images/volunteer.png" alt='Volunteer'></img>
        </div>
        <div className='volunteer-text'>
            <h2>Volunteer Time</h2>
            <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.Horem ipsum dolor sit amet, con sectetur adipiscing elit.Nunc vulputate
               libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Horem ipsum dolor
               sit amet, consectetur adipiscing elit.Horem ipsum dolor sit amet.</p>
        </div>
        <div className='volunteer-button'>
            <button>Volunteer Now</button>
        </div>
    </div>
    </div>

  );
}

export default Services;
