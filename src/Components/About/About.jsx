import { techStack } from "../../constants/techStack";

const About = () => {
  const highlights = [
    "Build full-stack apps with React, Node.js, and modern tooling",
    "Focus on performance, accessibility, and clean UI/UX",
    "Comfortable collaborating across design, product, and engineering",
    "Value maintainable code, testing, and clear communication",
  ];

  return (
    <main className="main">
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            Full-stack developer focused on building fast, accessible, and
            user-friendly web products.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          {/* Bio Section - Not in card, max 70% width */}
          <div className="row justify-content-center mb-4">
            <div className="col-lg-10 col-xl-8">
              <h3>Bio</h3>
              <p className="py-2">
                I’m a web developer specializing in React and Node.js. I deliver
                production‑ready applications focused on performance,
                accessibility, and easy maintenance. I handle front‑end,
                back‑end, and cloud deployment (AWS) — from prototype to
                production.
              </p>
            </div>
          </div>

          {/* Card-based sections */}
          <div className="row gy-4">
            {/* Contact Info Card */}
            <div className="col-lg-6">
              <div
                className="about-card"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <h3 className="about-card-title">Contact Info</h3>
                <ul className="about-card-list">
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Location:</strong> <span>Bahir Dar, Ethiopia</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong> <span>yetsedawn@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Focus:</strong>{" "}
                    <span>Full-stack Web Development</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Highlights Card */}
            <div className="col-lg-6">
              <div
                className="about-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="about-card-title">Highlights</h3>
                <ul className="about-card-list">
                  {highlights.map((item, idx) => (
                    <li key={idx}>
                      <i className="bi bi-check-circle"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Card - Full Width */}
            <div className="col-12">
              <div
                className="about-card"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <h3 className="about-card-title">Tech Stack</h3>
                <div className="row g-2">
                  {techStack.map((tech, idx) => (
                    <div key={idx} className="col-6 col-md-4 col-lg-3">
                      <span
                        className="badge bg-light text-dark w-100 py-2"
                        style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                      >
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
