import React from 'react';
import blog1 from "../assets/gallery-3-560x370.jpg"
import blog2 from "../assets/video-post-560x370.jpg"
import blog3 from "../assets/post-1-560x370.jpg"
import { FaRegClock } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";



const BlogSection = () => {
    return (
        <div className='bg-white'>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 md:py-20 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-8 lg:py-8">
                    <div className="text-[#eef2f4] rounded-md">
                        <div class="max-w-sm bg-white border border-gray-200 shadow">
                            <div>
                                <img class="" src={blog1} alt="" />
                            </div>
                            <div class="p-2"> 
                                <h5 class="my-3 text-2xl font-extrabold tracking-tight text-gray-900 uppercase hover:text-[#F5C11D] transition duration-150 cursor-pointer">ABOUT SPACE AND WORLD</h5>
                                <p class="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                            <div className='flex justify-between items-center px-2 pb-3'>
                                <div className='flex items-center gap-1'>
                                    <RxAvatar size={20} className='text-gray-700'/>
                                    <p className='text-gray-700 hover:text-[#F5C11D] transition duration-150 font-bold'>Jhon Due</p>
                                </div>
                                <p className="text-[12px] text-gray-700 flex items-center gap-1"><FaRegClock/> May 31, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#eef2f4] rounded-md">
                        <div class="max-w-sm bg-white border border-gray-200 shadow">
                            <div>
                                <img class="" src={blog2} alt="" />
                            </div>
                            <div class="p-2"> 
                                <h5 class="my-3 text-2xl font-extrabold tracking-tight text-gray-900 uppercase hover:text-[#F5C11D] transition duration-150 cursor-pointer">ABOUT SPACE AND WORLD</h5>
                                <p class="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                            <div className='flex justify-between items-center px-2 pb-3'>
                                <div className='flex items-center gap-1'>
                                    <RxAvatar size={20} className='text-gray-700'/>
                                    <p className='text-gray-700 hover:text-[#F5C11D] transition duration-150 font-bold'>Jhon Due</p>
                                </div>
                                <p className="text-[12px] text-gray-700 flex items-center gap-1"><FaRegClock/> May 31, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-[#eef2f4] rounded-md">
                        <div class="max-w-sm bg-white border border-gray-200 shadow">
                            <div>
                                <img class="" src={blog3} alt="" />
                            </div>
                            <div class="p-2"> 
                                <h5 class="my-3 text-2xl font-extrabold tracking-tight text-gray-900 uppercase hover:text-[#F5C11D] transition duration-150 cursor-pointer">ABOUT SPACE AND WORLD</h5>
                                <p class="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                            <div className='flex justify-between items-center px-2 pb-3'>
                                <div className='flex items-center gap-1'>
                                    <RxAvatar size={20} className='text-gray-700'/>
                                    <p className='text-gray-700 hover:text-[#F5C11D] transition duration-150 font-bold'>Jhon Due</p>
                                </div>
                                <p className="text-[12px] text-gray-700 flex items-center gap-1"><FaRegClock/> May 31, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;