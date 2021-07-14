import React from "react";
import { BackTop } from "antd";

const FooterApp = () => {
  return (
    <div id="footer" className="container-fluid bgBlack">
      <div className="footer">
        <div className="logo titleHolder">
          <i className="fas fa-bolt"></i>Ititans
        </div>
        <ul className="socials">
          <li>
            <a href="www.facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="www.linkedin.com">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="www.pinterest.com">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="www.instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="copyright">CopyRight &copy; 2021 Ititans</div>
        <BackTop>
          <div className="goTop">
            <i className="fas fa-arrow-circle-up"></i>
          </div>
        </BackTop>
      </div>
    </div>
  );
};
export default FooterApp;
