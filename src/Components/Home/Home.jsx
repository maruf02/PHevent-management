import React from "react";
import Banner from "../Banner/Banner";
import ServicesSection from "../ServicesSection/ServicesSection";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import OurMissionSection from "../OurMissionSection/OurMissionSection";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <AboutUsSection></AboutUsSection>
      <ServicesSection></ServicesSection>
      <OurMissionSection></OurMissionSection>
    </div>
  );
};

export default Home;
