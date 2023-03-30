import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            src="https://drive.corp.amazon.com/view/saikonch@/Hackathon-2023/LOTW/Screenshot%202023-03-30%20at%209.37.15%20PM.png"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
