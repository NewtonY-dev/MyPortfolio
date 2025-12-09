import Project from "../Project/Project";
import businessAnalytics from "../../assets/img/business_analytics.jpeg";
import ecommerce from "../../assets/img/ecommerce.jpeg";
import socialMediaApp from "../../assets/img/social_media_app.png";
import youtubeClone from "../../assets/img/youtube_clone.jpeg";
import bookStore from "../../assets/img/book_store.jpeg";
import netflixClone from "../../assets/img/netflix_clone.jpeg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: businessAnalytics,
      title: "Business Analytics Dashboard",
      description:
        "Full-stack analytics platform with real-time sales tracking, interactive charts, and product management. Built with React, Node.js, and MySQL.",
      githubUrl: "https://github.com/NewtonY-dev/business-analytics-dashboard",
      alt: "Business Analytics Dashboard - Analytics interface with charts",
    },
    {
      id: 2,
      image: ecommerce,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with Firebase authentication and Stripe payment integration. Built with React and Node.js.",
      githubUrl: "https://github.com/NewtonY-dev/amazon-clone-2",
      alt: "E-commerce Platform - Shopping cart interface",
    },
    {
      id: 3,
      image: socialMediaApp,
      title: "Social Media App",
      description:
        "MERN stack social platform with user authentication, posts, media uploads, and real-time interactions. Features follow/unfollow and timeline functionality.",
      githubUrl: "https://github.com/NewtonY-dev/social-media-app",
      alt: "Social Media App - User feed interface",
    },
    {
      id: 4,
      image: youtubeClone,
      title: "YouTube Clone",
      description:
        "Full-stack video streaming platform with authentication, video upload, comments, and subscriptions. Built with React, Redux Toolkit, Node.js, and MongoDB.",
      githubUrl: "https://github.com/NewtonY-dev/youtube-clone",
      alt: "YouTube Clone - Video player interface",
    },
    {
      id: 5,
      image: bookStore,
      title: "Book Store Application",
      description:
        "Full-stack book management system with user authentication and CRUD operations. Features secure JWT authentication and MySQL database integration.",
      githubUrl: "https://github.com/NewtonY-dev/book-store",
      alt: "Book Store Application - Book catalog interface",
    },
    {
      id: 6,
      image: netflixClone,
      title: "Netflix Clone",
      description:
        "A responsive streaming platform clone using TMDB API to fetch and display movie data. Features modern UI/UX design.",
      githubUrl: "https://github.com/NewtonY-dev/Netflix-Clone-2024",
      alt: "Netflix Clone - Movie streaming interface",
    },
  ];

  return (
    <main className="main">
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Project</h2>
          <p>
            A collection of my recent projects showcasing my skills in
            full-stack development, modern web technologies, and user-centered
            design.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <Project
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  githubUrl={project.githubUrl}
                  alt={project.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
