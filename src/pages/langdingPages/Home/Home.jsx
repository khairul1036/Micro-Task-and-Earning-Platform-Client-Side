import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import BestWorkers from "./BestWorkers";
import Testimonial from "./Testimonial";
import EarningOpportunities from "./EarningOpportunities";
import HowToEarn from "./HowToEarn";
import HowItWorks from "./HowItWorks";
import CallToActionSection from "./CallToActionSection";
import HelmetTitle from "../Share/HelmetTitle";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <HelmetTitle favTitle={"Home || TaskEarn"} />
      {/* hero section  */}
      <div data-aos="zoom-in">
        <HeroSection />
      </div>
      <div className="max-w-screen-2xl mx-auto" data-aos="fade-up">
        <BestWorkers />
      </div>
      <div data-aos="fade-up">
        <HowToEarn />
      </div>
      <div className="max-w-screen-2xl mx-auto" data-aos="fade-up">
        <Testimonial />
      </div>
      <div data-aos="flip-left">
        <EarningOpportunities />
      </div>
      <div className="max-w-screen-2xl mx-auto" data-aos="fade-right">
        <HowItWorks />
      </div>
      <div data-aos="fade-up">
        <CallToActionSection />
      </div>
    </>
  );
};

export default Home;
