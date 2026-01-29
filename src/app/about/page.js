import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Service from "@/components/Service";
// import Spinner from "@/components/Spinner";

export default function ServicesPage() {
  return (
    <>
      {/* <Spinner /> */}
      <Navbar />

      {/* Page Header Start */}
       <PageHeader
        title="About"
        breadcrumbs={[
          { label: "Pages", href: "/pages" },
          { label: "About", active: true }
        ]}
      />
      {/* Page Header End */}

      <About/>
      <Footer />
    </>
  );
}
