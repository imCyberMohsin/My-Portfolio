import React from 'react'

const Contact = () => {
    return (
        <>
            {/* <!--! Contact Form --> */}
            <div id="contact" className="contactMe w-full min-h-screen dark:bg-zinc-900 bg-zinc-300">
                <form action="https://getform.io/f/wbrkzvwa" method="post" className="w-full max-w-md mx-auto p-6 dark:text-white text-zinc-800">
                    <div className='mt-6 mb-8 w-fit mx-auto'>
                        <h1 className="text-4xl font-bold text-center">Contact Me</h1>
                        <div className='underline h-[2px] bg-primaryDark'></div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                        <input type="text" id="name" name="name" className="bg-transparent border outline-none focus:ring-4 dark:border-gray-300 border-zinc-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:placeholder-gray-400 placeholder-zinc-500 duration-200" placeholder="Full Name" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                        <input type="email" id="email" name="email" className="bg-transparent border outline-none focus:ring-4 dark:border-gray-300 border-zinc-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:placeholder-gray-400 placeholder-zinc-500 transition-all duration-200" placeholder="Email Address" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">Your message</label>
                        <textarea id="message" name="message" rows="9" className="bg-transparent block p-2.5 w-full text-sm rounded-lg border outline-none focus:ring-4 dark:border-gray-300 border-zinc-800 focus:ring-primary focus:border-primary dark:placeholder-gray-400 placeholder-zinc-500 transition-all duration-200" placeholder="Enter Your Message" required></textarea>
                    </div>

                    <div className='text-center'>
                        <button type="submit"
                            className="group inline-block px-10 py-3 font-semibold uppercase text-center text-white tracking-wider bg-primaryDark rounded-full md:rounded-xl transition-all duration-200 ease-out hover:text-white hover:no-underline mt-3 w-full md:w-auto"
                            role="button"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact