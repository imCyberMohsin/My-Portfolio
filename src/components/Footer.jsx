import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="bg-[#1f1f1f] text-center border-t">
                <div class="mx-auto w-full max-w-screen-xl">
                    <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 class="mb-6 text-lg font-bold text-white uppercase">Company</h2>
                            <ul class="text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class=" hover:underline hover:text-blue-500 duration-200 transition-all">About</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline hover:text-blue-500 duration-200 transition-all">Careers</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline hover:text-blue-500 duration-200 transition-all">Brand
                                        Center</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline hover:text-blue-500 duration-200 transition-all">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-lg font-bold text-white uppercase">Help center</h2>
                            <ul class="text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline hover:text-blue-500 duration-200 transition-all">Discord
                                        Server</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline hover:text-blue-500 duration-200 transition-all">Twitter</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#"
                                        class="hover:underline hover:text-blue-500 duration-200 transition-all">Facebook</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline hover:text-blue-500 duration-200 transition-all">Contact
                                        Us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-lg font-bold text-white uppercase">Legal</h2>
                            <ul class="text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline hover:text-blue-500 duration-200 transition-all">Privacy
                                        Policy</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#"
                                        class="hover:underline hover:text-blue-500 duration-200 transition-all">Licensing</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline hover:text-blue-500 duration-200 transition-all">Terms &amp;
                                        Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-lg font-bold text-white uppercase">Download</h2>
                            <ul class="text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="#" class="hover:underline hover:text-blue-500 duration-200 transition-all">iOS</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline hover:text-blue-500 duration-200 transition-all">Android</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline hover:text-blue-500 duration-200 transition-all">Windows</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" class="hover:underline hover:text-blue-500 duration-200 transition-all">MacOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-4 py-4  md:flex flex-col md:items-center md:justify-center border-t">
                        <div class="px-4 py-2 md:flex flex-col md:items-center md:justify-center">
                            <span class="text-gray-400 sm:text-center text-sm font-medium">© 2024 <a href="#">Mohsin Ansari. </a>All Rights Reserved.</span>
                            <p class="w-full text-gray-400 mt-2 font-semibold text-sm">Designed and Developed <span className="whitespace-nowrap">with <i class="fa-solid fa-heart text-blue-500 cursor-pointer"></i> by <a target="_blank" href="https://www.linkedin.com/in/mohsin-ansari127/" class="text-blue-500 underline underline-offset-2">Mohsin Ansari</a></span></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer