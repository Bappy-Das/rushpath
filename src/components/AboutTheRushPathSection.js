import React from 'react';
import contentBox from "../assets/content-box-banner.jpg"
import aboutBoxImage from "../assets/about-box-image-530x370.jpg"

const AboutTheRushPathSection = () => {
    return (
        <div className='bg-inherit mx-auto md:pb-20 lg:pb-20'>
            {/* <div className="relative object-cover w-full min-h-screen md:pb-0 bg-cover" style={{ backgroundImage: `url(${contentBox})`,backgroundPosition: "center center" }}> */}
                <div className="flex items-center justify-center gap-4 min-h-screen w-full py-5 px-2">
                    {/* <div className=''>
                        <img class="" src={aboutBoxImage} alt="" />
                    </div> */}
                    <div className='w-1/2 p-5'>
                        <div className='text-6xl uppercase font-extrabold text-[#F5C11D]'>About the <br/> <span className='text-[#F5C11D]'>rushpath</span> </div>
                        <div className='text-sm text-[#F5C11D] py-5'>Amet nisl purus in mollis nunc sed id. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
                         Volutpat ac tincidunt vitae semper. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. 
                         Ante metus dictum at tempor fames ac</div>
                        <div className='capitalize text-lg underline text-[#F5C11D] hover:text-[#F5C11D] cursor-pointer '> <span className='hover:bg-[#F5C11D] p-3 transition duration-300 rounded-sm'>Read more</span></div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
};

export default AboutTheRushPathSection;