import { useState } from "react";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/vendor/aos/aos.css";
import "../../assets/vendor/swiper/swiper-bundle.min.css";
import "../../assets/vendor/glightbox/css/glightbox.min.css";
import "./../../assets/css/main.css";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const handleMobileNavToggle = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const handleNavLinkClick = () => {
    setMobileNavActive(false);
  };

  return (
    <header
      id="header"
      className={`header d-flex align-items-center light-background sticky-top ${
        mobileNavActive ? "mobile-nav-active" : ""
      }`}
    >
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        {/* Logo */}
        <HashLink
          smooth
          to="/#"
          className="logo d-flex align-items-center me-auto me-xl-0"
          onClick={handleNavLinkClick}
        >
          <h1 className="sitename d-none d-md-block">Newton Yetsedaw</h1>
          <div className="logo-square d-md-none">
            <span>NY</span>
          </div>
        </HashLink>

        {/* Desktop Navigation */}
        <nav id="navmenu" className="navmenu d-none d-xl-block">
          <ul>
            <li>
              <HashLink smooth to="/#" className="active">
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
              <HashLink smooth to="/#portfolio">
                Project
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>

        {/* Desktop Social Links */}
        <div className="header-social-links d-none d-xl-flex">
          <a
            href="mailto:yetsedawn@gmail.com"
            className="email"
            aria-label="Send email"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/newton-yetsedaw-205628364"
            className="linkedin"
            aria-label="View LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://t.me/Mr_Newbon"
            className="telegram"
            aria-label="View Telegram profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-telegram"></i>
          </a>
          <a
            href="https://github.com/NewtonY-dev"
            className="github"
            aria-label="View GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>

        {/* Mobile: Right side icons */}
        <div className="mobile-header-actions ms-auto d-flex d-xl-none align-items-center">
          <button
            className="mobile-nav-toggle"
            onClick={handleMobileNavToggle}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${mobileNavActive ? "bi-x" : "bi-list"}`}></i>
          </button>
        </div>

        {/* Mobile Navigation Sidebar */}
        <nav
          id="navmenu"
          className={`navmenu d-xl-none ${
            mobileNavActive ? "mobile-nav-open" : ""
          }`}
        >
          <ul>
            <li>
              <HashLink
                smooth
                to="/#home"
                className="active"
                onClick={handleNavLinkClick}
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about" onClick={handleNavLinkClick}>
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#resume" onClick={handleNavLinkClick}>
                Resume
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services" onClick={handleNavLinkClick}>
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#portfolio" onClick={handleNavLinkClick}>
                Project
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" onClick={handleNavLinkClick}>
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
