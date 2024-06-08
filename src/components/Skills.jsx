import React from 'react'

const Skills = () => {
    const linksAndNames = [
        // Frontend
        {
            category: 'Frontend',
            info: {
                imgPath: '../../images/skills/',
                names: ['html-5.png', 'css-3.png', 'js.png', 'ejs.png', 'react.png', 'tailwind.png', 'bootstrap.png']
            }
        },
        // Backend
        {
            category: 'Backend',
            info: {
                imgPath: '../../images/skills/',
                names: ['node.png', 'express.png', 'mongodb.png', 'api.png']
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

                {/* <!-- Mapping through each category --> */}
                {
                    linksAndNames.map(({ category, info }) => {
                        return (
                            <div key={category} className={category.toLowerCase()}>
                                <h1 className="text-3xl py-3 font-semibold text-center">{category}</h1>
                                <div className="icons flex justify-center flex-wrap gap-8">
                                    {
                                        info.names.map((name) => {
                                            return (
                                                <div className="w-24 flex flex-col gap-2 items-center border-2 rounded-md p-2 cursor-pointer shadow-md hover:shadow-white transition-all duration-200">
                                                    <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                                        <img src={`${info.imgPath}${name}`} alt="x" />
                                                    </div>
                                                    <p className="font-semibold">{name.split('.')[0]}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Skills