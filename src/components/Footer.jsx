import React, { useState, memo } from 'react';
import { FaHeart, FaClipboard, FaCheck, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = memo(() => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('mohsinansari7033+portfolio@gmail.com');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
    };

    return (
        <footer className="dark:bg-zinc-900 bg-zinc-300 text-center border-t border-zinc-500">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="flex flex-col md:flex-row justify-between items-center p-8">
                    {/* Drop Your Mail */}
                    <div className="my-6 w-fit">
                        <h2 className="text-lg font-bold dark:text-white text-zinc-800 uppercase">Connect With Me</h2>
                        <p className="dark:text-gray-400 text-gray-600 mb-2">Drop your email, I'll get back to you</p>
                        <form action="https://getform.io/f/wbrkzvwa" method="post" className="flex flex-col md:flex-row justify-center">
                            <div className="flex flex-col md:flex-row w-full max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    name='email'
                                    className="p-2 placeholder-zinc-500 text-center md:text-start rounded-l-full border border-gray-600 dark:bg-zinc-800 bg-zinc-300 dark:text-gray-300 text-zinc-800 w-full mb-2 md:mb-0 rounded-full md:rounded-l-xl md:rounded-r-none"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="p-2 rounded-full bg-primary text-white hover:ring-1 dark:hover:ring-white hover:ring-zinc-800 duration-200 transition-all md:rounded-l-none md:rounded-r-xl"
                                >
                                    Connect
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Email Copy Feature */}
                    <div className="flex flex-col items-center my-3">
                        <h2 className="text-lg font-bold dark:text-white text-zinc-800 uppercase">Mail Me</h2>
                        <p className="dark:text-gray-400 text-gray-600 mb-2">Feel free to reach out!</p>
                        <div className="flex items-center justify-center">
                            <button
                                onClick={handleCopyEmail}
                                className="flex items-center bg-primary text-white  rounded-full md:rounded-xl px-5 py-2.5 hover:shadow-lg hover:ring-2 dark:hover:ring-white hover:ring-zinc-800 duration-200 transition-all"
                                aria-label="Copy email address"
                            >
                                {isCopied ? (
                                    <FaCheck className="mr-2" />
                                ) : (
                                    <FaClipboard className="mr-2" />
                                )}
                                Copy Email
                            </button>
                        </div>
                    </div>

                    {/* Social Media Links Section */}
                    <div className="flex flex-col items-center mt-3">
                        <h2 className="text-lg font-bold dark:text-white text-zinc-800 uppercase">Follow Me</h2>
                        <p className="dark:text-gray-400 text-gray-600 mb-2">On Social Media</p>
                        <div className="flex space-x-4 mt-1">
                            <a href="https://www.linkedin.com/in/mohsin-ansari127/" target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 text-gray-700 hover:text-primary transition-colors duration-200">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com/imcybermohsin" target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 text-gray-700 hover:text-primary transition-colors duration-200">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 text-gray-700 hover:text-primary transition-colors duration-200">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 text-gray-700 hover:text-primary transition-colors duration-200">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="px-4 py-4 md:flex flex-col md:items-center md:justify-center border-t border-zinc-500">
                    <div className="px-4 py-2 md:flex flex-col md:items-center md:justify-center">
                        <span className="dark:text-gray-400 text-gray-600 sm:text-center text-sm font-medium">© 2024 <a href="#">Mohsin Ansari.</a> All Rights Reserved.</span>
                        <p className="w-full dark:text-gray-400 text-gray-600 mt-2 font-semibold whitespace-nowrap text-sm flex items-center justify-center">
                            Designed and Developed with
                            <span className="flex items-center ml-1">
                                <FaHeart className="text-primary cursor-pointer" />
                                <span className="ml-1">by</span>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mohsin-ansari127/" className="text-primary whitespace-nowrap underline underline-offset-2 ml-1">Mohsin Ansari</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
});

export default Footer;