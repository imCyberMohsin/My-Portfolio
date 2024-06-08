import React from 'react'

const Skills = () => {
    const linksAndNames = [
        // Frontend
        {
            category: 'Frontend',
            info: {
                imgPath: '../../images/skills/',
                names: ['html-5.png', 'css-3.png', 'js.png', 'ejs.png', 'react.png', 'Tailwind-css.png', 'bootstrap.png']
            }
        },
        // Backend
        {
            category: 'Backend',
            info: {
                imgPath: '../../images/skills/',
                names: ['node.png', 'express.png', 'mongodb.png', 'mongoose.png', 'api.png']
            }
        },
        // Tools
        {
            category: 'Tools',
            info: {
                imgPath: '../../images/skills/',
                names: ['git.png', 'github.png', 'linux.png', 'postman.png']
            }
        }
    ];

    return (
        <>
            {/* <!--! Skills  --> */}
            <div id="skills" className="skills w-full sm:h-screen text-white bg-[#1f1f1f] flex flex-col items-center p-6 gap-8">
                <div className="mt-12">
                    <h1 className="text-white text-4xl font-bold underline underline-offset-8">Skills | Tech Stacks</h1>
                </div>

                {/* <!-- Frontend --> */}
                <div className="frontend">
                    <h1 className="text-3xl py-3 font-semibold text-center">Frontend</h1>
                    <div className="icons flex justify-center flex-wrap gap-8">
                        <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/html-5.png" alt="" />
                            </div>
                            <p className="font-semibold">HTML</p>
                        </div>
                        {
                            linksAndNames.map(({ }) => {

                            })
                        }
                        {/* <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/css-3.png" alt="" />
                            </div>
                            <p className="font-semibold">CSS</p>
                        </div>
                        <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/js.png" alt="" />
                            </div>
                            <p className="font-semibold">JS</p>
                        </div>
                        <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/ejs.png" alt="" />
                            </div>
                            <p className="font-semibold">EJS</p>
                        </div>
                        <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/react.png" alt="" />
                            </div>
                            <p className="font-semibold">React</p>
                        </div>
                        <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/Tailwind-css.png" alt="" />
                            </div>
                            <p className="font-semibold">Tailwind</p>
                        </div>
                        <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/bootstrap.png" alt="" />
                            </div>
                            <p className="font-semibold">Bootstrap</p>
                        </div> */}
                    </div>
                </div>

                {/* <!-- Backend --> */}
                <div className="Backend">
                    <h1 className="text-3xl py-3 font-semibold text-center">Backend</h1>
                    <div className="icons flex justify-center flex-wrap gap-8">
                        <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/node.png" alt="" />
                            </div>
                            <p className="font-semibold">Node</p>
                        </div>
                        {
                            linksAndNames.map(({ }) => {

                            })
                        }
                        {/* <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/express.png" alt="" />
                            </div>
                            <p className="font-semibold">Express</p>
                        </div>
                        <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/mongodb.png" alt="" />
                            </div>
                            <p className="font-semibold">MongoDB</p>
                        </div>
                        <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/mongoose.png" alt="" />
                            </div>
                            <p className="font-semibold">Mongoose</p>
                        </div>
                        <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/api.png" alt="" />
                            </div>
                            <p className="font-semibold">API</p>
                        </div> */}
                    </div>
                </div>

                {/* <!-- Tools / Platforms --> */}
                <div className="Tools">
                    <h1 className="text-3xl py-3 font-semibold text-center">Tools & Platforms</h1>
                    <div className="icons flex justify-center flex-wrap gap-8">
                        <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/git.png" alt="" />
                            </div>
                            <p className="font-semibold">Git</p>
                        </div>
                        {
                            linksAndNames.map(({ }) => {

                            })
                        }
                        {/* <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/github.png" alt="" />
                            </div>
                            <p className="font-semibold">Github</p>
                        </div>
                        <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/linux.png" alt="" />
                            </div>
                            <p className="font-semibold">Linux</p>
                        </div>
                        <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white hover:bg-white hover:text-black transition-all duration-200">
                            <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                <img src="../../images/skills/postman.png" alt="" />
                            </div>
                            <p className="font-semibold">Postman</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills