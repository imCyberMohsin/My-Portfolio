import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
    const portfolioData = [
        {
            name: 'Food Delivery',
            stacks: 'Express.js, MongoDB, EJS, Tailwind, Stripe, Passport-auth',
            imgPath: '../../images/projects/food.png',
            live_link: 'https://food-time-6i7q.onrender.com',
            repo_link: 'https://github.com/imCyberMohsin/Food-Delivery-App.git',
        },
        {
            name: 'Resume Builder',
            stacks: 'React.js, Tailwind CSS',
            imgPath: '../../images/projects/resume.png',
            live_link: 'https://resume-builder-127.netlify.app',
            repo_link: 'https://github.com/imCyberMohsin/ATS-Friendly-Resume-Builder',
        },
        {
            name: 'Apple Revamped',
            stacks: 'React.js, Tailwind, GSAP',
            imgPath: '../../images/projects/apple.png',
            live_link: 'https://applerevamped.netlify.app/',
            repo_link: 'https://github.com/imCyberMohsin/Apple_website_Revamped.git',
        },
        {
            name: 'JT Foundation NGO',
            stacks: 'Express.js, EJS, Tailwind',
            imgPath: '../../images/projects/ngo.png',
            live_link: 'https://jt-foundation.com',
            repo_link: '#',
        },
        {
            name: 'Attendance System',
            stacks: 'Express.js, EJS, MongoDB, Face.js-api, live-attendance',
            imgPath: '../../images/projects/attendance.png',
            live_link: 'https://attendance-system-whdl.onrender.com',
            repo_link: 'https://github.com/imCyberMohsin/Attendance-System_NodeJS.git'
        },
        {
            name: 'TwoGood UI',
            stacks: 'HTML,CSS, JS, GSAP',
            imgPath: '../../images/projects/twogood.png',
            live_link: 'https://two-good-ui.netlify.app',
            repo_link: 'https://github.com/imCyberMohsin/twoGoodCo-clone.git',
        },
        {
            name: 'Cynthia UI',
            stacks: 'HTML, CSS, JS, GSAP',
            imgPath: '../../images/projects/cynthia.png',
            live_link: 'https://imcybermohsin.github.io/Modern_Website-1_cynthiaugwu-clone/',
            repo_link: 'https://github.com/imCyberMohsin/Modern_Website-1_cynthiaugwu-clone.git',
        },
    ]

    const colors = [
        'bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500',
        'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500',
        'bg-teal-500', 'bg-cyan-500', 'bg-amber-500', 'bg-lime-500',
        'bg-fuchsia-500', 'bg-rose-500', 'bg-violet-500'
    ];

    return (
        <>
            {/* <!--! Portfolio  --> */}
            <div id="portfolio"
                name="portfolio"
                className="portfolio min-h-screen w-full text-white bg-[#1f1f1f] flex flex-col items-center gap-8 p-6 px-6 md:px-20">
                <div className="mt-6">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">Portfolio</h1>
                </div>

                {/* <!-- Card wrapper --> */}
                <div className="cards flex gap-8 flex-wrap justify-center sm:px-20">
                    {/* <!-- Card --> */}
                    {
                        portfolioData.map(({ name, stacks, imgPath, live_link, repo_link }) => {
                            const stacksArray = stacks.split(', ');
                            return (
                                <div key={name}
                                    className="card w-80 shadow-gray-300 shadow-sm hover:shadow-md rounded-md flex flex-col items-center justify-between gap-3 cursor-pointer hover:shadow-white transition-all duration-200">
                                    <div className="img h-auto w-full">
                                        <img
                                            loading='lazy'
                                            className="hover:scale-105 hover:rounded-md rounded-tr-md rounded-tl-md h-full w-full transition-all duration-200"
                                            src={imgPath} alt="image"
                                        />
                                    </div>
                                    <div className="w-full title text-3xl font-semibold text-center">{name}</div>

                                    <div className='stacks px-1 flex justify-center flex-wrap gap-1.5'>
                                        {stacksArray.map((stack, index) => {
                                            const randomColor = colors[Math.floor(Math.random() * colors.length)];
                                            return (
                                                <div key={index} className={`${randomColor} py-0.8 px-1.5 font-medium active:scale-105 rounded-sm selection:bg-none transition-all duration-200`}>
                                                    {stack}
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* <p className='px-2.5 text-justify text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptates maiores</p> */}

                                    <div className="links w-full flex p-3 gap-5 justify-between">
                                        <a target='_blank' rel='noopener noreferrer' href={live_link}
                                            className="font-semibold text-gray-300 hover:-translate-y-0.5 hover:text-blue-500 text-base transition-all duration-200 flex items-center">
                                            Live Link
                                            <FaExternalLinkAlt className="ml-2 text-sm" />
                                        </a>
                                        {repo_link && (
                                            <a target='_blank' rel='noopener noreferrer' href={repo_link}
                                                className="font-semibold text-gray-300 hover:-translate-y-0.5 hover:text-blue-500 text-base transition-all duration-200 flex items-center">
                                                Repo Link
                                                <FaExternalLinkAlt className="ml-2 text-sm" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Portfolio