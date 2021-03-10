import React from 'react';
import googleplay from '../src/images/googleplaybuttonblack.gif';
import appstore from '../src/images/applestorebuttonblack.gif';
import footerlogo from '../src/images/logofooter.png';

const Footer = () => {
    return (
        <>

<footer className="margintop">
      
      <div className="container">
      
      <div className="row">
          
          <div className="col-12 col-md-5 footerlogo">
              <img src={footerlogo} title="Saheli" alt="Saheli" />
          <p>“Saheli” is a multilingual mobile App devoted to pregnancy care. It delivers short entertaining and informative daily videos for pregnant women in English, Hindi, Bengali, Punjabi, Marathi, Kannada, Tamil, Telugu and Malayalam.</p>
          </div>
          
          <div className="col-12 col-md-3 footerlogo">
             <h2>Contact Info</h2>
          <p>You can contact us via these mediums</p>
          <ul>
              <li><a href="#" titlt="Mydia100 Communications Pvt. Ltd."> <i className="fas fa-map-marker-alt"></i> Mydia100 Communications Pvt. Ltd. <span>A 51, Sector 2 Noida</span></a></li>
          <li><a href="#" titlt="9711195755, 012087654432"><i className="fas fa-phone"></i>9711195755, 012087654432</a></li>
           <li><a href="#" titlt="info@mydia100.com"><i className="far fa-envelope"></i> info@mydia100.com</a></li>
          </ul>
          </div>
          
          <div className="col-12 col-md-4 footersocial">
              <h2>Social Presence</h2>
         <ul>
          <li><a href="#" title="Youtube"><i className="fab fa-youtube"></i></a></li>
           <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
          </ul>
          
              <h2>Saheli App</h2>
          <div className="appbutton">
              <a href="#" title=""><img src={googleplay} alt="" title="" className="img-fluid" /></a>
              <a href="#" title=""><img src={appstore} alt="" title="" className="img-fluid" /></a>
              </div>
          </div>
          
          </div></div>
     </footer>   
           

        </>
    )
}

export default Footer;
