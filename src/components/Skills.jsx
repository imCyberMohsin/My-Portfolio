import React from 'react'
import { shadowColors, linksAndNames } from '../constants/SkillsData'

const Skills = () => {

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
                                            const shadowClass = shadowColors[skillName] || 'shadow-white hover:shadow-white';  // Accessing the Above object using key as the name, shadowColort[HTML]
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