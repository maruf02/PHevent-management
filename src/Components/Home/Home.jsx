import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import ServicesSection from "../ServicesSection/ServicesSection";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import OurMissionSection from "../OurMissionSection/OurMissionSection";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="3000"
      className="container mx-auto"
    >
      <Banner></Banner>
      <AboutUsSection></AboutUsSection>
      <ServicesSection></ServicesSection>
      <OurMissionSection></OurMissionSection>
    </div>
  );
};

export default Home;
