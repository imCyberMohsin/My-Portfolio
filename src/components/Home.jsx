import React from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { socials } from '../constants/HomeData'

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

    // Typewriter
    const [jobTitle] = useTypewriter({
        words: ['Full Stack Developer', 'MERN Stack Developer', 'Freelancer'],
        loop: {},
    })

    const handleContextMenu = (e) => {
        e.preventDefault();
    };

    return (
        <>
            {/* <!--! Home --> */}
            <div id="Home" name="Home"
                className="Home w-full min-h-screen pt-3 pb-8 dark:bg-zinc-900 bg-zinc-200 flex flex-col-reverse md:flex-row justify-center items-center gap-5 sm:gap-8">
                {/* <!-- Left --> */}
                <div className="left md:w-2/5 w-4/5 dark:text-white text-zinc-800 flex flex-col md:justify-start md:items-start items-center gap-4">
                    <div>
                        <h1 className="name text-5xl sm:text-6xl font-semibold">I'm Mohsin</h1>
                        <h2 className="name typing-text dark:text-primary text-zinc-600 text-xl sm:text-3xl font-semibold">{jobTitle} <Cursor /></h2>
                    </div>

                    <p id='para' className="sm:w-4/5 sm:text-lg dark:text-gray-300 text-zinc-800 text-justify">I'm a Full Stack Developer skilled in HTML,
                        CSS, JS, React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. With a passion for crafting seamless and
                        visually appealing web applications, I specialize in creating dynamic and user-friendly experiences. Let's
                        collaborate and turn your ideas into reality!</p>

                    <div className='flex flex-col items-center'>
                        {/* Socials */}
                        <div className="socials flex gap-5 my-1">
                            {
                                socials.map(({ name, href, IconComponent }) => {
                                    return (
                                        <a id='social-icon' key={name} href={href} target="_blank"
                                            className="icons text-xl w-10 h-10 bg-transparent rounded-full overflow-hidden flex justify-center items-center border-2 dark:border-white border-black cursor-pointer dark:hover:bg-primary hover:bg-zinc-500 shadow-sm hover:shadow-primary transition-all duration-200">
                                            <IconComponent />
                                        </a>
                                    )
                                })
                            }
                        </div>

                        {/* Download Button */}
                        <a id='download-btn' href="../../resume.pdf" download
                            className="group inline-block px-6 py-3 font-semibold uppercase text-center text-white tracking-wider dark:bg-primaryDark bg-zinc-900 dark:hover:bg-accent hover:bg-zinc-700 rounded-full md:rounded-xl transition-all duration-200 ease-out hover:text-white hover:no-underline mt-3 w-full md:w-auto"
                            role="button"
                        >
                            Download My Resume
                        </a>
                    </div>
                </div>

                {/* <!-- Right --> */}
                <div className="right">
                    <div
                        onContextMenu={handleContextMenu}
                        className="rightImage bg-white w-72 h-72 sm:w-96 sm:h-96 rounded-full md:rounded-2xl overflow-hidden">
                        <div className='bg-gray-300 rounded-2xl absolute inset-0'></div>
                        <img src="../images/profile2.png"
                            alt="Hero img"
                            className="rounded-2xl object-cover w-full h-full sm:p-[1px] opacity-0 transition-all duration-300"
                            loading='eager'
                            draggable="false"
                            onLoad={(e) => {
                                e.currentTarget.style.opacity = 1;
                                e.currentTarget.previousElementSibling.style.display = 'none';
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;