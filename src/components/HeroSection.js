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
                                <div className="flex items-center justify-center min-h-screen w-full py-5 px-2">
                                    <div className='p-2'>
                                        <p className="text-4xl md:text-7xl lg:text-7xl font-bold uppercase tracking-widest text-[#F5C11D]">
                                            lorem ipsum dolor
                                        </p>
                                        <p className="text-md font-semibold text-white pt-10 mx-2 md:mx-20 lg:mx-28">
                                            lorem effectur, consectetur adip fd vestibulum non ante et just nulla consequ  tempor inv sociis natoque penatibus et just nulla conseq tempor inv sociis natoque penatibus et just nulla consequ tempor inv sociis natoque penatibus et just nulla consequ
                                        </p>
                                    </div>                 
                                </div>
                            </div>
                        }
                    </SwiperSlide>
                    <SwiperSlide className="pb-24 overflow-hidden">
                        {
                            <div className="relative object-cover w-full min-h-screen md:pb-0 pt-28 bg-cover"
                                    style={{ backgroundImage: `url(${wall})`,backgroundPosition: "center center" }}>
                                <div className="flex items-center justify-center min-h-screen w-full py-5 px-2">
                                    <div className='p-2'>
                                        <p className="text-4xl md:text-7xl lg:text-7xl font-bold uppercase tracking-widest text-[#F5C11D]">
                                            lorem ipsum dolor
                                        </p>
                                        <p className="text-md font-semibold text-white pt-10 mx-2 md:mx-20 lg:mx-28">
                                            lorem effectur, consectetur adip fd vestibulum non ante et just nulla consequ  tempor inv sociis natoque penatibus et just nulla conseq tempor inv sociis natoque penatibus et just nulla consequ tempor inv sociis natoque penatibus et just nulla consequ
                                        </p>
                                    </div>
                                </div>                   
                            </div>
                        }
                    </SwiperSlide>
                    <SwiperSlide className="pb-24 overflow-hidden">
                        {
                            <div className="relative object-cover w-full min-h-screen md:pb-0 pt-28 bg-cover"
                                    style={{ backgroundImage: `url(${wallpaperflare})`,backgroundPosition: "center center" }}>
                                <div className="flex items-center justify-center min-h-screen w-full py-5 px-2">
                                    <div className='p-2'>
                                        <p className="text-4xl md:text-7xl lg:text-7xl font-bold uppercase tracking-widest text-[#F5C11D]">
                                            lorem ipsum dolor
                                        </p>
                                        <p className="text-md font-semibold text-white pt-10 mx-2 md:mx-20 lg:mx-28">
                                            lorem effectur, consectetur adip fd vestibulum non ante et just nulla consequ  tempor inv sociis natoque penatibus et just nulla conseq tempor inv sociis natoque penatibus et just nulla consequ tempor inv sociis natoque penatibus et just nulla consequ
                                        </p>
                                    </div>
                                </div>                   
                            </div>
                        }
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default HeroSection;