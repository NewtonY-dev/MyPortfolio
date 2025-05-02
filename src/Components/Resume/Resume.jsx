import React from "react";

const Resume = () => {
  return (
    <main className="main">
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>Here is an overview of my academic and professional journey.</p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Sumary</h3>

              <div className="resume-item pb-0">
                <h4>Newton Yetsedaw </h4>
                <p>
                  <em>
                    Full-stack web developer adept at engineering
                    production-ready, responsive applications using HTML, CSS,
                    JavaScript, React, Node.js, and SQL/MySQL, with a dedicated
                    focus on performance optimization and scalable architecture.
                  </em>
                </p>
                <ul>
                  <li>Poly Campus, Bahir Dar</li>
                  <li>+251 931 559 554</li>
                  <li>yetsedawnewton@gmail.com</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">
                Education & Professional Experience
              </h3>
              <div className="resume-item">
                <h4>Education</h4>
                <h5>2023-present</h5>
                <p>
                  <em>Computer Science, Bahir Dar University</em>
                </p>
                <ul>
                  <li>
                    Since 2023, I have been studying at Bahir Dar University,
                    gaining knowledge, skills, and experience through academic
                    challenges, collaborative learning, and a highly respected
                    educational environment.
                  </li>
                </ul>
                <h4>Senior graphic design specialist</h4>
                <h5>2024 - Present</h5>

                <ul>
                  <li>
                    Since 2024, I have collaborated on a team project at Bahir
                    Dar University, fostering mutual trust, shared
                    responsibility, and effective communication, which
                    significantly strengthened my team spirit, improved my
                    ability to coordinate tasks, embrace collective
                    decision-making, and contribute to group success,
                    underscoring the value of collaboration.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
