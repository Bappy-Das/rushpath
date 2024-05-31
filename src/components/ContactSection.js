import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";





const ContactSection = () => {
    return (
        <div className='bg-white '>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 md:py-20 lg:py-20">
                <div className='flex justify-center gap-4'>
                    <div className='w-full md:w-3/5 lg:w-3/5'>
                        <form>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:outline-none block w-full p-4" placeholder="Name" required />
                                </div>
                                <div>
                                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:outline-none block w-full p-4" placeholder="Email Address" required />
                                </div>
                                <div>
                                    <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:outline-none block w-full p-4" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div>
                                    <input type="text" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:outline-none block w-full p-4" placeholder="Subject" required />
                                </div>
                            </div>
                            <div class="mb-6">
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-0 focus:outline-none" placeholder="Write your thoughts here..."></textarea>
                            </div>
                            <button type="submit" class="text-white bg-yellow-400 hover:bg-gray-900 focus:ring-0 focus:outline-none font-medium text-sm w-full sm:w-auto px-7 py-3.5 text-center">Submit</button>
                        </form>

                    </div>
                    <div className='w-full md:w-2/5 lg:w-2/5 ml-10'>
                        <div className='flex items-center gap-3 mb-2 text-gray-700 font-semibold'> <FaLocationDot className='text-yellow-400' size={20}/> <p>Walking Street, Los Angeles, California, USA</p></div>
                        <div className='flex items-center gap-3 mb-2 text-gray-700 font-semibold'> <MdEmail className='text-yellow-400' size={17}/> info@cloux.com</div>
                        <div className='flex items-center gap-3 mb-2 text-gray-700 font-semibold'> <FaPhone className='text-yellow-400' size={17}/> 0674 987 66 59</div>
                        <div className='flex items-center gap-3 mb-2 text-gray-700 font-semibold'> <TbDeviceLandlinePhone className='text-yellow-400' size={17}/> 1923 236 12 96</div>
                        <p className='mt-5 font-semibold text-gray-700'>Lorem ipsum dolor sit amet, voluptua iracundia disputationi an pri, 
                            his utinam principes dignissim ad. Ne nec dolore oblique nusquam, 
                            cu luptatum volutpat delicatissimi has. Sed ad dicam platonem, 
                            mea eros illum elitr id, ei has similique constituto. Ea movet 
                            saperet rationibus sit, <span className='text-yellow-400'>pri autem aliquip invidunt</span> an consetetur 
                            omittantur.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;