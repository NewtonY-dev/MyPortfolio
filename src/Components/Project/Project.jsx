import { useState } from "react";

const Project = ({
  image,
  title,
  description,
  githubUrl,
  alt,
  className = "",
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <article className={`project-item ${className}`} data-aos="fade-up">
      <div className="project-image-wrapper">
        {imageLoading && (
          <div className="project-image-loading" aria-hidden="true">
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {imageError ? (
          <div
            className="project-image-error"
            role="img"
            aria-label={`${title} - Image unavailable`}
          >
            <i className="bi bi-image" aria-hidden="true"></i>
            <span className="visually-hidden">Image unavailable</span>
          </div>
        ) : (
          <img
            src={image}
            alt={alt || `${title} - Project thumbnail`}
            className="project-image img-fluid"
            loading="lazy"
            decoding="async"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-link"
          aria-label={`View ${title} on GitHub (opens in new tab)`}
        >
          <i className="bi bi-github" aria-hidden="true"></i>
          <span className="visually-hidden">View on GitHub</span>
        </a>
      </div>
    </article>
  );
};

export default Project;
