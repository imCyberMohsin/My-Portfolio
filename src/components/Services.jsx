import React from 'react'

const Services = () => {
    const boxData = [
        {
            id: 1,
            service: 'UI / UX Design',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a possimus rerum. Nobis, perferendis. Nesciunt fuga quia reprehenderit perferendis iure.'
        },
        {
            id: 2,
            service: 'Dynamic Websites',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a possimus rerum. Nobis, perferendis. Nesciunt fuga quia reprehenderit perferendis iure.'
        },
        {
            id: 3,
            service: 'Static Websites',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a possimus rerum. Nobis, perferendis. Nesciunt fuga quia reprehenderit perferendis iure.'
        },
        {
            id: 4,
            service: 'E-commerce Websites',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a possimus rerum. Nobis, perferendis. Nesciunt fuga quia reprehenderit perferendis iure.'
        },
        {
            id: 5,
            service: 'Portfolio Websites',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a possimus rerum. Nobis, perferendis. Nesciunt fuga quia reprehenderit perferendis iure.'
        },
        {
            id: 6,
            service: 'Project Building',
            info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a possimus rerum. Nobis, perferendis. Nesciunt fuga quia reprehenderit perferendis iure.'
        },
    ]

    return (
        <>
            {/* <!--! Services --> */}
            <div id="services" className="services min-h-screen w-full bg-[#1f1f1f] p-6 px-20">
                <h1 className="text-white text-4xl font-bold text-center py-10 sm:py-8 underline underline-offset-8">Services</h1>
                <div className="mt-12">
                    {/* <!-- Services Box --> */}
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 sm:gap-20 text-white sm:m-10">
                        {
                            boxData.map(({ id, service, info }) => {
                                return (
                                    <div key={id} className="box min-h-1 bg-red border-2 rounded-lg p-5 cursor-pointer shadow-md hover:shadow-white transition-all duration-200">
                                        <h1 className="text-3xl py-2 font-semibold">{service}</h1>
                                        <p className="text-justify">{info}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services