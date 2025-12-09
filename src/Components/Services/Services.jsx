import PropTypes from "prop-types";

const Services = ({ services = [] }) => {
  const hasServices = Array.isArray(services) && services.length > 0;

  return (
    <main className="main">
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            I deliver practical web development services: responsive front‑ends,
            scalable back‑ends, performance optimization, and accessible UIs.
            Focused on measurable outcomes — faster load times, fewer errors,
            and maintainable code you can extend.
          </p>
        </div>

        <div className="container">
          {hasServices ? (
            <div className="row gy-4">
              {services.map((service, index) => (
                <div
                  key={service.id ?? index}
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                >
                  <article className="service-item position-relative">
                    <div className="icon" aria-hidden="true">
                      {service.iconUrl ? (
                        <img
                          src={service.iconUrl}
                          alt={service.alt || `${service.title} icon`}
                          className="img-fluid"
                          loading="lazy"
                          decoding="async"
                          style={{ maxWidth: "64px", maxHeight: "64px" }}
                        />
                      ) : (
                        <i className="bi bi-activity" aria-hidden="true"></i>
                      )}
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-4" data-aos="fade-up">
              <p className="text-muted mb-0">Services will appear here soon.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      iconUrl: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
};

export default Services;
