import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../assets/egypt-slider-1920x941.jpg"
import wall from "../assets/wall.jpg"
import wallpaperflare from "../assets/wallpaperflare.jpg"

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';

import { Autoplay ,EffectFade} from "swiper/modules";
const HeroSection = () => {
    return (
        <section id="home" className="mb-20 ">
      <div className="px-6 py-32 flex justify-center items-center md:px-12 bg-gradient-to-br min-h-screen from-cyan-100 to-amber-100 text-gray-800 text-center lg:text-left z-20">
        <div className="container mx-auto xl:px-32">
          <div className="pt-12">
            <div className="lg:mt-0">
              <h1 className="text-xl text-center md:text-2xl xl:text-3xl font-bold tracking-tight mb-12 text-curious-blue-500">
                  Unleash Your Inner Genius !
              </h1>
              <h1 className="text-2xl text-center md:text-3xl xl:text-4xl font-bold tracking-tight mb-12 text-curious-blue-500">
                  Beyond Textbooks !
              </h1>
              <h1 className="text-2xl text-center md:text-3xl xl:text-4xl font-bold tracking-tight mb-12 text-curious-blue-500">
                  Don't Just Read, Play !
              </h1>
              <h1 className="text-4xl text-center md:text-5xl xl:text-6xl font-bold tracking-tight mb-12 text-curious-blue-500">
                From Novice <br/> to <br/> Ninja !
              </h1>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default HeroSection;