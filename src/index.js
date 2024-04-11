import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Navbar';
import DonationBanner from './DonationBanner';
import AboutUs from './AboutUs';
import Services from './services';
import JoinUs from './Joinus';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <DonationBanner />
    <AboutUs />
    <Services />
    <JoinUs />
  </React.StrictMode>
);


export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
