//! Navbar
import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

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
    const [progress, setProgress] = useState(0);
    const location = useLocation();

    useEffect(() => {
        setProgress(30);
        const timeout1 = setTimeout(() => setProgress(60), 200);
        const timeout2 = setTimeout(() => setProgress(90), 800);
        const timeout3 = setTimeout(() => setProgress(100), 1200);

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
        };
    }, [location]);

    const links = [
        { id: 0, name: 'Home', link: '' },
        { id: 1, name: 'Skills', link: 'skills' },
        { id: 2, name: 'Portfolio', link: 'portfolio' },
        { id: 3, name: 'Services', link: 'services' },
        { id: 4, name: 'Contact', link: 'contact' },
    ]

    return (
        <>
            <LoadingBar color='gray' progress={progress}
                onLoaderFinished={() => setProgress(0)} />
            <nav className="bg-white border-gray-200 dark:bg-[#1f1f1f] sticky top-0 z-50 w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink
                        to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span id='ownerName' className="self-center text-4xl whitespace-nowrap text-white font-signature">Mohsin Ansari</span>
                    </NavLink>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="transition-all duration-200 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent">
                            {
                                links.map(({ id, link, name }) => {
                                    return (
                                        <li key={id} id='nav-item' className="sm:hover:underline sm:underline-offset-8 decoration-blue-600">
                                            <NavLink
                                                to={`/${link}`}
                                                className={({ isActive }) => `${isActive ? "underline dark:decoration-blue-600 dark:text-blue-600 text-blue-600 decoration-blue-600" : ""} block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:dark:hover:text-blue-600 dark:hover:text-white md:dark:hover:bg-transparent"`}
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
                    <div
                        className={`absolute top-0 left-0 w-full h-screen bg-[#1f1f1f] text-white flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out ${nav ? 'translate-x-0' : '-translate-x-full'}`}
                    >
                        {links.map(({ id, link, name }) => (
                            <li key={id} className="px-4 cursor-pointer capitalize py-4 font-semibold text-lg list-none">
                                <NavLink
                                    to={`/${link}`}
                                    className={({ isActive }) => `${isActive ? "underline underline-offset-2 dark:text-blue-600 text-blue-600 decoration-blue-600" : ""} block py-2 px-3 text-white hover:text-blue-600 hover:underline underline-offset-2`}
                                    aria-current="page"
                                    onClick={() => setNav(false)} // Close the mobile menu on link click
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar