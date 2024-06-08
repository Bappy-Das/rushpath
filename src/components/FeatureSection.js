import React from 'react';
import games1 from "../assets/games_image/code_cracker_1.jpeg"

const FeatureSection = () => {
    return (
        <div className='rushpath_primary_bg'>
            <div className="mx-auto w-full max-w-screen-xl p-4 pb-20">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 py-8 lg:py-8">
                    <div className='flex justify-center items-center'>
                        <a href='https://drive.google.com/file/d/1M4wDlzsnNOEeQQbSwP34wiSC3aWEDWLG/view' target='_blank'>
                            <div className="group relative flex justify-center m-3 cursor-pointer border-[#545454] border-4">
                                <img className="" alt='p' src={games1} />
                                <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-yellow-400  opacity-0 group-hover:h-full group-hover:opacity-65 duration-500">
                                    <h2 className="p-5 rounded-full bg-yellow-400 hover:bg-yellow-400 hover:text-black bg-opacity-60 duration-300 font-bold text-xl">Click to Download</h2>
                                </div>
                                <h2 className="absolute bottom-2 left-6 inline-block pt-0.5 pb-1.5 px-2 group-hover:bottom-[-28px] group-hover:invisible transition duration-300 rounded-md text-sm text-gray-100 subpixel-antialiased font-medium bg-gradient-to-br from-green-500 to-blue-500 cursor-pointer">
                                   Click to Download
      	            	    	</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;