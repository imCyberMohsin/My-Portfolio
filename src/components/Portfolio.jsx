import React from 'react'

const Portfolio = () => {
    return (
        <>
            {/* <!--! Portfolio  --> */}
            <div id="Portfolio" className="Portfolio w-full text-white bg-[#1f1f1f] flex flex-col items-center p-6 gap-8">
                <div className="mt-12">
                    <h1 className="text-white text-4xl font-bold underline underline-offset-8">Portfolio</h1>
                </div>

                {/* <!-- Cards --> */}
                <div className="cards flex gap-5 flex-wrap justify-center">
                    {/* <!-- 1 Card --> */}
                    <div className="card w-80 border-2 rounded-md p-3 flex flex-col items-center gap-3 cursor-pointer hover:bg-white hover:text-black shadow-md hover:shadow-white transition-all duration-200">
                        <div className="img h-48 w-full">
                            <img className="rounded-md h-full w-full" src="../../images/projects/attendance.png" alt="image" />
                        </div>
                        <div className="w-full title text-3xl font-semibold">Attendance System</div>
                        <p className="projectInfo text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, laborum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <div className="links w-full flex gap-5 justify-start">
                            <a href="https://faithful-cyan-gopher.cyclic.app" className="font-semibold hover:text-blue-600 text-base">Live Link <i className="fa-solid fa-link  text-sm"></i></a>
                            <a href="https://github.com/imCyberMohsin/Attendance-System_NodeJS.git" className="font-semibold hover:text-blue-600 text-base">Github Link <i className="fa-solid fa-link  text-sm"></i></a>
                        </div>
                    </div>
                    {/* <!-- 1 Card --> */}
                    <div className="card w-80 border-2 rounded-md p-3 flex flex-col items-center gap-3 cursor-pointer hover:bg-white hover:text-black shadow-md hover:shadow-white transition-all duration-200">
                        <div className="img h-48 w-full">
                            <img className="rounded-md h-full w-full" src="../../images/projects/resume.png" alt="image" />
                        </div>
                        <div className="w-full title text-3xl font-semibold">Resume Builder</div>
                        <p className="projectInfo text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, laborum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <div className="links w-full flex gap-5 justify-start">
                            <a href="https://resume-builder-free.onrender.com" className="font-semibold hover:text-blue-600 text-base">Live Link <i className="fa-solid fa-link  text-sm"></i></a>
                            <a href="https://github.com/imCyberMohsin/Resume-Builder_ExpressJS.git" className="font-semibold hover:text-blue-600 text-base">Github Link <i className="fa-solid fa-link  text-sm"></i></a>
                        </div>
                    </div>
                    {/* <!-- 1 Card --> */}
                    <div className="card w-80 border-2 rounded-md p-3 flex flex-col items-center gap-3 cursor-pointer hover:bg-white hover:text-black shadow-md hover:shadow-white transition-all duration-200">
                        <div className="img h-48 w-full">
                            <img className="rounded-md h-full w-full" src="../../images/projects/instagram.png" alt="image" />
                        </div>
                        <div className="w-full title text-3xl font-semibold">Instagram Clone</div>
                        <p className="projectInfo text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, laborum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <div className="links w-full flex gap-5 justify-start">
                            <a href="#" className="font-semibold hover:text-blue-600 text-base">Live Link <i className="fa-solid fa-link  text-sm"></i></a>
                            <a href="https://github.com/imCyberMohsin/Instagram-clone-NodeJS.git" className="font-semibold hover:text-blue-600 text-base">Github Link <i className="fa-solid fa-link  text-sm"></i></a>
                        </div>
                    </div>
                    {/* <!-- 1 Card --> */}
                    <div className="card w-80 border-2 rounded-md p-3 flex flex-col items-center gap-3 cursor-pointer hover:bg-white hover:text-black shadow-md hover:shadow-white transition-all duration-200">
                        <div className="img h-48 w-full">
                            <img className="rounded-md h-full w-full" src="../../images/projects/pinterest.png" alt="image" />
                        </div>
                        <div className="w-full title text-3xl font-semibold">Pinterest Clone</div>
                        <p className="projectInfo text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, laborum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <div className="links w-full flex gap-5 justify-start">
                            <a href="#" className="font-semibold hover:text-blue-600 text-base">Live Link <i className="fa-solid fa-link  text-sm"></i></a>
                            <a href="https://github.com/imCyberMohsin/Pinterest-clone_Nodejs.git" className="font-semibold hover:text-blue-600 text-base">Github Link <i className="fa-solid fa-link  text-sm"></i></a>
                        </div>
                    </div>
                    {/* <!-- 1 Card --> */}
                    <div className="card w-80 border-2 rounded-md p-3 flex flex-col items-center gap-3 cursor-pointer hover:bg-white hover:text-black shadow-md hover:shadow-white transition-all duration-200">
                        <div className="img h-48 w-full">
                            <img className="rounded-md h-full w-full" src="../../images/projects/cynthia.png" alt="image" />
                        </div>
                        <div className="w-full title text-3xl font-semibold">Cynthia UI Clone</div>
                        <p className="projectInfo text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, laborum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <div className="links w-full flex gap-5 justify-start">
                            <a href="https://imcybermohsin.github.io/Modern_Website-1_cynthiaugwu-clone/" className="font-semibold hover:text-blue-600 text-base">Live Link <i className="fa-solid fa-link  text-sm"></i></a>
                            <a href="https://github.com/imCyberMohsin/Modern_Website-1_cynthiaugwu-clone.git" className="font-semibold hover:text-blue-600 text-base">Github Link <i className="fa-solid fa-link  text-sm"></i></a>
                        </div>
                    </div>
                    {/* <!-- 1 Card --> */}
                    <div className="card w-80 border-2 rounded-md p-3 flex flex-col items-center gap-3 cursor-pointer hover:bg-white hover:text-black shadow-md hover:shadow-white transition-all duration-200">
                        <div className="img h-48 w-full">
                            <img className="rounded-md h-full w-full" src="../../images/projects/twogood.png" alt="image" />
                        </div>
                        <div className="w-full title text-3xl font-semibold">TwoGood UI Clone</div>
                        <p className="projectInfo text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, laborum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                        <div className="links w-full flex gap-5 justify-start">
                            <a href="https://imcybermohsin.github.io/twoGoodCo-clone/" className="font-semibold hover:text-blue-600 text-base">Live Link <i className="fa-solid fa-link  text-sm"></i></a>
                            <a href="https://github.com/imCyberMohsin/twoGoodCo-clone.git" className="font-semibold hover:text-blue-600 text-base">Github Link <i className="fa-solid fa-link  text-sm"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio