//! Navbar
import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import LoadingBar from 'react-top-loading-bar'


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [progress, setProgress] = useState(0);
    const location = useLocation();

    useEffect(() => {
        setProgress(30);
        const timeout1 = setTimeout(() => setProgress(60), 100);
        const timeout2 = setTimeout(() => setProgress(90), 900);
        const timeout3 = setTimeout(() => setProgress(100), 1200);

        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
        };
    }, [location]);

    const links = [
        {
            id: 0,
            link: 'Home'
        },
        {
            id: 1,
            link: 'Skills'
        },
        {
            id: 2,
            link: 'Portfolio'
        },
        {
            id: 3,
            link: 'Services'
        },
        {
            id: 4,
            link: 'Contact'
        },
    ]

    return (
        <>
            <LoadingBar color='gray' progress={progress}
                onLoaderFinished={() => setProgress(0)} />
            <nav className="bg-white border-gray-200 dark:bg-[#1f1f1f] sticky top-0 w-full">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink
                        to="/Home" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-4xl whitespace-nowrap text-white font-signature">Mohsin Ansari</span>
                    </NavLink>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="transition-all duration-200 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent">
                            {
                                links.map(({ id, link }) => {
                                    return (
                                        <li key={id} className="sm:hover:underline sm:underline-offset-8 decoration-blue-600">
                                            <NavLink
                                                to={`/${link}`}
                                                className={({ isActive }) => `${isActive ? "underline dark:decoration-blue-600  dark:text-blue-600 text-blue-600 decoration-blue-600" : ""} block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:dark:hover:text-blue-600 dark:hover:text-white md:dark:hover:bg-transparent"`}
                                                aria-current="page"
                                            >
                                                {link}
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
                        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </div>

                    {nav && (
                        <ul className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-screen bg-[#1f1f1f] text-white">
                            {
                                links.map(({ id, link }) => {
                                    return (
                                        <li
                                            key={id}
                                            className="px-4 cursor-pointer capitalize py-4 font-semibold">
                                            <NavLink
                                                to={`/${link}`}
                                                className={({ isActive }) => `${isActive ? "underline underline-offset-2 dark:text-blue-600 text-blue-600 decoration-blue-600" : ""} block py-2 px-3 text-white hover:text-blue-600 hover:underline underline-offset-2"`}
                                                aria-current="page"
                                                onClick={() => setNav(!nav)}
                                            >
                                                {link}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar