import React from 'react';
import { FaPalette, FaCode, FaCube, FaShoppingCart, FaBriefcase, FaTools } from 'react-icons/fa'; // Import icons from react-icons library

const Services = () => {
    const boxData = [
        {
            id: 1,
            service: 'UI / UX Design',
            icon: <FaPalette size={40} />,
            info: 'Create intuitive user interfaces and engaging user experiences tailored to your audience.',
        },
        {
            id: 2,
            service: 'Web Development',
            icon: <FaCode size={40} />,
            info: 'Develop responsive websites and web applications that meet your business needs and goals.',
        },
        {
            id: 3,
            service: 'WordPress Development',
            icon: <FaCube size={40} />,
            info: 'Create and customize WordPress websites tailored to your needs, ensuring a user-friendly and dynamic online presence.',
        },        
        {
            id: 4,
            service: 'E-commerce Solutions',
            icon: <FaShoppingCart size={40} />,
            info: 'Build scalable e-commerce platforms with seamless shopping experiences and secure transactions.',
        },
        {
            id: 5,
            service: 'SEO',
            icon: <FaBriefcase size={40} />,
            info: 'Enhance your online presence with proven SEO strategies that boost search engine rankings and drive organic traffic to your website.',
        },        
        {
            id: 6,
            service: 'IT Consulting',
            icon: <FaTools size={40} />,
            info: 'Provide expert IT consulting services to optimize your business operations and technology.',
        },
    ];

    return (
        <section id="services" className="min-h-screen bg-[#1f1f1f] text-white py-12 pb-10 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {boxData.map(({ id, service, icon, info }) => (
                        // Box
                        <div key={id} className="bg-[#2f2f2f] text-center rounded-lg p-8 hover:bg-[#3f3f3f] shadow-xl transition duration-300 ease-in-out">
                            <div className="flex items-center justify-center mb-6">{icon}</div>
                            <h2 className="text-2xl font-semibold mb-4">{service}</h2>
                            <p className="text-gray-300">{info}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
