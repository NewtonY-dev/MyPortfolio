import React from "react";
import { HashLink } from "react-router-hash-link";
import About from "../About/About";
import homeBG from "../../assets/img/home-bg.jpg";
const Home = () => {
  return (
    <main class="main">
      <section id="hero" class="hero section">
        <img src={homeBG} alt="" data-aos="fade-in" />

        <div
          class="container text-center"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <h2>Newton Yetsedaw</h2>
              <p>I'm a Full - Stack Developer from Bahir Dar</p>
              <HashLink smooth to="/#about" class="btn-get-started">
                About Me
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
