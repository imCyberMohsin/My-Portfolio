//! Navbar
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { navLinks } from '../constants/NavbarData'

const Navbar = () => {
    useGSAP(() => {
        gsap.fromTo(
            ['#nav-item', '#ownerName'],
            { y: '-20vh', opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power4.out',
                stagger: 0.1
            }
        );
    });

    const [nav, setNav] = useState(false);

    return (
        <>
            <nav className="border-gray-200 bg-zinc-900 text-white sticky top-0 z-50 w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink
                        to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span id='ownerName' className="self-center text-4xl whitespace-nowrap  font-signature">Mohsin Ansari</span>
                    </NavLink>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="transition-all duration-200 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent">
                            {
                                navLinks.map(({ id, link, name }) => {
                                    return (
                                        <li key={id} id='nav-item' className="sm:hover:underline sm:underline-offset-8 decoration-primary">
                                            <NavLink
                                                to={`/${link}`}
                                                className={({ isActive }) => `${isActive ? "underline text-primary decoration-primary" : ""} block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 hover:text-white md:hover:bg-transparent"`}
                                                aria-current="page"
                                            >
                                                {name}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* Mobile Menu Bar */}
                    <div
                        className="md:hidden text-white cursor-pointer z-10"
                        onClick={() => setNav(!nav)}
                    >
                        {nav ? <RxCross1 size={30} /> : <CiMenuFries size={30} />}
                    </div>

                    {/* Mobile menu container with smooth transition */}
                    <ul
                        className={`absolute top-0 left-0 w-full h-screen bg-zinc-900 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out ${nav ? 'translate-x-0' : '-translate-x-full'}`}
                    >
                        {navLinks.map(({ id, link, name }) => (
                            <li key={id} className="px-4 cursor-pointer capitalize py-4 font-semibold text-lg list-none">
                                <NavLink
                                    to={`/${link}`}
                                    className={({ isActive }) => `${isActive ? "underline underline-offset-2 text-primary decoration-primary" : " text-white"} block py-2 px-3 hover:text-primary hover:underline underline-offset-2`}
                                    aria-current="page"
                                    onClick={() => setNav(false)} // Close the mobile menu on link click
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar