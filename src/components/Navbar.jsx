import { useState, useEffect, useRef, memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';
import gsap from 'gsap';
import { navLinks } from '../constants/NavbarData';
import DarkModeToggleBtn from './DarkModeToggleBtn';

// Memoize the navbar to avoid unnecessary re-renders
const Navbar = memo(() => {
    //? Dark Mode Toggle 
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark' || !savedTheme; // Default to dark mode if no theme is set
    });

    //? Nav Toggle
    const [nav, setNav] = useState(false);
    const location = useLocation();
    const navRef = useRef(null); // Ref for the mobile navigation container

    useEffect(() => {
        // Trigger GSAP animation on component mount
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
    }, []); // Empty dependency array ensures this runs only once on component mount

    // Close the mobile nav when navigating to a different route
    useEffect(() => {
        if (nav) {
            setNav(false);
        }
    }, [location]); // Reacts to route changes

    // Close the mobile nav when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the click is outside the navRef container and the nav is open
            if (navRef.current && !navRef.current.contains(event.target) && nav) {
                setNav(false); // Close the mobile menu
            }
        };

        // Add the event listener for clicks
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [nav]);

    return (
        <nav className="border-gray-200 dark:bg-zinc-900 dark:text-white text-zinc-800 bg-zinc-300 sticky top-0 z-50 w-full shadow-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Owner Name */}
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span
                        id="ownerName"
                        className="self-center text-4xl whitespace-nowrap font-signature transform hover:scale-105 transition-transform duration-300"
                    >
                        Mohsin Ansari
                    </span>
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="transition-all duration-300 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent">
                        {navLinks.map(({ id, link, name }) => (
                            <li
                                key={id}
                                id="nav-item"
                                className="relative group transform hover:translate-z-4 hover:rotateX-5 hover:rotateY-5 transition-transform duration-300"
                                style={{ perspective: '1000px' }}
                            >
                                <NavLink
                                    to={`/${link}`}
                                    className={({ isActive }) =>
                                        `${isActive ? "underline underline-offset-8 text-primary decoration-primary" : "dark:text-white"} 
                                        block py-2 px-3 rounded md:hover:text-primary md:p-0 transition-all duration-300`
                                    }
                                >
                                    {name}
                                </NavLink>
                                {/* Hover underline for non-active items */}
                                <div
                                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-in-out ${location.pathname === `/${link}` ? 'hidden' : ''
                                        }`}
                                ></div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Dark Mode Toggle Button */}
                <div className='hidden md:block'>
                    <DarkModeToggleBtn darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden text-white cursor-pointer z-10" onClick={() => setNav(!nav)}>
                    {nav ? (
                        <RxCross1 size={30} className="dark:text-white text-zinc-800 transform hover:rotate-180 transition-transform duration-300 ease-in-out" />
                    ) : (
                        <CiMenuFries size={30} className="dark:text-white text-zinc-800 transform hover:rotate-90 transition-transform duration-300 ease-in-out" />
                    )}
                </div>

                {/* Mobile Navigation */}
                <ul
                    ref={navRef} // Reference for the mobile nav container
                    className={`fixed top-0 right-0 w-1/2 h-screen dark:bg-zinc-900 bg-zinc-200 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out ${nav ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    {navLinks.map(({ id, link, name }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-4 font-semibold text-lg list-none transform hover:translate-z-4 hover:rotateX-5 hover:rotateY-5 transition-transform duration-300"
                            style={{ perspective: '1000px' }}
                        >
                            <NavLink
                                to={`/${link}`}
                                className={({ isActive }) =>
                                    `${isActive ? "bg-zinc-800 rounded-lg w-full text-primary" : "dark:text-white text-zinc-800 hover:underline underline-offset-4"} 
                                    block py-2 px-3 dark:hover:text-primary hover:text-primary decoration-primary  transition-all duration-300`
                                }
                                onClick={() => setNav(false)} // Close mobile menu on link click
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}

                    <div className='md:hidden py-4'>
                        <DarkModeToggleBtn darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>

                </ul>
            </div>
        </nav>
    );
});

export default Navbar;