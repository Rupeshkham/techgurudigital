"use client";

export default function HeroCarousel() {
  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <img className="w-100" src="/img/carousel-1.jpg" alt="Image" />

            <div className="carousel-caption d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-8">
                    <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                      Welcome to Finanza
                    </p>
                    <h1 className="display-1 mb-4 animated slideInDown text-white">
                      Your Financial Status Is Our Goal
                    </h1>
                    <a
                      href="#about"
                      className="btn btn-primary py-3 px-5 animated slideInDown"
                    >
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img className="w-100" src="/img/carousel-2.jpg" alt="Image" />

            <div className="carousel-caption d-flex align-items-center">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-7">
                    <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                      Welcome to Finanza
                    </p>
                    <h1 className="display-1 mb-4 animated slideInDown text-white">
                      True Financial Support For You
                    </h1>
                    <a
                      href="#services"
                      className="btn btn-primary py-3 px-5 animated slideInDown"
                    >
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}
