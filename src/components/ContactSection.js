import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
const ContactSection = () => {
    return (
        <div className='rushpath_primary_bg'>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 md:py-20 lg:py-20">
                <div className='flex justify-center flex-col md:flex-row lg:flex-row gap-4'>
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
                            <button type="submit" class="text-white rushpath_secondary_bg hover:bg-gray-900 hover:text-[#F5C11D] focus:ring-0 focus:outline-none font-medium text-sm w-full sm:w-auto px-7 py-3.5 text-center">Submit</button>
                        </form>

                    </div>
                    <div className='w-full md:w-2/5 lg:w-2/5 ml-0 md:ml-10 lg:ml-10'>
                        <div className='flex items-start gap-3 mb-2 rushpath_secondary font-semibold'> <FaLocationDot className='rushpath_secondary' size={20}/> <p className='w-full'>Janata Tower, Level 8, Software Technology Park (STP), Kawran Bazar, Dhaka-1215, Bangladesh.</p></div>
                        <div className='flex items-center gap-3 mb-2 rushpath_secondary font-semibold'> <MdEmail className='rushpath_secondary' size={17}/ > info@rushpath.com</div>
                        <div className='flex items-center gap-3 mb-2 rushpath_secondary font-semibold'> <MdEmail className='rushpath_secondary' size={17}/> cosmicsouplimited@gmail.com</div>
                        <div className='flex items-center gap-3 mb-2 rushpath_secondary font-semibold'> <FaPhone className='rushpath_secondary' size={17}/> +8801830390344</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;