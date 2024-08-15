import React from 'react';
import { FaHeart } from "react-icons/fa";
import { footerData } from '../constants/FooterData'

const Footer = () => {
    return (
        <>
            <footer className="bg-[#1f1f1f] text-center border-t">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        {footerData.map((section, index) => (
                            <div key={index}>
                                <h2 className="mb-6 text-lg font-bold text-white uppercase">{section.heading}</h2>
                                <ul className="text-gray-400 font-medium">
                                    {section.links.map((link, linkIndex) => (
                                        <li className="mb-4" key={linkIndex}>
                                            <a href={link.href} className="hover:underline hover:text-blue-500 duration-200 transition-all">{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="px-4 py-4 md:flex flex-col md:items-center md:justify-center border-t">
                        <div className="px-4 py-2 md:flex flex-col md:items-center md:justify-center">
                            <span className="text-gray-400 sm:text-center text-sm font-medium">© 2024 <a href="#">Mohsin Ansari. </a>All Rights Reserved.</span>
                            <p className="w-full text-gray-400 mt-2 font-semibold whitespace-nowrap text-sm flex items-center justify-center">
                                Designed and Developed with
                                <span className="whitespace flex items-center ml-1">
                                    <FaHeart className="text-blue-500 cursor-pointer" />
                                    <span className="ml-1">by</span>
                                    <a target="_blank" href="https://www.linkedin.com/in/mohsin-ansari127/" className="text-blue-500 whitespace-nowrap underline underline-offset-2 ml-1">Mohsin Ansari</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;