import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import "swiper/css";
import "swiper/swiper-bundle.css";

const Activities_Image = [
  "https://shub.edu.vn/images/landing/ver3/image-section/carousel1.png",
  "https://shub.edu.vn/images/landing/ver3/image-section/carousel2.png",
  "https://shub.edu.vn/images/landing/ver3/image-section/carousel3.png",
  "https://shub.edu.vn/images/landing/ver3/image-section/carousel4.png",
  "https://shub.edu.vn/images/landing/ver3/image-section/carousel5.png",
  "https://shub.edu.vn/images/landing/ver3/image-section/carousel6.png",
  "https://shub.edu.vn/images/landing/ver3/image-section/carousel1.png",
  "https://shub.edu.vn/images/landing/ver3/image-section/carousel2.png",
  "https://shub.edu.vn/images/landing/ver3/image-section/carousel3.png",
  "https://shub.edu.vn/images/landing/ver3/image-section/carousel4.png",
  "https://shub.edu.vn/images/landing/ver3/image-section/carousel5.png",
  "https://shub.edu.vn/images/landing/ver3/image-section/carousel6.png",
];

const App = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div
      className="main_container flex items-start pt-20 justify-center w-[100vw] h-[200vh]"
      style={{ fontFamily: "Poppins, sans-serif", color: "#202227" }}
    >
      <div className="activities_section max-w-[1200px] w-full px-[16px] md:px-[24px] bgflex flex-col items-start justify-center">
        <div className="activities_title mb-[55px] flex flex-col items-center justify-center w-[60%] mx-auto">
          <div className="w-[100px] mx-auto flex items-center justify-center text-[20px]">
            <img
              src="https://shub.edu.vn/_next/image?url=%2Fimages%2Flanding%2Fver3%2Fimage-section%2Fnetworking.gif&w=128&q=75"
              alt=""
              className="w-14 h-14"
            />
          </div>
          <p className="text-[32px] font-bold mt-[14px] text-center leading-[44px] mb-[24px]">
            Hoạt động tiêu biểu từ cộng đồng giáo dục
          </p>
          <p className="text-[20px] font-[400] leading-[32px] text-center">
            Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong quá
            trình giảng dạy, dạy học ứng dụng công nghệ SHub Classroom.
          </p>
        </div>
        <div className="activities_slider w-auto relative px-[16px]">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10"
            onClick={handlePrev}
          >
            <div className="p-3 bg-white shadow-lg shadow-slate-400 rounded-full">
              <AiOutlineArrowLeft size={25} />
            </div>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10"
            onClick={handleNext}
          >
            <div className="p-3 bg-white shadow-lg shadow-slate-400 rounded-full">
              <AiOutlineArrowRight size={25} />
            </div>
          </button>

          <Swiper
            spaceBetween={32}
            slidesPerView={
              window.innerWidth > 735 ? 6 : window.innerWidth > 425 ? 4 : 2
            }
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            breakpoints={{
              150: {
                slidesPerView: 2,
              },
              425: {
                slidesPerView: 4,
              },
              735: {
                slidesPerView: 6,
              },
            }}
            ref={swiperRef}
          >
            {Activities_Image.map((image_url, index) => (
              <SwiperSlide key={index} className="w-[16%]">
                <div
                  className={`pt-[30px] ${
                    index % 2 ? "-translate-y-[30px]" : ""
                  }`}
                >
                  <img
                    src={image_url}
                    alt=""
                    className="w-[160px] h-[396px] object-fill "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default App;
