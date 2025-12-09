import React from "react";

const resumeData = {
  summary: {
    name: "Newton Yetsedaw",
    location: "Bahir Dar, Ethiopia",
    title: "Full-Stack Developer",
    blurb:
      "Full-stack developer focused on building fast, accessible, and maintainable web applications with React and Node.js. I value clean code, thoughtful UX, and effective collaboration.",
    contact: {
      phone: "+251 931 559 554",
      email: "yetsedawn@gmail.com",
    },
  },
  experience: [
    {
      role: "Full-Stack Developer (Project)",
      company: "University Team Project",
      period: "2024 - Present",
      bullets: [
        "Built responsive UI with React and Bootstrap, improving usability and performance.",
        "Integrated RESTful APIs with Node.js/Express and database persistence.",
        "Led accessibility and performance tweaks, reducing load time and improving Lighthouse scores.",
      ],
    },
    {
      role: "Front-End Developer (Personal Projects)",
      period: "2023 - Present",
      bullets: [
        "Delivered multiple React-based apps (e-commerce, media, dashboards) with clean component architectures.",
        "Implemented authentication, routing, and state management; emphasized testing and maintainability.",
        "Collaborated with designers to refine UX flows and visual polish.",
      ],
    },
  ],
  education: [
    {
      school: "Bahir Dar University",
      degree: "B.Sc. Computer Science",
      period: "2022 - Present",
      details: [
        "Core CS curriculum, web development, data structures, and systems fundamentals.",
      ],
    },
  ],
};

const Resume = () => {
  const { summary, experience, education } = resumeData;

  return (
    <main className="main">
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>Concise overview of my background, experience, and skills.</p>
        </div>

        <div className="container">
          <div className="row align-items-stretch">
            {/* Left: Summary + Education */}
            <div className="col-lg-6 d-flex flex-column">
              <div
                className="resume-item pb-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="resume-title">Summary</h3>
                <h4>{summary.name}</h4>
                <p>
                  <em>{summary.blurb}</em>
                </p>
                <ul>
                  <li>{summary.location}</li>
                  <li>{summary.contact.phone}</li>
                  <li>{summary.contact.email}</li>
                </ul>
              </div>

              <div
                className="resume-item"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <h3 className="resume-title">Education</h3>
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <h4>{edu.degree}</h4>
                    <h5>{edu.period}</h5>
                    <p>
                      <em>{edu.school}</em>
                    </p>
                    <ul>
                      {edu.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Experience */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Experience</h3>
              {experience.map((item, idx) => (
                <div className="resume-item" key={idx}>
                  <h4>{item.role}</h4>
                  <h5>{item.period}</h5>
                  <p>
                    <em>{item.company}</em>
                  </p>
                  <ul>
                    {item.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
