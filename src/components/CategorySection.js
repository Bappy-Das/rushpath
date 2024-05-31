import React from 'react';
import blog1 from "../assets/me-cover-384x488.jpg"
import { SlScreenDesktop } from "react-icons/sl";
import { FaTags } from "react-icons/fa";



const CategorySection = () => {
    return (
        <div className='bg-gray-100'>
            <div className="mx-auto w-full max-w-screen-xl p-4 pb-20 ">
                <div class="flex justify-center items-center pb-8">
                    <div class="mt-16 block grid-rows-2 place-items-center gap-4 md:grid-rows-1 lg:grid-rows-1">
                        <button
                          type="button"
                          class="text-[#F5C11D] bg-white hover:text-white hover:bg-[#F5C11D] focus:ring-0 focus:outline-none focus:ring-blue-300 font-bold border border-[#F5C11D] rounded-sm text-lg px-7 py-3 m-1 uppercase text-center"
                        >
                          All
                        </button>
                        <button
                          type="button"
                          class="text-[#F5C11D] bg-white hover:text-white hover:bg-[#F5C11D] focus:ring-0 focus:outline-none focus:ring-blue-300 font-bold border border-[#F5C11D] rounded-sm text-lg px-7 py-3 m-1 uppercase text-center"
                        >
                          origin
                        </button>
                        <button
                          type="button"
                          class="text-[#F5C11D] bg-white hover:text-white hover:bg-[#F5C11D] focus:ring-0 focus:outline-none focus:ring-blue-300 font-bold border border-[#F5C11D] rounded-sm text-lg px-7 py-3 m-1 uppercase text-center"
                        >
                          playstation 4
                        </button>
                        <button
                          type="button"
                          class="text-[#F5C11D] bg-white hover:text-white hover:bg-[#F5C11D] focus:ring-0 focus:outline-none focus:ring-blue-300 font-bold border border-[#F5C11D] rounded-sm text-lg px-7 py-3 m-1 uppercase text-center"
                        >
                          steam
                        </button>
                        <button
                          type="button"
                          class="text-[#F5C11D] bg-white hover:text-white hover:bg-[#F5C11D] focus:ring-0 focus:outline-none focus:ring-blue-300 font-bold border border-[#F5C11D] rounded-sm text-lg px-7 py-3 m-1 uppercase text-center"
                        >
                          uplay
                        </button>
                        <button
                          type="button"
                          class="text-[#F5C11D] bg-white hover:text-white hover:bg-[#F5C11D] focus:ring-0 focus:outline-none focus:ring-blue-300 font-bold border border-[#F5C11D] rounded-sm text-lg px-7 py-3 m-1 uppercase text-center"
                        >
                          xbox one
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-4 py-8 lg:py-8">
                    <div className="text-[#eef2f4] rounded-md">
                        <div class="max-w-sm bg-white">
                            <div className='relative'>
                                <img class="" src={blog1} alt="" />
                                <div className='text-white absolute bottom-3 right-4 uppercase text-[12px] flex items-center gap-1'>adventure, fps <FaTags/> </div>
                            </div>
                            <div class="p-2"> 
                                <h5 class="my-3 text-xl font-extrabold tracking-tight text-gray-900 uppercase hover:text-[#F5C11D] transition duration-150 cursor-pointer">ABOUT SPACE AND WORLD</h5>
                                <p className='flex items-center gap-1 font-bold text-[12px] text-gray-700 pb-2'><SlScreenDesktop/> STEAMXBOX ONE</p>
                                <p class="mb-3 font-normal text-gray-700 text-sm tracking-wide">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#eef2f4] rounded-md">
                        <div class="max-w-sm bg-white">
                            <div className='relative'>
                                <img class="" src={blog1} alt="" />
                                <div className='text-white absolute bottom-3 right-4 uppercase text-[12px] flex items-center gap-1'>adventure, fps <FaTags/> </div>
                            </div>
                            <div class="p-2"> 
                                <h5 class="my-3 text-xl font-extrabold tracking-tight text-gray-900 uppercase hover:text-[#F5C11D] transition duration-150 cursor-pointer">ABOUT SPACE AND WORLD</h5>
                                <p className='flex items-center gap-1 font-bold text-[12px] text-gray-700 pb-2'><SlScreenDesktop/> STEAMXBOX ONE</p>
                                <p class="mb-3 font-normal text-gray-700 text-sm tracking-wide">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#eef2f4] rounded-md">
                        <div class="max-w-sm bg-white">
                            <div className='relative'>
                                <img class="" src={blog1} alt="" />
                                <div className='text-white absolute bottom-3 right-4 uppercase text-[12px] flex items-center gap-1'>adventure, fps <FaTags/> </div>
                            </div>
                            <div class="p-2"> 
                                <h5 class="my-3 text-xl font-extrabold tracking-tight text-gray-900 uppercase hover:text-[#F5C11D] transition duration-150 cursor-pointer">ABOUT SPACE AND WORLD</h5>
                                <p className='flex items-center gap-1 font-bold text-[12px] text-gray-700 pb-2'><SlScreenDesktop/> STEAMXBOX ONE</p>
                                <p class="mb-3 font-normal text-gray-700 text-sm tracking-wide">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#eef2f4] rounded-md">
                        <div class="max-w-sm bg-white">
                            <div className='relative'>
                                <img class="" src={blog1} alt="" />
                                <div className='text-white absolute bottom-3 right-4 uppercase text-[12px] flex items-center gap-1'>adventure, fps <FaTags/> </div>
                            </div>
                            <div class="p-2"> 
                                <h5 class="my-3 text-xl font-extrabold tracking-tight text-gray-900 uppercase hover:text-[#F5C11D] transition duration-150 cursor-pointer">ABOUT SPACE AND WORLD</h5>
                                <p className='flex items-center gap-1 font-bold text-[12px] text-gray-700 pb-2'><SlScreenDesktop/> STEAMXBOX ONE</p>
                                <p class="mb-3 font-normal text-gray-700 text-sm tracking-wide">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#eef2f4] rounded-md">
                        <div class="max-w-sm bg-white">
                            <div className='relative'>
                                <img class="" src={blog1} alt="" />
                                <div className='text-white absolute bottom-3 right-4 uppercase text-[12px] flex items-center gap-1'>adventure, fps <FaTags/> </div>
                            </div>
                            <div class="p-2"> 
                                <h5 class="my-3 text-xl font-extrabold tracking-tight text-gray-900 uppercase hover:text-[#F5C11D] transition duration-150 cursor-pointer">ABOUT SPACE AND WORLD</h5>
                                <p className='flex items-center gap-1 font-bold text-[12px] text-gray-700 pb-2'><SlScreenDesktop/> STEAMXBOX ONE</p>
                                <p class="mb-3 font-normal text-gray-700 text-sm tracking-wide">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#eef2f4] rounded-md">
                        <div class="max-w-sm bg-white">
                            <div className='relative'>
                                <img class="" src={blog1} alt="" />
                                <div className='text-white absolute bottom-3 right-4 uppercase text-[12px] flex items-center gap-1'>adventure, fps <FaTags/> </div>
                            </div>
                            <div class="p-2"> 
                                <h5 class="my-3 text-xl font-extrabold tracking-tight text-gray-900 uppercase hover:text-[#F5C11D] transition duration-150 cursor-pointer">ABOUT SPACE AND WORLD</h5>
                                <p className='flex items-center gap-1 font-bold text-[12px] text-gray-700 pb-2'><SlScreenDesktop/> STEAMXBOX ONE</p>
                                <p class="mb-3 font-normal text-gray-700 text-sm tracking-wide">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#eef2f4] rounded-md">
                        <div class="max-w-sm bg-white">
                            <div className='relative'>
                                <img class="" src={blog1} alt="" />
                                <div className='text-white absolute bottom-3 right-4 uppercase text-[12px] flex items-center gap-1'>adventure, fps <FaTags/> </div>
                            </div>
                            <div class="p-2"> 
                                <h5 class="my-3 text-xl font-extrabold tracking-tight text-gray-900 uppercase hover:text-[#F5C11D] transition duration-150 cursor-pointer">ABOUT SPACE AND WORLD</h5>
                                <p className='flex items-center gap-1 font-bold text-[12px] text-gray-700 pb-2'><SlScreenDesktop/> STEAMXBOX ONE</p>
                                <p class="mb-3 font-normal text-gray-700 text-sm tracking-wide">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#eef2f4] rounded-md">
                        <div class="max-w-sm bg-white">
                            <div className='relative'>
                                <img class="" src={blog1} alt="" />
                                <div className='text-white absolute bottom-3 right-4 uppercase text-[12px] flex items-center gap-1'>adventure, fps <FaTags/> </div>
                            </div>
                            <div class="p-2"> 
                                <h5 class="my-3 text-xl font-extrabold tracking-tight text-gray-900 uppercase hover:text-[#F5C11D] transition duration-150 cursor-pointer">ABOUT SPACE AND WORLD</h5>
                                <p className='flex items-center gap-1 font-bold text-[12px] text-gray-700 pb-2'><SlScreenDesktop/> STEAMXBOX ONE</p>
                                <p class="mb-3 font-normal text-gray-700 text-sm tracking-wide">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;