import React from 'react';
import './Footer.scss';

export function Footer(props) {
  console.log(props);
  return (
    <div className="footer">
      <div className="footerImg">
        <img src="./images/logo-white.svg" alt="" />
      </div>
      <div className="block">
        <div className="block11">
          <img src="./images/icon-location.svg" alt="" />
          <p> Phone: +1-543-123-4567</p>
        </div>
        <div className="block12">
          <div>
            <img src="./images/icon-phone.svg" alt="" />
            <p> Phone: +1-543-123-4567</p>
          </div>
          <div>
            <img src="./images/icon-email.svg" alt="" />
            <p> example@fylo.com</p>
          </div>
        </div>
        <div className="block13">
          <p> About Us</p>
          <p> Jobs</p>
          <p> Press</p>
          <p> Blog</p>
        </div>
        <div className="block14">
          <p> Contact Us</p>
          <p> Terms</p>
          <p> Privacy</p>
        </div>
        <div className="block15">
          <img src="./images/icon-facebook.svg" alt="" />
          <img src="./images/icon-instagram.svg" alt="" />
          <img src="./images/icon-twitter.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
