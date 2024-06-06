import React from 'react';
import wall from "../assets/wall.jpg"

const Breadcump = ({title,dataAry}) => {
    return (
        <div className="relative object-cover w-full h-60 md:pb-0 pt-28 bg-cover rushpath_primary_bg" >
            <div className="mx-auto w-full max-w-screen-xl p-4">
                <div className='text-5xl font-bold rushpath_secondary pt-10'>
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