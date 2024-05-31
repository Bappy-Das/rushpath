import React from 'react';
import box2 from "../assets/box-2-bg.jpg"

const TopFeatureSection = () => {
    return (
        <div className='bg-white'>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
                    <div className='bg-slate-600 bg-cover rounded-md relative object-cover w-full min-h-fit bg-center md:pb-0' style={{ backgroundImage: `url(${box2})`,backgroundPosition: "center center",backgroundSize: "auto" }}>
                        <div className='flex flex-col px-8 py-12'>
                            <h6 className='uppercase text-[12px] text-[#F5C11D] font-bold'>OUR ALL GAMES</h6>
                            <h1 className='uppercase text-xl text-white font-extrabold'>Rushpath GAMES</h1>
                            <p className='text-[16px] py-5 text-white'>Lorem ipsum dolor sit am consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                            <div className='capitalize text-md font-bold underline text-[#F5C11D] hover:text-white cursor-pointer '> <span className='hover:bg-[#F5C11D] p-2 transition duration-300 rounded-sm uppercase'>All Games</span></div>
                        </div>
                    </div>
                    <div className='bg-slate-600 bg-cover rounded-md relative object-cover w-full min-h-fit bg-center md:pb-0' style={{ backgroundImage: `url(${box2})`,backgroundPosition: "center center",backgroundSize: "auto" }}>
                        <div className='flex flex-col px-8 py-12'>
                            <h6 className='uppercase text-[12px] text-[#F5C11D] font-bold'>OUR ALL GAMES</h6>
                            <h1 className='uppercase text-xl text-white font-extrabold'>Rushpath GAMES</h1>
                            <p className='text-[16px] py-5 text-white'>Lorem ipsum dolor sit am consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                            <div className='capitalize text-md font-bold underline text-[#F5C11D] hover:text-white cursor-pointer '> <span className='hover:bg-[#F5C11D] p-2 transition duration-300 rounded-sm uppercase'>All Games</span></div>
                        </div>
                    </div>
                    <div className='bg-slate-600 bg-cover rounded-md relative object-cover w-full min-h-fit bg-center md:pb-0' style={{ backgroundImage: `url(${box2})`,backgroundPosition: "center center",backgroundSize: "auto" }}>
                        <div className='flex flex-col px-8 py-12'>
                            <h6 className='uppercase text-[12px] text-[#F5C11D] font-bold'>OUR ALL GAMES</h6>
                            <h1 className='uppercase text-xl text-white font-extrabold'>Rushpath GAMES</h1>
                            <p className='text-[16px] py-5 text-white'>Lorem ipsum dolor sit am consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                            <div className='capitalize text-md font-bold underline text-[#F5C11D] hover:text-white cursor-pointer '> <span className='hover:bg-[#F5C11D] p-2 transition duration-300 rounded-sm uppercase'>All Games</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFeatureSection;