import React from 'react';
import logo from '../assets/cosmic_soup_logo.jpeg'
import wall from "../assets/wall.jpg"

const Footer = () => {
    // const d = new Date();
    // let year = d.getFullYear();
    return (
        <footer className="rushpath_secondary_bg">
            <div className="mx-auto w-full max-w-screen-xl p-4">
                {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className='flex items-center gap-4'>
                        <img className='h-[50px] transition duration-500' src={logo} alt="" srcSet="" />
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright© 2024 <a href="/" className="hover:underline capitalize">Cosmic Soup Ltd</a>. All Rights Reserved.</span>
                    </div>
                    
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                                </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;