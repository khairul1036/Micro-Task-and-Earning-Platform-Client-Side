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
import TopTask from "./TopTask";

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
      <div className="max-w-screen-2xl mx-auto">
        <TopTask />
      </div>
      <div className="max-w-screen-2xl mx-auto" >
        <BestWorkers />
      </div>
      <div>
        <HowToEarn />
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <Testimonial />
      </div>
      <div>
        <EarningOpportunities />
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <HowItWorks />
      </div>
      <div>
        <CallToActionSection />
      </div>
    </>
  );
};

export default Home;
