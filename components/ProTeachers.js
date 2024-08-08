import React from 'react';

const services = [
    {
        title: "Web Development",
        description: "We provide high-quality web development services.",
        image: "/Sha.png",
        name: 'Sir Hassam'
    },
    {
        title: "Graphic Design",
        description: "Our graphic design services will make your brand stand out.",
        image: "/Sha.png",
        name: 'Sir Hassam'
    },
    {
        title: "SEO Optimization",
        description: "Improve your site's ranking with our SEO services.",
        image: "/Sha.png",
        name: 'Sir Hassam'
    },
    {
        title: "Digital Marketing",
        description: "We offer comprehensive digital marketing solutions.",
        image: "/Sha.png",
        name: 'Sir Hassam'
    },
];

const ProTeachers = ({ title, de }) => {
    return (
        <div className="p-4 border-black border-y-[10px] bg-[#05184e] text-white">
            <h2 className="text-2xl text-center font-bold mb-2 ">{title}</h2>
            {de ? <p className="text-wrap text-center mb-8">We build awesome course & university sites! Don't miss out join us today!</p> : ''}

            <div className="flex flex-wrap justify-center">
                {services.map((service, index) => (
                    <div key={index} className="max-w-sm w-full sm:w-1/2 lg:w-1/4 p-4">
                        <div className="bg-[#132148] shadow-lg h-full flex flex-col">
                            <div className='w-[100%] px-5 py-2'>
                                <img className="w-[100%]" src={service.image} alt={service.title} />
                            </div>
                            <div className="p-4 flex-grow">
                                <h1 className='text-center hover:animate-ping text-xl mb-2 font-bold font-mono'>{service.name}</h1>
                                <div className="font-bold text-md mb-1">{service.title} :</div>
                                <p className="text-base">{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProTeachers;
