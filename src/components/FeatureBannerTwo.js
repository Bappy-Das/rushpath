import React from 'react';
import contentBox from "../assets/content-box-banner.jpg"
import aboutBoxImage from "../assets/gallery-3-560x370.jpg"

const FeatureBannerTwo = () => {
    return (
        <div className='bg-inherit mx-auto md:pb-20 lg:pb-20'>
            <div className="relative object-cover w-full min-h-screen md:pb-0 bg-cover" style={{ backgroundImage: `url(${contentBox})`,backgroundPosition: "center center" }}>
                <div className="flex items-center justify-center gap-4 min-h-screen w-full py-5 px-2">
                    <div className='w-1/2 p-5'>
                        <div className='text-6xl uppercase font-extrabold text-white'><span className='text-[#F5C11D]'>PRICE LIST</span> <br/>  OF THE GAMES </div>
                        <div className='text-sm text-white py-5'>Amet nisl purus in mollis nunc sed id. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
                         Volutpat ac tincidunt vitae semper. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. 
                         Ante metus dictum at tempor fames ac</div>
                        <div className='capitalize text-lg underline text-[#F5C11D] hover:text-white cursor-pointer '> <span className='hover:bg-[#F5C11D] p-3 transition duration-300 rounded-sm'>Read more</span></div>
                    </div>
                    <div className=''>
                        <img class="" src={aboutBoxImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureBannerTwo;