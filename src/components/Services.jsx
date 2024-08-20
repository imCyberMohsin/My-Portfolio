import React from 'react';
import { servicesData } from '../constants/ServicesData';

const Services = () => {

    return (
        <section id="services" className="min-h-screen bg-gray-200 dark:bg-zinc-900 text-zinc-900 dark:text-white py-12 pb-10 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                <div className='mb-8 md:mb-12 w-fit text-center mx-auto'>
                    <h1 className="text-4xl font-bold text-center">Our Services</h1>
                    <div className='underline h-[2px] bg-primaryDark'></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {servicesData.map(({ id, service, icon: Icon, info }) => (
                        // Box
                        <div
                            key={id}
                            className="relative bg-zinc-200 dark:bg-zinc-800 text-center rounded-xl p-8 shadow-md hover:shadow-md hover:shadow-primary transition duration-300 ease-in-out cursor-pointer"
                        >
                            {/* Gradient Top Border */}
                            <div
                                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent rounded-t-xl"
                            />
                            {/* Icon */}
                            <div className="flex items-center justify-center mb-6">
                                <Icon size={40} />
                            </div>
                            {/* Service Title */}
                            <h2 className="text-2xl font-semibold mb-4">{service}</h2>
                            {/* Service Info */}
                            <p className="dark:text-gray-300 dark:hover:text-white">{info}</p>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;