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
        <section id='hero-div' className="bg-coal text-gray-200 body-font">
            <div className="text-center">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay,  EffectFade]}
                    className="mySwiper"
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                        },
                        "@1.50": {
                            slidesPerView: 1,
                        },
                        "@1.75": {
                            slidesPerView: 1,
                        },
                    }}
                    effect={'fade'}
                >
                    <SwiperSlide className="pb-24 overflow-hidden">
                        {
                            <div className="relative object-cover w-full min-h-screen md:pb-0 pt-28 bg-cover"
                                    style={{ backgroundImage: `url(${banner})`,backgroundPosition: "center center" }}>
                                <div className="container mx-auto grid md:grid-cols-2 xs:grid-cols-1 content-center absuolute">yyyyyyyyyyyyyyyyy</div>
                            </div>
                        }
                    </SwiperSlide>
                    <SwiperSlide className="pb-24 overflow-hidden">
                        {
                            <div className="relative object-cover w-full min-h-screen md:pb-0 pt-28 bg-cover"
                                    style={{ backgroundImage: `url(${wall})`,backgroundPosition: "center center" }}>
                                <div className="container mx-auto grid md:grid-cols-2 xs:grid-cols-1 content-center absuolute">xxxxxxxxxxxxxxxxxx</div>
                            </div>
                        }
                    </SwiperSlide>
                    <SwiperSlide className="pb-24 overflow-hidden">
                        {
                            <div className="relative object-cover w-full min-h-screen md:pb-0 pt-28 bg-cover"
                                    style={{ backgroundImage: `url(${wallpaperflare})`,backgroundPosition: "center center" }}>
                                <div className="container mx-auto grid md:grid-cols-2 xs:grid-cols-1 content-center absuolute">bbbbbbbbbbbbbbbbb</div>
                            </div>
                        }
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default HeroSection;