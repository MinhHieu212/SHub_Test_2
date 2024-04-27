import { Swiper, SwiperSlide } from "swiper/react";

// const images = [
//   "https://shub.edu.vn/images/landing/ver3/image-section/carousel1.png",
//   "https://shub.edu.vn/images/landing/ver3/image-section/carousel2.png",
//   "https://shub.edu.vn/images/landing/ver3/image-section/carousel3.png",
//   "https://shub.edu.vn/images/landing/ver3/image-section/carousel4.png",
//   "https://shub.edu.vn/images/landing/ver3/image-section/carousel5.png",
//   "https://shub.edu.vn/images/landing/ver3/image-section/carousel6.png",
// ];

import "swiper/css";

function App() {
  return (
    <div className="flex item-center justify-center w-[100vw] h-[150vh] bg-blue-200">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="w-[200px] h-[100px] bg-slate-100 flex items-center justify-center">
            <p>Slide 10</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[200px] h-[100px] bg-slate-100 flex items-center justify-center">
            <p>Slide 10</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[200px] h-[100px] bg-slate-100 flex items-center justify-center">
            <p>Slide 10</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[200px] h-[100px] bg-slate-100 flex items-center justify-center">
            <p>Slide 10</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default App;

// const images = [
//   "https://shub.edu.vn/images/landing/ver3/image-section/carousel1.png",
//   "https://shub.edu.vn/images/landing/ver3/image-section/carousel2.png",
//   "https://shub.edu.vn/images/landing/ver3/image-section/carousel3.png",
//   "https://shub.edu.vn/images/landing/ver3/image-section/carousel4.png",
//   "https://shub.edu.vn/images/landing/ver3/image-section/carousel5.png",
//   "https://shub.edu.vn/images/landing/ver3/image-section/carousel6.png",
// ];
