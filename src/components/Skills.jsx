import React from 'react'

const Skills = () => {
    const linksAndNames = [
        // Frontend
        {
            category: 'Frontend',
            info: {
                imgPath: '../../images/skills/',
                names: ['HTML.png', 'CSS.png', 'JS.png', 'React.png', 'Tailwind.png', 'Bootstrap.png']
            }
        },
        // Backend
        {
            category: 'Backend',
            info: {
                imgPath: '../../images/skills/',
                names: ['Node.png', 'Express.png', 'MongoDB.png', 'REST-API.png']
            }
        },
        // Tools
        {
            category: 'Tools',
            info: {
                imgPath: '../../images/skills/',
                names: ['Git.png', 'Github.png', 'Linux.png', 'Postman.png']
            }
        }
    ];

    const shadowColors = {
        HTML: 'shadow-red-500 hover:shadow-red-500',
        CSS: 'shadow-blue-500 hover:shadow-blue-500',
        JS: 'shadow-yellow-500 hover:shadow-yellow-500',
        React: 'shadow-blue-500 hover:shadow-blue-500',
        Tailwind: 'shadow-teal-500 hover:shadow-teal-500',
        Bootstrap: 'shadow-purple-500 hover:shadow-purple-500',
        Node: 'shadow-green-600 hover:shadow-green-600',
        Express: 'shadow-green-500 hover:shadow-green-500',
        MongoDB: 'shadow-green-800 hover:shadow-green-800',
        API: 'shadow-orange-500 hover:shadow-orange-500',
        Git: 'shadow-red-600 hover:shadow-red-600',
        Github: 'shadow-white hover:shadow-white',
        Linux: 'shadow-yellow-700 hover:shadow-yellow-700',
        Postman: 'shadow-orange-600 hover:shadow-orange-600'
    };

    return (
        <>
            {/* <!--! Skills  --> */}
            <div id="skills" className="skills w-full sm:min-h-screen text-white bg-[#1f1f1f] flex flex-col items-center p-6 gap-8 px-6 md:px-20">
                <div className="mt-7">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">Skills</h1>
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
                                            const skillName = name.split('.')[0];   // ['HTML.png'] -> ['HTML', 'png'], [0] Means 'HTML'
                                            const shadowClass = shadowColors[skillName] || 'shadow-white';  // Accessing the Above object using key as the name, shadowColort[HTML]
                                            return (
                                                <div key={name} className={`w-28 flex flex-col gap-2 items-center shadow-sm hover:shadow-md rounded-md p-2 cursor-pointer ${shadowClass} hover:scale-105 transition-all duration-200`}>
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