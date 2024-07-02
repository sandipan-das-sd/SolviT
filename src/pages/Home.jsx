

// export default Home;
import React, { Fragment, useRef } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const pagesRef = useRef(null);
  const blogRef = useRef(null);

  const handleLinkClick = (e, section) => {
    e.preventDefault();
    switch (section) {
      case "#home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#courses":
        coursesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#pages":
        pagesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#blog":
        blogRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <Header onLinkClick={handleLinkClick} />
      <div ref={homeRef}>
        <HeroSection />
        <CompanySection />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={coursesRef}>
        <Courses />
      </div>
      <div ref={pagesRef}>
        <ChooseUs />
        <Features />
        <FreeCourse />
      </div>
      <div ref={blogRef}>
        <Testimonials />
        <Newsletter />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
