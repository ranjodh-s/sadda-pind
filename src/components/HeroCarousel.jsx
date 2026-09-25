"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const FrontText = () => {
  return (
    <>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h2 className="text-4xl md:text-6xl lg:text-6xl uppercase tracking-wide">Live the Culture</h2>
        <h3 className="mt-2 text-center text-xl text-white/70">Feel the Spirit of Punjab</h3>
        <p className="mt-4 text-center text-lg text-white/70">From energetic Bhangra to soulful folk melodies, experience traditions that bring Punjab to life.</p>
      </div>
    </>
  )
}

const HeroCarousel = () => {
  return (
    <div className="relative w-full h-screen">

      <Swiper
        modules={[
          Autoplay,
          EffectFade,
        ]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={false}

        navigation={false}
        className="w-full h-full"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">

            <Image
              src="/images/c-one.jpg"
              alt="Bhangra Performance at Sadda Pind in Amritsar"
              fill
              priority
              className="object-cover"
            />
            <FrontText />




          </div>


        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">

            <Image
              src="/images/c-two.jpg"
              alt="Bhangra Performance at Sadda Pind in Amritsar"
              fill
              priority
              className="object-cover"
            />
            <FrontText />

          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">

            <Image
              src="/images/c-three.jpg"
              alt="Bhangra Performance at Sadda Pind in Amritsar"
              fill
              priority
              className="object-cover"
            />
            <FrontText />



          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
};

export default HeroCarousel;