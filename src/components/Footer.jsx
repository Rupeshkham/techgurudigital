

"use client";

export default function Footer() {
  return (
    <div
      className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">

          {/* Office */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Our Office</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>
              +012 345 67890
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>
              info@example.com
            </p>

            <div className="d-flex pt-2">
              <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="btn btn-square btn-outline-light rounded-circle me-2" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Services</h4>
            <a className="btn btn-link" href="#">Financial Planning</a>
            <a className="btn btn-link" href="#">Cash Investment</a>
            <a className="btn btn-link" href="#">Financial Consultancy</a>
            <a className="btn btn-link" href="#">Business Loans</a>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Quick Links</h4>
            <a className="btn btn-link" href="#">Home</a>
            <a className="btn btn-link" href="#">About Us</a>
            <a className="btn btn-link" href="#">Contact Us</a>
            <a className="btn btn-link" href="#">Our Services</a>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-white mb-4">Links</h4>
            <a className="btn btn-link" href="#">Privacy Policy</a>
            <a className="btn btn-link" href="#">Terms & Conditions</a>
            <a className="btn btn-link" href="#">Refund & Cancellation Policy</a>
            <a className="btn btn-link" href="#">Disclaimer</a>
          </div>

        </div>
      </div>
      <div className="container-fluid bg-dark text-light footer mt-2 py-2">
      <div className="container text-center">
        © {new Date().getFullYear()} TechGuru Digital. All Rights Reserved.
      </div>
    </div>
    </div>
  );
}
