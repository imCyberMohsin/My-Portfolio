import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { portfolioData, colors } from '../constants/PortfolioData'

const Portfolio = () => {

    return (
        <>
            {/* <!--! Portfolio  --> */}
            <div id="portfolio"
                name="portfolio"
                className="portfolio min-h-screen w-full dark:text-white text-zinc-800 dark:bg-zinc-900 bg-zinc-300 flex flex-col items-center gap-8 p-6 px-6 md:px-20">
                <div className="mt-6">
                    <h1 className="text-4xl font-bold">Portfolio</h1>
                    <div className='underline h-[2px] bg-primaryDark'></div>
                </div>

                {/* <!-- Card wrapper --> */}
                <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {/* <!-- Card --> */}
                    {
                        portfolioData.map(({ name, stacks, imgPath, live_link, repo_link }) => {
                            const stacksArray = stacks.split(', ');
                            return (
                                <div key={name}
                                    className="card w-80 border dark:border-zinc-600 border-zinc-400 dark:hover:border-zinc-400 hover:border-zinc-600 rounded-md flex flex-col items-center justify-between gap-3 cursor-pointer transition-all duration-300">
                                    <div className="img h-auto w-full">
                                        <img
                                            loading='eager'
                                            className="hover:scale-105 hover:rounded-md rounded-tr-md rounded-tl-md h-full w-full opacity-0 transition-all duration-300"
                                            src={imgPath} alt="image"
                                            onLoad={(e) => {
                                                e.currentTarget.style.opacity = 1;
                                                const previousSibling = e.currentTarget.previousElementSibling;
                                                if (previousSibling) {
                                                    previousSibling.style.display = 'none';
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="w-full title text-3xl font-semibold text-center hover:text-accent transition-all duration-300">{name}</div>

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
                                            className="font-semibold dark:text-gray-300 text-zinc-800 text-base flex items-center border border-zinc-500 rounded-md p-1.5 dark:hover:bg-white hover:bg-zinc-800 dark:hover:text-black hover:text-white transition-all duration-500">
                                            Live Link
                                            <FaExternalLinkAlt className="ml-2 text-sm" />
                                        </a>
                                        {repo_link && (
                                            <a target='_blank' rel='noopener noreferrer' href={repo_link}
                                                className="font-semibold dark:text-gray-300 text-zinc-800 text-base flex items-center border border-zinc-500 rounded-md p-1.5 dark:hover:bg-white hover:bg-zinc-800 dark:hover:text-black hover:text-white transition-all duration-500">
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