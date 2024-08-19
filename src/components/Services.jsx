import React from 'react';
import { servicesData } from '../constants/ServicesData';

const Services = () => {

    return (
        <section id="services" className="min-h-screen bg-gray-200 dark:bg-zinc-900 text-zinc-900 dark:text-white py-12 pb-10 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {servicesData.map(({ id, service, icon: Icon, info }) => (
                        // Box
                        <div key={id} className="bg-zinc-200 dark:bg-zinc-800 border border-primary text-center rounded-xl p-8 shadow-md hover:shadow-lg hover:shadow-primary transition duration-300 ease-in-out cursor-pointer">
                            <div className="flex items-center justify-center mb-6">
                                <Icon size={40} />
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">{service}</h2>
                            <p className="dark:text-gray-300 dark:hover:text-white">{info}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;