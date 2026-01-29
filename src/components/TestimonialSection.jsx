"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function TestimonialSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Testimonial
          </p>
          <h1 className="display-5 mb-5">What Our Clients Say!</h1>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="wow fadeInUp"
          data-wow-delay="0.3s"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item text-center">
                <div className="testimonial-text border rounded p-4 pt-5 mb-5 position-relative">
                  <div className="btn-square bg-white border rounded-circle position-absolute top-0 start-50 translate-middle">
                    <i className="fa fa-quote-right fa-2x text-primary"></i>
                  </div>
                  {item.message}
                </div>
                <img
                  className="rounded-circle mb-3"
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                />
                <h4>{item.name}</h4>
                <span>{item.profession}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const testimonials = [
  {
    image: "/img/testimonial-1.jpg",
    name: "Client Name",
    profession: "Profession",
    message:
      "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.",
  },
  {
    image: "/img/testimonial-2.jpg",
    name: "Client Name",
    profession: "Profession",
    message:
      "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.",
  },
  {
    image: "/img/testimonial-3.jpg",
    name: "Client Name",
    profession: "Profession",
    message:
      "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.",
  },
  {
    image: "/img/testimonial-4.jpg",
    name: "Client Name",
    profession: "Profession",
    message:
      "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.",
  },
];
