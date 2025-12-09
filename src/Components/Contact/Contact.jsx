const Contact = () => {
  return (
    <main className="main">
      <section id="contact" className="contact section">
        {/* Let's Work Together Section */}
        <div className="container text-center mb-3" data-aos="fade-up">
          <b>
            {" "}
            <h2 className="mb-2 fw-bold">Let's Work Together</h2>
          </b>
          <p className="mb-0" style={{ fontSize: "0.95rem" }}>
            Have a project in mind or want to collaborate? Feel free to reach
            out and let's create something amazing together.
          </p>
        </div>
        <br />
        <br />

        {/* Get In Touch Section */}
        <div
          className="container text-center mb-4"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <h3 className="mb-2">Get In Touch</h3>
          <p className="mb-0" style={{ fontSize: "0.95rem" }}>
            Ready to start your next project? Feel free to reach out through any
            of the channels below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            {/* Email Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <i className="bi bi-envelope" aria-hidden="true"></i>
                </div>
                <h3>Email</h3>
                <p>yetsedawn@gmail.com</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <i className="bi bi-geo-alt" aria-hidden="true"></i>
                </div>
                <h3>Location</h3>
                <p>Bahir Dar, Ethiopia</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <i className="bi bi-telephone" aria-hidden="true"></i>
                </div>
                <h3>Phone</h3>
                <p>+251 931 559 554</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
