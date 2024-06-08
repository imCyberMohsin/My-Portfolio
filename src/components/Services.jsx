import React from 'react'

const Services = () => {
    return (
        <>
            {/* <!--! Services --> */}
            <div id="services" className="services min-h-screen w-full bg-[#1f1f1f] p-6 px-20">
                <h1 className="text-white text-4xl font-bold text-center py-10 sm:py-8 underline underline-offset-8">Services</h1>
                <div className="mt-12">
                    {/* <!-- Services Box --> */}
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 sm:gap-20 text-white sm:m-10">
                        <div className="box min-h-1 bg-red border-2 rounded-lg p-5 cursor-pointer hover:bg-white hover:text-black shadow-md hover:shadow-white transition-all duration-200">
                            <h1 className="text-3xl py-2 font-semibold">UI / UX Design</h1>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a possimus rerum. Nobis, perferendis. Nesciunt fuga quia reprehenderit perferendis iure.</p>
                        </div>
                        <div className="box min-h-1 bg-red border-2 rounded-lg p-5 cursor-pointer hover:bg-white hover:text-black shadow-md hover:shadow-white transition-all duration-200">
                            <h1 className="text-3xl py-2 font-semibold">Dynamic Websites</h1>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a possimus rerum. Nobis, perferendis. Nesciunt fuga quia reprehenderit perferendis iure.</p>
                        </div>
                        <div className="box min-h-1 bg-red border-2 rounded-lg p-5 cursor-pointer hover:bg-white hover:text-black shadow-md hover:shadow-white transition-all duration-200">
                            <h1 className="text-3xl py-2 font-semibold">Static Websites</h1>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a possimus rerum. Nobis, perferendis. Nesciunt fuga quia reprehenderit perferendis iure.</p>
                        </div>
                        <div className="box min-h-1 bg-red border-2 rounded-lg p-5 cursor-pointer hover:bg-white hover:text-black shadow-md hover:shadow-white transition-all duration-200">
                            <h1 className="text-3xl py-2 font-semibold">E-commerce Websites</h1>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a possimus rerum. Nobis, perferendis. Nesciunt fuga quia reprehenderit perferendis iure.</p>
                        </div>
                        <div className="box min-h-1 bg-red border-2 rounded-lg p-5 cursor-pointer hover:bg-white hover:text-black shadow-md hover:shadow-white transition-all duration-200">
                            <h1 className="text-3xl py-2 font-semibold">Portfolio Websites</h1>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a possimus rerum. Nobis, perferendis. Nesciunt fuga quia reprehenderit perferendis iure.</p>
                        </div>
                        <div className="box min-h-1 bg-red border-2 rounded-lg p-5 cursor-pointer hover:bg-white hover:text-black shadow-md hover:shadow-white transition-all duration-200">
                            <h1 className="text-3xl py-2 font-semibold">Project Building</h1>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a possimus rerum. Nobis, perferendis. Nesciunt fuga quia reprehenderit perferendis iure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services