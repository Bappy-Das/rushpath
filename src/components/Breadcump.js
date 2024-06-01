import React from 'react';
import wall from "../assets/wall.jpg"

const Breadcump = ({title,dataAry}) => {
    return (
        <div className="relative object-cover w-full h-96 md:pb-0 pt-28 bg-cover"
                style={{ backgroundImage: `url(${wall})`,backgroundPosition: "center center" }}>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6">
                <div className='text-5xl font-bold text-white pt-20'>
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