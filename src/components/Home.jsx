import React from 'react';

const Home = () => {
    return (
        <>
            {/* <!--! Home --> */}
            <div id="home"
                className="Home w-full h-screen bg-[#1f1f1f] flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-8">
                {/* <!-- Left --> */}
                <div className="left sm:w-2/5 w-4/5 text-white flex flex-col sm:justify-start sm:items-start items-center gap-4 mt-12">
                    {/* <!-- <h3 className="text-blue-700 text-3xl font-semibold">Hey!</h3> --> */}

                    <div>
                        <h1 className="text-4xl sm:text-6xl font-semibold">I'm Mohsin Ansari</h1>
                        <p className="typing-text text-blue-500 text-xl sm:text-3xl font-semibold">Fullstack Web Developer</p>
                    </div>

                    <p className="sm:w-4/5 sm:text-lg text-gray-300 text-justify">I'm Mohsin, a Full Stack Developer skilled in HTML,
                        CSS, JS, EJS, Node.js, Express.js, MongoDB, and Tailwind CSS. With a passion for crafting seamless and
                        visually appealing web applications, I specialize in creating dynamic and user-friendly experiences. Let's
                        collaborate and turn your ideas into reality!</p>

                    <div className="socials flex gap-5 my-1">
                        <a href="https://www.linkedin.com/in/mohsin-ansari127/" target="_blank"
                            className="icons w-10 h-10 bg-transparent rounded-full overflow-hidden flex justify-center items-center border-2 cursor-pointer hover:bg-blue-600 shadow-sm hover:shadow-blue-600 transition-all duration-200 ">
                            <i className="fa-brands fa-linkedin text-2xl"></i>
                        </a>
                        <a href="#" target="_blank"
                            className="icons w-10 h-10 bg-transparent rounded-full overflow-hidden flex justify-center items-center border-2 cursor-pointer hover:bg-blue-600 shadow-sm hover:shadow-blue-600 transition-all duration-200">
                            <i className="fa-brands fa-x-twitter text-2xl"></i>
                        </a>
                        <a href="https://github.com/imCyberMohsin" target="_blank"
                            className="icons w-10 h-10 bg-transparent rounded-full overflow-hidden flex justify-center items-center border-2 cursor-pointer hover:bg-blue-600 shadow-sm hover:shadow-blue-600 transition-all duration-200">
                            <i className="fa-brands fa-github text-2xl"></i>
                        </a>
                        <a href="#" target="_blank"
                            className="icons w-10 h-10 bg-transparent rounded-full overflow-hidden flex justify-center items-center border-2 cursor-pointer hover:bg-blue-600 shadow-sm hover:shadow-blue-600 transition-all duration-200">
                            <i className="fa-brands fa-discord text-2xl"></i>
                        </a>
                    </div>

                    <a href="../../resume.pdf" download
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-full text-lg px-6 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-white transition-all duration-150"
                    >
                        Download My Resume</a>
                </div>

                {/* <!-- Right --> */}
                <div className="right">
                    <div className="rightImage bg-white w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden">
                        <img src="../images/profile.png" alt="img" className="object-cover w-full h-full cursor-pointer p-[2px]" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
