import React from 'react'

const Contact = () => {
    return (
        <>
            {/* <!--! Contact Form --> */}
            <div id="contact" className="contactMe w-full h-screen bg-[#1f1f1f]">
                <form action="/contact" method="post" className="w-full max-w-md mx-auto p-5 bg-[#1f1f1f] text-white">
                    <h1 className="text-4xl font-bold p-5 text-center">Contact Me</h1>
                    <div className="mb-5">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                        <input type="text" id="name" name="name" className="bg-transparent border outline-none focus:ring-4 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  duration-150" placeholder="Full Name" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone</label>
                        <input type="text" id="phone" name="phone" className="bg-transparent border outline-none focus:ring-4 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  transition-all duration-150" placeholder="Contact Number" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                        <input type="email" id="email" name="email" className="bg-transparent border outline-none focus:ring-4 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  transition-all duration-150" placeholder="Email Address" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">Your message</label>
                        <textarea id="message" name="message" rows="4" className="bg-transparent block p-2.5 w-full text-sm rounded-lg border outline-none focus:ring-4 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400  transition-all duration-150" placeholder="Leave Your Message or Feedback Here" required></textarea>
                    </div>

                    <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-lg px-6 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-white transition-all duration-150">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact