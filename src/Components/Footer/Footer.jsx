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
          <a href="mailto:yetsedawn@gmail.com" className="email">
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/newton-yetsedaw-205628364"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://t.me/Mr_Newbon"
            className="telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-telegram"></i>
          </a>
          <a
            href="https://github.com/NewtonY-dev"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
