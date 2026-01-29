import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
// import Spinner from "@/components/Spinner";

export default function ContactPage() {
  return (
    <>
      {/* <Spinner /> */}
      <Navbar />

      {/* Page Header Start */}
       <PageHeader
        title="Contact"
        breadcrumbs={[
          { label: "Pages", href: "/pages" },
          { label: "Contact", active: true }
        ]}
      />
      {/* Page Header End */}

      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            
            {/* Contact Form */}
            <div className="col-lg-6">
              <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                Contact
              </p>
              <h1 className="display-5 mb-4">
                If You Have Any Query, Please Contact Us
              </h1>

              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Address & Contact Details */}
            <div className="col-lg-6">
              <div className="bg-light rounded p-5 h-100">
                <h4 className="mb-4">Our Office</h4>

                <p className="mb-3">
                  <i className="fa fa-map-marker-alt text-primary me-3"></i>
                  123 Street, Pune, Maharashtra, India
                </p>

                <p className="mb-3">
                  <i className="fa fa-phone-alt text-primary me-3"></i>
                  +91 98765 43210
                </p>

                <p className="mb-3">
                  <i className="fa fa-envelope text-primary me-3"></i>
                  info@techgurudigital.com
                </p>

                <p className="mb-4">
                  <i className="fa fa-clock text-primary me-3"></i>
                  Mon – Sat : 10:00 AM – 7:00 PM
                </p>

                <div className="d-flex">
                  <a className="btn btn-square btn-primary rounded-circle me-2" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle me-2" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle me-2" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-square btn-primary rounded-circle" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Contact End */}
      <Footer />
    </>
  );
}
