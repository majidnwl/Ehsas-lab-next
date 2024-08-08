import React from 'react';

const services = [
    {
        title: "Web Development",
        description: "We provide high-quality web development services.",
        image: "/Sha.png",
        name: 'Sir Hassam'
    },
    {
        title: "Software Developer",
        description: "Our graphic design services will make your brand stand out.",
        image: "/ikr.png",
        name: 'Sir Ikran'
    },
    {
        title: "Data Scientist",
        description: "Improve your site's ranking with our SEO services.",
        image: "/azeam.png",
        name: 'Sir Azeem'
    },
    {
        title: "Full Stack Developer",
        description: "We offer comprehensive digital marketing solutions.",
        image: "/maj.png",
        name: 'Sir Majid'
    },
];

const ProTeachers = ({ title, de }) => {
    return (
        <div className="p-4 border-black border-y-[10px] bg-[#05184e] text-white">
            <h2 className="text-2xl text-center font-bold mb-2">{title}</h2>
            {de && <p className="text-wrap text-center mb-8">We build awesome course & university sites! Don't miss out join us today!</p>}

            <div className="flex flex-wrap justify-center">
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        className="max-w-sm w-full sm:w-1/2 lg:w-1/4 p-4 transition-transform transform hover:scale-105 duration-300"
                    >
                        <div className="bg-[#132148] shadow-lg h-full flex flex-col hover:shadow-xl">
                            <div className='w-[100%] px-5 py-2'>
                                <img className="w-[100%] rounded-md" src={service.image} alt={service.title} />
                            </div>
                            <div className="p-4 flex-grow">
                                <h1 className='text-center text-xl mb-2 font-bold'>{service.name}</h1>
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
