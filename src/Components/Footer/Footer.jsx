import React from "react";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container">
        <div className="copyright text-center ">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Newton Yetsedaw</strong>{" "}
            <span>
              All Rights Reserved
              <br />
            </span>
          </p>
        </div>
        <div className="social-links d-flex justify-content-center">
          <HashLink smooth to="/#" className="email">
            <i className="bi bi-envelope-fill"></i>
          </HashLink>
          <HashLink smooth to="/#" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </HashLink>
          <HashLink
            smooth
            to="https://t.me/Newborn_1234"
            className="telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-telegram"></i>
          </HashLink>
          <HashLink
            smooth
            to="https://github.com/NewtonY-dev"
            className="github"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </HashLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
