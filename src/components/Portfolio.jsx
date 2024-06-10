import React from 'react'

const Portfolio = () => {
    const cardsData = [
        {
            id: 0,
            name: 'Food Delivery',
            imgPath: '../../images/projects/food.png',
            live_link: 'https://attendance-system-whdl.onrender.com',
            repo_link: 'https://github.com/imCyberMohsin/Food-Delivery-App.git',
        },
        {
            id: 1,
            name: 'Attendance System',
            imgPath: '../../images/projects/attendance.png',
            live_link: 'https://faithful-cyan-gopher.cyclic.app',
            repo_link: 'https://github.com/imCyberMohsin/Attendance-System_NodeJS.git'
        },
        {
            id: 2,
            name: 'TwoGood UI',
            imgPath: '../../images/projects/twogood.png',
            live_link: 'https://imcybermohsin.github.io/twoGoodCo-clone/',
            repo_link: 'https://github.com/imCyberMohsin/twoGoodCo-clone.git',
        },
        {
            id: 3,
            name: 'Cynthia UI',
            imgPath: '../../images/projects/cynthia.png',
            live_link: 'https://imcybermohsin.github.io/Modern_Website-1_cynthiaugwu-clone/',
            repo_link: 'https://github.com/imCyberMohsin/Modern_Website-1_cynthiaugwu-clone.git',
        },
        {
            id: 4,
            name: 'Resume Builder',
            imgPath: '../../images/projects/resume.png',
            live_link: '',
            repo_link: '',
        },
    ]

    return (
        <>
            {/* <!--! Portfolio  --> */}
            <div id="portfolio"
                name="portfolio"
                className="portfolio w-full text-white bg-[#1f1f1f] flex flex-col items-center p-6 gap-8">
                <div className="sm:mt-12">
                    <h1 className="text-white text-4xl font-bold underline underline-offset-8">Portfolio</h1>
                </div>

                {/* <!-- Card wrapper --> */}
                <div className="cards flex gap-8 flex-wrap justify-center sm:px-20">
                    {/* <!-- Card --> */}
                    {
                        cardsData.map(({ id, name, imgPath, live_link, repo_link }) => {
                            return (
                                <div id={id} className="card w-80 shadow-gray-300 shadow-sm hover:shadow-md rounded-md flex flex-col items-center gap-3 cursor-pointer hover:shadow-white transition-all duration-200">
                                    <div className="img h-auto w-full">
                                        <img className="hover:scale-105 hover:rounded-md rounded-tr-md rounded-tl-md h-full w-full transition-all duration-200" src={imgPath} alt="image" />
                                    </div>
                                    <div className="w-full title text-3xl font-semibold text-center">{name}</div>
                                    <div className="links w-full flex p-3 gap-5 justify-between">
                                        <a target='_blank' href={live_link} className="font-semibold hover:text-blue-600 text-base transition-all duration-200">Live Link <i className="fa-solid fa-link  text-sm"></i></a>
                                        <a target='_blank' href={repo_link} className="font-semibold hover:text-blue-600 text-base transition-all duration-200">Repo Link <i className="fa-solid fa-link  text-sm"></i></a>
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