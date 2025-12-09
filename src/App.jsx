import { useEffect } from "react";
import Aos from "aos";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const servicesData = [
  {
    id: 1,
    title: "Front-end",
    description:
      "Build responsive, accessible, and performant user interfaces with React and modern tooling. I focus on component-driven design, sensible state management, and layouts that adapt cleanly across mobile and desktop.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f4bb.svg",
    alt: "Laptop icon",
  },
  {
    id: 2,
    title: "Back-end",
    description:
      "Design and implement robust APIs with Node.js and Express, integrate databases, and apply authentication and security best practices. I aim for clear endpoints, solid error handling, and maintainable server-side code.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f527.svg",
    alt: "Wrench icon",
  },
  {
    id: 3,
    title: "Testing",
    description:
      "Improve reliability with unit and integration tests for both APIs and UIs (React Testing Library, or similar). I set up test suites and CI checks to catch regressions early and keep the codebase stable.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f50d.svg",
    alt: "Magnifier icon",
  },
  {
    id: 4,
    title: "Enhancing Existing Applications",
    description:
      "Refactor and modernize existing apps: reduce technical debt, smooth out UX rough edges, and improve performance while preserving functionality. I deliver incremental, low-risk changes with clear migration steps.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2728.svg",
    alt: "Sparkles icon",
  },
  {
    id: 5,
    title: "API Configuration",
    description:
      "Configure APIs with reliable auth (JWT/OAuth), environment-aware settings, versioning, and documentation (OpenAPI). I handle CORS, rate limiting, and deployment-ready configuration for dev/prod parity.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2699.svg",
    alt: "Gear icon",
  },
  {
    id: 6,
    title: "Hosting Websites",
    description:
      "Deploy and maintain static and dynamic sites on platforms like Vercel, Netlify, or cloud providers, including AWS. I set up CI/CD, SSL, DNS, caching, and basic monitoring so sites stay fast, secure, and easy to update.",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f310.svg",
    alt: "Globe icon",
  },
];

function App() {
  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <div>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="services">
        <Services services={servicesData} />
      </section>
      <section id="project">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
