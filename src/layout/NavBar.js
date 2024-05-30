import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../assets/ssp-logo.png'
// import logowhite from '../../assets/ssp-logo-white.png'
// import './Nav.css'

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [changeHeader, setChangeHeader] = useState(false);
	//header change function
	const onChangeHeader = () => {
		if (window.scrollY >= 50) {
			setChangeHeader(true);
		} else {
			setChangeHeader(false);
		}
	};
	//change header by scrolling
	window.addEventListener("scroll", onChangeHeader);

	return (
		<div className='relative'>
			
			<div className={
			changeHeader
				?
				"bg-slate-900 w-screen py-2 text-white body-font z-50 top-0 left-0 shadow-md transition duration-500 fixed"
				:
				"bg-coal bg-opacity-50 w-screen py-2 text-white body-font z-50 top-0 left-0 shadow-md transition duration-500 fixed"
		}>
			<header className='container px-12  mx-auto md:py-6'>
				<div className="container mx-auto flex justify-between items-center">
					{/* ::Site logo and Name */}
					<Link
						to="/"
						className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
					>
                        Logo
						{/* <img className='w-[70px] h-full transition duration-500' src={changeHeader?logowhite: logo} alt="" srcSet="" /> */}
					</Link>

					{/* ::Navbar */}
					<nav className="hidden md:mr-auto uppercase md:ml-4 md:pl-4 md:flex flex-wrap items-center justify-end w-full text-sm font-normal tracking-wide">
						<Link to="/" className="mr-8 hover:text-[#F5C11D]">
							Home
						</Link>
						<Link to="/packages" className="mr-8 hover:text-[#F5C11D]">
							Services
						</Link>
						<Link to="/team" className="mr-8 hover:text-[#F5C11D]">
							Technologies
						</Link>
						<Link to="/contact" className="mr-8 hover:text-[#F5C11D]">
							Projects
						</Link>
						<Link to="/contact" className="mr-8 hover:text-[#F5C11D]">
							About
						</Link>
						<Link to="/contact" className="mr-8 hover:text-[#F5C11D]">
							Contact
						</Link>
					</nav>
					
					{/* ::Burger icon standard */}
					<button
						className="md:hidden rounded-md"
						onClick={() => setIsOpen(!isOpen)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-yellow-500 hover:to-red-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</header>

			{/* :MOBILE MENU */}
			{isOpen && (
				<div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-800 text-base uppercase text-center font-semibold">
					<Link to="/" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
						Home
					</Link>
					<Link to="/gallery" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                        Services
					</Link>
					<Link to="/packages" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                        Technologies
					</Link>
					<Link to="/team" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                        Projects
					</Link>
					<Link to="/contact" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                        About
					</Link>
					<Link to="/contact" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
						Contact
					</Link>
				</div>
			)}
		</div>





</div>
	)
}

export default NavBar