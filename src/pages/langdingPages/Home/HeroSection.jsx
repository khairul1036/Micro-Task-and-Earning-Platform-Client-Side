import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slide from "../../../components/Home/Slide";

import video1 from "../../../assets/video/video1.mp4";
import video2 from "../../../assets/video/video2.mp4";
import video3 from "../../../assets/video/video3.mp4";

const HeroSection = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Slide
          videoUrl={video1}
          heading="Start Earning Today!"
          text="Complete simple tasks and earn rewards instantly. Join thousands of users on our platform"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          videoUrl={video2}
          heading="Create Tasks, Get Results"
          text="Manage tasks with ease, pay workers, and get high-quality results every time"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          videoUrl={video3}
          heading="Empowering Workers, Rewarding Effort"
          text="Unlock new earning opportunities, submit tasks for review, and enjoy seamless payments"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSection;
