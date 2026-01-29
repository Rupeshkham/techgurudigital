"use client";

export default function TeamSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Our Team
          </p>
          <h1 className="display-5 mb-5">Exclusive Team</h1>
        </div>

        <div className="row g-4">
          {/* Team Member 1 */}
          <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="team-item">
              <img
                className="img-fluid rounded"
                src="/img/team-1.jpg"
                alt="Kate Winslet"
              />
              <div className="team-text">
                <h4 className="mb-0">Kate Winslet</h4>
                <div className="team-social d-flex">
                  <a className="btn btn-square rounded-circle mx-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square rounded-circle mx-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square rounded-circle mx-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="team-item">
              <img
                className="img-fluid rounded"
                src="/img/team-2.jpg"
                alt="Jac Jacson"
              />
              <div className="team-text">
                <h4 className="mb-0">Jac Jacson</h4>
                <div className="team-social d-flex">
                  <a className="btn btn-square rounded-circle mx-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square rounded-circle mx-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square rounded-circle mx-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="team-item">
              <img
                className="img-fluid rounded"
                src="/img/team-3.jpg"
                alt="Doris Jordan"
              />
              <div className="team-text">
                <h4 className="mb-0">Doris Jordan</h4>
                <div className="team-social d-flex">
                  <a className="btn btn-square rounded-circle mx-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square rounded-circle mx-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square rounded-circle mx-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
