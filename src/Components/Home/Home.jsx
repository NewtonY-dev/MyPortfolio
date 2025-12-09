import { HashLink } from "react-router-hash-link";
import profileImg from "../../assets/img/profile-img.jpg";

const Home = () => {
  return (
    <main className="main">
      <section id="hero" className="hero section">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row align-items-center min-vh-100">
            {/* Left Side - Text Content */}
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
              <div className="hero-content">
                {/* Availability Badge */}
                <span
                  className="hero-badge"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  Available for freelance work
                </span>

                {/* Greeting and Name */}
                <h1
                  className="hero-greeting"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Hi, I'm <span className="hero-name">Newton Yetsedaw</span>
                </h1>

                {/* Professional Title */}
                <h2
                  className="hero-title"
                  data-aos="fade-up"
                  data-aos-delay="250"
                >
                  Full-Stack Developer
                </h2>

                {/* Description */}
                <p
                  className="hero-description"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Seasoned software developer with expertise in building modern
                  web applications and scalable backend systems.
                </p>

                {/* CTA Button */}
                <div
                  className="hero-cta"
                  data-aos="fade-up"
                  data-aos-delay="350"
                >
                  <HashLink smooth to="/#about" className="btn-get-started">
                    About Me
                  </HashLink>
                </div>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="col-lg-6 col-md-12 text-center">
              <div
                className="hero-image-wrapper"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src={profileImg}
                  alt="Newton Yetsedaw - Full Stack Developer"
                  className="hero-profile-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
