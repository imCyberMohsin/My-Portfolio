import React from 'react'
import { shadowColors, linksAndNames } from '../constants/SkillsData'

const Skills = () => {

    return (
        <>
            {/* <!--! Skills  --> */}
            <div id="skills" className="skills w-full sm:min-h-screen dark:text-white text-zinc-800 dark:bg-zinc-900 bg-zinc-300 flex flex-col items-center p-6 gap-8 px-6 md:px-20">
                <div className="mt-6">
                    <h1 className="text-4xl font-bold">Skills</h1>
                    <div className='underline h-[2px] bg-primaryDark'></div>
                </div>
                {/* <!-- Mapping through each category --> */}
                {
                    linksAndNames.map(({ category, info }) => {
                        return (
                            <div key={category} className={category.toLowerCase()}>
                                <h1 className="text-2xl dark:text-gray-300 text-zinc-800 py-3 font-semibold text-center">{category}</h1>
                                <div className="icons flex justify-center flex-wrap gap-8">
                                    {
                                        info.names.map((name) => {
                                            const skillName = name.split('.')[0];   // ['HTML.png'] -> ['HTML', 'png'], [0] Means 'HTML'
                                            const shadowClass = shadowColors[skillName] || 'shadow-accent hover:shadow-accent';  // Accessing the Above object using key as the name, shadowColort[HTML]
                                            return (
                                                <div key={name} className={`w-28 flex flex-col gap-2 dark:bg-transparent bg-white dark:text-white text-black items-center shadow-sm hover:shadow-md rounded-md p-2 cursor-pointer ${shadowClass} hover:scale-105 transition-all duration-200`}>
                                                    <div className="img sm:w-10 sm:h-10 w-8 h-8">
                                                        <img loading='lazy'
                                                            src={`${info.imgPath}${name}`}
                                                            alt="Skill Icon"
                                                            className='opacity-0 transition-all duration-300'
                                                            onLoad={(e) => {
                                                                e.currentTarget.style.opacity = 1;
                                                                const previousSibling = e.currentTarget.previousElementSibling;
                                                                if (previousSibling) {
                                                                    previousSibling.style.display = 'none';
                                                                }
                                                            }}
                                                        />
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