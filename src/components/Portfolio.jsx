import React from 'react'

const Portfolio = () => {
    const portfolioData = [
        {
            name: 'Food Delivery',
            imgPath: '../../images/projects/food.png',
            live_link: 'https://food-time-6i7q.onrender.com',
            repo_link: 'https://github.com/imCyberMohsin/Food-Delivery-App.git',
        },
        {
            name: 'Resume Builder',
            imgPath: '../../images/projects/resume.png',
            live_link: 'https://resume-builder-127.netlify.app',
            repo_link: 'https://github.com/imCyberMohsin/ATS-Friendly-Resume-Builder',
        },
        {
            name: 'Apple Revamped',
            imgPath: '../../images/projects/apple.png',
            live_link: 'https://applerevamped.netlify.app/',
            repo_link: 'https://github.com/imCyberMohsin/Apple_website_Revamped.git',
        },
        {
            name: 'JT Foundation NGO',
            imgPath: '../../images/projects/ngo.png',
            live_link: 'https://jt-foundation.com',
            repo_link: '',
        },
        {
            name: 'Attendance System',
            imgPath: '../../images/projects/attendance.png',
            live_link: 'https://attendance-system-whdl.onrender.com',
            repo_link: 'https://github.com/imCyberMohsin/Attendance-System_NodeJS.git'
        },
        {
            name: 'TwoGood UI',
            imgPath: '../../images/projects/twogood.png',
            live_link: 'https://two-good-ui.netlify.app',
            repo_link: 'https://github.com/imCyberMohsin/twoGoodCo-clone.git',
        },
        {
            name: 'Cynthia UI',
            imgPath: '../../images/projects/cynthia.png',
            live_link: 'https://imcybermohsin.github.io/Modern_Website-1_cynthiaugwu-clone/',
            repo_link: 'https://github.com/imCyberMohsin/Modern_Website-1_cynthiaugwu-clone.git',
        },
    ]

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
                        portfolioData.map(({ name, imgPath, live_link, repo_link }) => {
                            return (
                                <div key={name}
                                    className="card w-80 shadow-gray-300 shadow-sm hover:shadow-md rounded-md flex flex-col items-center gap-3 cursor-pointer hover:shadow-white transition-all duration-200">
                                    <div className="img h-auto w-full">
                                        <img
                                            className="hover:scale-105 hover:rounded-md rounded-tr-md rounded-tl-md h-full w-full transition-all duration-200"
                                            src={imgPath} alt="image"
                                        />
                                    </div>
                                    <div className="w-full title text-3xl font-semibold text-center">{name}</div>
                                    {/* <p className='px-2.5 text-justify text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis voluptates maiores</p> */}
                                    <div className="links w-full flex p-3 gap-5 justify-between">
                                        <a target='_blank' href={live_link} className="font-semibold text-gray-300 hover:text-blue-600 text-base transition-all duration-200">Live Link <i className="fa-solid fa-link  text-sm"></i></a>
                                        <a target='_blank' href={repo_link} className="font-semibold text-gray-300 hover:text-blue-600 text-base transition-all duration-200">Repo Link <i className="fa-solid fa-link  text-sm"></i></a>
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