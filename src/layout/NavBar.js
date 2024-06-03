import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../assets/logo.jpg'
import logo from '../assets/logo-removebg-preview.png'
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
				"bg-[#F5C11D] w-screen py-2 text-white body-font z-50 top-0 left-0 shadow-md transition duration-500 fixed"
				:
				"bg-[#F5C11D] bg-opacity-50 w-screen py-2 text-white body-font z-50 top-0 left-0 shadow-md transition duration-500 fixed"
		}>
			{/* <div className={
			changeHeader
				?
				"bg-slate-900 w-screen py-2 text-white body-font z-50 top-0 left-0 shadow-md transition duration-500 fixed"
				:
				"bg-coal bg-opacity-50 w-screen py-2 text-white body-font z-50 top-0 left-0 shadow-md transition duration-500 fixed"
		}> */}
			<header className='container px-12  mx-auto '>
				<div className="container mx-auto flex justify-between items-center">
					{/* ::Site logo and Name */}
					<Link
						to="/"
						className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
					>
						<img className='h-[70px] transition duration-500' src={logo} alt="" srcSet="" />
					</Link>

					{/* ::Navbar */}
					<nav className="hidden md:mr-auto capitalize md:ml-4 md:pl-4 md:flex flex-wrap items-center justify-end w-full text-md font-bold tracking-wide">
						<Link to="/" className="mr-8 hover:text-black transition-all duration-100">
							Home
						</Link>
						<Link to="/games" className="mr-8 hover:text-black transition-all duration-300">
							All Games
						</Link>
						<Link to="/project" className="mr-8 hover:text-black transition-all duration-300">
							Projects
						</Link>
						{/* <Link to="/blog" className="mr-8 hover:text-[#F5C11D] transition-all duration-300">
							Blog
						</Link> */}
						<Link to="/about" className="mr-8 hover:text-black transition-all duration-300">
							About
						</Link>
						<Link to="/contact" className="mr-8 hover:text-black transition-all duration-300">
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
					<Link to="/games" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
						All Games
					</Link>
					<Link to="/project" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
						Projects
					</Link>
					{/* <Link to="/blog" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
						Blog
					</Link> */}
					<Link to="/about" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                        About
					</Link>+
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