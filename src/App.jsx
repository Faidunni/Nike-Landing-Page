import Nav from "./components/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  AOS.init();
  return (
    <main className="relative">
      <Nav />
      <section
        className="xl:padding-l wide:padding-r padding-b"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <Hero />
      </section>
      <section
        className="padding"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <PopularProducts />
      </section>
      <section
        className="padding"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <SuperQuality />
      </section>
      <section
        className="padding-x py-10"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <Services />
      </section>
      <section
        className="padding"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <SpecialOffer />
      </section>
      <section
        className="bg-pale-blue padding"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <CustomerReviews />
      </section>
      <section
        className="padding-x sm:py-32 py-16 w-full"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
