import React from 'react';
import wall from "../assets/wall.jpg"

const Breadcump = ({title,dataAry}) => {
    return (
        <div className="relative object-cover w-full h-60 md:pb-0 pt-28 bg-cover from-cyan-100 to-amber-100" >
            <div className="mx-auto w-full max-w-screen-xl p-4">
                <div className='text-5xl font-bold text-[#F5C11D] pt-10'>
                    {title}
                </div>
                {/* <div>
                    {dataAry}
                </div> */}
            </div>
        </div>
    );
};

export default Breadcump;