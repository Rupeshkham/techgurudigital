import Spinner from "@/components/Spinner";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Facts from "@/components/Facts";
// import TestimonialSection from "@/components/TestimonialSection";
import TeamSection from "@/components/TeamSection";
import ProjectsSection from "@/components/ProjectsSection";
import Service from "@/components/Service";
import Feature from "@/components/Feature";
import Testimonial from "@/components/TestimonialSection";
import ClientLayout from "@/components/ClientLayout";

export default function Home() {
  return (
    <>
        <ClientLayout>
      <Spinner />
      <Navbar />
      <HeroCarousel />
      <About />
      <Facts />
      < Feature />
      < Service />
      {/* < ProjectsSection /> */}
      {/* < TeamSection /> */}
      {/* <Testimonial /> */}
      <Footer />
              </ ClientLayout >
    </>
  );
}
