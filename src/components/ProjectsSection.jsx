"use client";

export default function ProjectsSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Our Projects
          </p>
          <h1 className="display-5 mb-5">
            We Have Completed Latest Projects
          </h1>
        </div>

        {/* Carousel */}
        <div
          className="owl-carousel project-carousel wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="project-item pe-5 pb-5">
            <div className="project-img mb-3">
              <img
                className="img-fluid rounded"
                src="/img/service-1.jpg"
                alt="Financial Planning"
              />
              <a href="#">
                <i className="fa fa-link fa-3x text-primary"></i>
              </a>
            </div>
            <div className="project-title">
              <h4 className="mb-0">Financial Planning</h4>
            </div>
          </div>

          <div className="project-item pe-5 pb-5">
            <div className="project-img mb-3">
              <img
                className="img-fluid rounded"
                src="/img/service-2.jpg"
                alt="Cash Investment"
              />
              <a href="#">
                <i className="fa fa-link fa-3x text-primary"></i>
              </a>
            </div>
            <div className="project-title">
              <h4 className="mb-0">Cash Investment</h4>
            </div>
          </div>

          <div className="project-item pe-5 pb-5">
            <div className="project-img mb-3">
              <img
                className="img-fluid rounded"
                src="/img/service-3.jpg"
                alt="Financial Consultancy"
              />
              <a href="#">
                <i className="fa fa-link fa-3x text-primary"></i>
              </a>
            </div>
            <div className="project-title">
              <h4 className="mb-0">Financial Consultancy</h4>
            </div>
          </div>

          <div className="project-item pe-5 pb-5">
            <div className="project-img mb-3">
              <img
                className="img-fluid rounded"
                src="/img/service-4.jpg"
                alt="Business Loans"
              />
              <a href="#">
                <i className="fa fa-link fa-3x text-primary"></i>
              </a>
            </div>
            <div className="project-title">
              <h4 className="mb-0">Business Loans</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
