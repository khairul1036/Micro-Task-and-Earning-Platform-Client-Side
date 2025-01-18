import React from "react";
import SectionTitle from "../Share/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TestimonialSlide from "../../../components/Home/TestimonialSlide";

const Testimonial = () => {
  return (
    <>
      <SectionTitle
        title={"What Our Users Are Saying"}
        subTitle={
          "Real stories from workers and buyers who have experienced the benefits of our platform"
        }
      />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
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
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center gap-10 lg:gap-20 px-10 py-10">
            <TestimonialSlide
              image={
                "https://media.istockphoto.com/id/1361217779/photo/portrait-of-happy-teenage-boy-at-park.jpg?s=612x612&w=0&k=20&c=yGHZLPu6UWwoj2wazbbepxmjl29MS1Hr2jV3N0FzjyI="
              }
              name={"Sarah Ahmed"}
              text={
                "I've been using this platform for a few months now, and it's been an amazing experience. The tasks are simple to complete, and I can easily manage my time around them. I love the fact that I can withdraw my earnings quickly. It’s a perfect way to make some extra cash on the side!"
              }
            />
            <TestimonialSlide
              image={
                "https://i0.wp.com/pixahive.com/wp-content/uploads/2021/02/An-Indian-boy-375075-pixahive.jpg?fit=1702%2C2560&ssl=1"
              }
              name={"Ayesha Karim"}
              text={
                "This platform has truly helped me maximize my free time. I’ve been able to earn money by completing tasks that are both interesting and easy. I appreciate how quickly I can complete tasks and receive payment. It’s been a great way to supplement my income!"
              }
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center gap-10 lg:gap-20 px-10 pt-10">
            <TestimonialSlide
              image={"https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"}
              name={"John Smith"}
              text={
                "As a buyer, I find this platform incredibly useful. Creating tasks and finding reliable workers has never been easier. The quality of work I receive is consistently great, and the payment process is smooth. I highly recommend this platform to anyone looking to get work done efficiently!"
              }
            />
            <TestimonialSlide
              image={
                "https://photosbulk.com/wp-content/uploads/aesthetic-instagram-profile-picture-for-boys_7.webp"
              }
              name={"Omar Ali"}
              text={
                "Being a buyer on this platform has been a game-changer for me. I can create tasks in just a few steps, and there are always skilled workers ready to take on the job. The results are delivered on time and of great quality. It’s become my go-to platform for outsourcing tasks."
              }
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center gap-10 lg:gap-20 px-10 pt-10">
            <TestimonialSlide
              image={
                "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
              }
              name={"Nadia Rahman"}
              text={
                "I love how easy it is to make money on this platform. The tasks are straightforward, and I can work at my own pace. The best part is that payments are processed quickly, and the platform is very user-friendly. It’s a great way to earn extra money without much hassle!"
              }
            />
            <TestimonialSlide
              image={
                "https://sb.kaleidousercontent.com/67418/1920x1281/0e9f02a048/christian-buehner-ditylc26zvi-unsplash.jpg"
              }
              name={"Fahad Khan"}
              text={
                "his platform has exceeded my expectations. As a worker, I’ve been able to complete various tasks and get paid promptly. The task options are diverse, and I never get bored. Plus, the user interface is simple, making it easy to navigate. I highly recommend it to anyone looking to earn extra income."
              }
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonial;
