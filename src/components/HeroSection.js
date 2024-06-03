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
        // <section id='hero-div' className="bg-coal text-gray-200 body-font">
        //     <div className="text-center">
        //         <Swiper
        //             slidesPerView={1}
        //             spaceBetween={30}
        //             centeredSlides={true}
        //             loop={true}
        //             autoplay={{
        //                 delay: 2500,
        //                 disableOnInteraction: false,
        //             }}
        //             pagination={{
        //                 clickable: true,
        //             }}
        //             modules={[Autoplay,  EffectFade]}
        //             className="mySwiper"
        //             breakpoints={{
        //                 "@0.00": {
        //                     slidesPerView: 1,
        //                 },
        //                 "@1.50": {
        //                     slidesPerView: 1,
        //                 },
        //                 "@1.75": {
        //                     slidesPerView: 1,
        //                 },
        //             }}
        //             effect={'fade'}
        //         >
        //             <SwiperSlide className="pb-24 overflow-hidden">
        //                 {
        //                     <div className="relative object-cover w-full min-h-screen md:pb-0 pt-28 bg-cover"
        //                             style={{ backgroundImage: `url(${wall})`,backgroundPosition: "center center" }}>
        //                         <div className="flex items-center justify-center min-h-screen w-full py-5 px-2">
        //                             <div className='p-2'>
        //                                 <p className="text-4xl md:text-7xl lg:text-7xl font-bold uppercase tracking-widest text-[#F5C11D]">
        //                                     lorem ipsum dolor
        //                                 </p>
        //                                 <p className="text-md font-semibold text-white pt-10 mx-2 md:mx-20 lg:mx-28">
        //                                     lorem effectur, consectetur adip fd vestibulum non ante et just nulla consequ  tempor inv sociis natoque penatibus et just nulla conseq tempor inv sociis natoque penatibus et just nulla consequ tempor inv sociis natoque penatibus et just nulla consequ
        //                                 </p>
        //                             </div>
        //                         </div>                   
        //                     </div>
        //                 }
        //             </SwiperSlide>
        //         </Swiper>
        //     </div>
        // </section>
        <section id="home" className="mb-20 ">
      <div className="px-6 py-32 flex justify-center items-center md:px-12 bg-gradient-to-br min-h-screen from-cyan-100 to-amber-100 text-gray-800 text-center lg:text-left z-20">
        <div className="container mx-auto xl:px-32">
          <div className="pt-24">
            <div className="mt-12 lg:mt-0">
              <h1 className="text-4xl text-center md:text-5xl xl:text-6xl font-bold tracking-tight mb-12 text-curious-blue-500">
              <span className='text-[#F5C11D]'>Empowering Businesses</span> via Innovative Software
                <br />
                <p className="text-gray-800 text-center font-normal text-lg mt-7">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.
                </p>
              </h1>
              {/* <LinkS
                className="inline-block px-7 py-3 mr-2 bg-curious-blue-500 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-curious-blue-700 hover:shadow-lg focus:bg-curious-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                to="contact_us"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                delay={1000}
                role="button"
              >
                Get in Touch
              </LinkS> */}
            </div>
            {/* <div className="mb-12 lg:mb-0" data-aos="fade-left">
              <img src={wall} className="w-full rounded-lg" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
    );
};

export default HeroSection;