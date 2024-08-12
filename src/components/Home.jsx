import React from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiCodingninjas, SiLeetcode } from 'react-icons/si';
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power4.out' } });

        tl.fromTo(".name",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.2 }
        )
            .fromTo("#para",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0 },
                "<0.1"
            )
            .fromTo(".rightImage",
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, ease: 'power4.out' },
                "<0.2"
            );
    });

    const socials = [
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/mohsin-ansari127/',
            IconComponent: <FaLinkedin />
        },
        {
            name: 'X',
            href: '#',
            IconComponent: <FaXTwitter />
        },
        {
            name: 'Github',
            href: 'https://github.com/imCyberMohsin',
            IconComponent: <FaGithub />
        },
        {
            name: 'CodingNinjas',
            href: 'https://www.naukri.com/code360/profile/mdmohsin127',
            IconComponent: <SiCodingninjas />
        },
        // {
        //     name: 'Leetcode',
        //     href: 'https://www.naukri.com/code360/profile/mdmohsin127',
        //     IconComponent: <SiLeetcode />
        // },
    ]

    return (
        <>
            {/* <!--! Home --> */}
            <div id="Home" name="Home"
                className="Home w-full min-h-screen pt-3 pb-8 bg-[#1f1f1f] flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-8">
                {/* <!-- Left --> */}
                <div className="left sm:w-2/5 w-4/5 text-white flex flex-col sm:justify-start sm:items-start items-center gap-4">
                    <div>
                        <h1 className="name text-5xl sm:text-6xl font-semibold">I'm Mohsin</h1>
                        <h2 className="name typing-text text-blue-500 text-xl sm:text-3xl font-semibold">Fullstack Web Developer</h2>
                    </div>

                    <p id='para' className="sm:w-4/5 sm:text-lg text-gray-300 text-justify">I'm a MERN Stack Developer skilled in HTML,
                        CSS, JS, React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. With a passion for crafting seamless and
                        visually appealing web applications, I specialize in creating dynamic and user-friendly experiences. Let's
                        collaborate and turn your ideas into reality!</p>

                    {/* Socials */}
                    <div className="socials flex gap-5 my-1">
                        {
                            socials.map(({ name, href, IconComponent }) => {
                                return (
                                    <a id='social-icon' key={name} href={href} target="_blank"
                                        className="icons text-xl w-10 h-10 bg-transparent rounded-full overflow-hidden flex justify-center items-center border-2 cursor-pointer hover:bg-blue-600 shadow-sm hover:shadow-blue-600 hover:scale-110 transition-all duration-200">
                                        {IconComponent}
                                    </a>
                                )
                            })
                        }
                    </div>

                    <a id='download-btn' href="../../resume.pdf" download
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-full text-lg px-6 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-white transition-all duration-150"
                    >
                        Download My Resume
                    </a>
                </div>

                {/* <!-- Right --> */}
                <div className="right pointer-events-none">
                    <div className="rightImage bg-white w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden">
                        <img src="../images/profile2.png" alt="img" className="rounded-2xl object-cover w-full h-full cursor-pointer p-[1px]" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;