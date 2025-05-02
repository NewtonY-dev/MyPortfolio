import React from "react";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/vendor/aos/aos.css";
import "../../assets/vendor/swiper/swiper-bundle.min.css";
import "../../assets/vendor/glightbox/css/glightbox.min.css";
import "./../../assets/css/main.css";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const handleMobileNavToggle = () => {
    document.body.classList.toggle("mobile-nav-active");
    const toggleIcon = document.querySelector(".mobile-nav-toggle");
    if (toggleIcon) {
      toggleIcon.classList.toggle("bi-list");
      toggleIcon.classList.toggle("bi-x");
    }
  };

  return (
    <header
      id="header"
      className="header d-flex align-items-center light-background sticky-top"
    >
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <HashLink
          smooth
          to="/#"
          className="logo d-flex align-items-center me-auto me-xl-0"
        >
          <h1 className="sitename">Newton Yetsedaw</h1>
        </HashLink>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <HashLink smooth to="/#home" className="active">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#resume">
                Resume
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
          <i
            className="mobile-nav-toggle d-xl-none bi bi-list"
            onClick={handleMobileNavToggle}
          ></i>
        </nav>

        <div className="header-social-links">
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
    </header>
  );
};

export default Header;
