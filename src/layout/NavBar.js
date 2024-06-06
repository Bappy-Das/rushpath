import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/game_logo.png'
import { FaAlignJustify, FaAlignLeft,FaHome,FaPlay } from "react-icons/fa";
import { LuContact2 } from "react-icons/lu";
import { GrContactInfo } from "react-icons/gr";


const NavBar = () => {
	const [changeHeader, setChangeHeader] = useState(false);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	//header change function
	const onChangeHeader = () => {
		if (window.scrollY >= 50) {
			setChangeHeader(true);
		} else {
			setChangeHeader(false);
		}
	};
	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	  };
	//change header by scrolling
	window.addEventListener("scroll", onChangeHeader);

	return (
		<div className='relative'>
			
			<div className={
			changeHeader
				?
				"bg-[#F5C11D] w-screen py-2 text-white body-font z-50 top-0 left-0 shadow-md transition duration-500 fixed"
				:
				"bg-[#F5C11D] bg-opacity-50 w-screen py-2 text-white body-font z-50 top-0 left-0 shadow-md transition duration-500 fixed"
		}>
			<header className='container px-12  mx-auto '>
				<div className="container mx-auto flex justify-between items-center">
					<Link
						to="/"
						className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
					>
						<img className='h-[70px] transition duration-500' src={logo} alt="" srcSet="" />
					</Link>
					<button className="font-medium rounded-lg text-sm px-5 py-2.5" type="button" onClick={toggleDrawer}>
          			  {isDrawerOpen ? <FaAlignLeft className="text-xl" /> : <FaAlignJustify className="text-xl" />}
          			</button>
					<div
        				id="drawer-navigation"
        				className={`fixed top-0 right-0 z-40 w-1/2 md:w-1/5 lg:w-1/5 h-screen overflow-y-auto transition-transform duration-500 ${
        				  isDrawerOpen ? "-translate-x-0" : "translate-x-full"
        				} bg-white`}
        				tabIndex="-1"
        				aria-labelledby="drawer-navigation-label"
      				>
        				<div className="flex justify-center items-center px-5">
        				  <button
        				    type="button"
        				    onClick={toggleDrawer}
        				    aria-controls="drawer-navigation"
        				    className="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm py-5 absolute top-2.5 left-2.5"
        				  >
        				    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        				      <path
        				        fillRule="evenodd"
        				        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        				        clipRule="evenodd"
        				      ></path>
        				    </svg>
        				  </button>
        				  <div className="p-5 text-3xl font-bold">Caregories</div>
        				</div>
        				<div className="p-4 overflow-y-auto bg-white ">
							<ul className="space-y-2 font-medium">
        				    	<li>
        				      		<Link to="/" className="flex items-center p-2 text-gray-900 hover:bg-[#fcdc14] rounded-lg group">
        				        		<FaHome />
        				        		<span className="ms-3 text-xl font-medium">Home</span>
        				      		</Link>
        				    	</li>
        				    	<li>
        				      		<Link to="/play" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#fcdc14]  group">
        				        		<FaPlay />
        				        		<span className="flex-1 ms-3 whitespace-nowrap text-xl font-medium">Play</span>
        				      		</Link>
        				    	</li>
        				    	<li>
        				      		<Link to="/about" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#fcdc14]  group">
        				        		<GrContactInfo />
        				        		<span className="flex-1 ms-3 whitespace-nowrap text-xl font-medium">About Us</span>
        				      		</Link>
        				    	</li>
        				    	<li>
        				      		<Link to="/contact"  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#fcdc14]  group">
        				        		<LuContact2 />
        				        		<span className="flex-1 ms-3 whitespace-nowrap text-xl font-medium">Contact Us</span>
        				      		</Link>
        				    	</li>
        				  	</ul>
        				</div>
      				</div>
				</div>
			</header>
			</div>
		</div>
	)
}
export default NavBar