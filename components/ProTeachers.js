import React from 'react';

const services = [
    {
        title: "Data Scientist",
        description: "( Co-founder )",
        flag: '/Austria.jpg',
        image: "/azeam.png",
        name: 'Azeem Shahzad',
        linkedin: '#', // Add the appropriate links here
        facebook: '#',
        instagram: '#',
    },
    {
        title: "Full Stack Developer",
        description: "( Co-founder )",
        flag: '/pak.png',
        image: "/maj.png",
        name: 'Majid Ali',
        linkedin: '#',
        facebook: '#',
        instagram: '#',
    },
    {
        title: "Masters in Computer Vision Robotics",
        description: "( Co-founder )",
        flag: '/france.webp',
        image: "/num.png",
        name: 'Nauman Shafique',
        linkedin: '#',
        facebook: '#',
        instagram: '#',
    },
    {
        title: "Graphic Designer",
        description: "( CEO )",
        flag: '/pak.png',
        image: "/Sha.png",
        name: 'Sir Hassam',
        linkedin: '#',
        facebook: '#',
        instagram: '#',
    },
];

const ProTeachers = ({ title, de }) => {
    return (
        <div className="p-4 border-black border-y-[10px] bg-[#05184e] text-white">
            <h2 className="text-4xl capitalize text-center font-bold mb-2">{title}</h2>
            {de && <p className="text-wrap text-center mb-8">We build awesome course & university sites! Don't miss out join us today!</p>}

            <div className="flex flex-wrap justify-center">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="max-w-sm w-full sm:w-1/2 lg:w-1/4 p-4 transition-transform transform hover:scale-105 duration-300"
                    >
                        <div className="bg-[#132148] shadow-lg h-full flex flex-col justify-between">
                            <div className="relative w-full">
                                <img className="w-full rounded-md" src={service.image} alt={service.title} />
                                <img 
                                    className="absolute top-2 right-2 w-8 h-8 rounded-full border-2 border-white" 
                                    src={service.flag} 
                                    alt={`${service.title} flag`} 
                                />
                            </div>
                            <div className="p-4 flex-grow flex flex-col">
                                <h1 className='text-center text-xl mb-2 capitalize font-bold'>{service.name}</h1>
                                <p className="text-xs text-center">{service.description}</p>
                                <div className="text-center text-lg my-2">{service.title}</div>
                                <div className="flex justify-center mt-auto space-x-4">
                                    <a href={service.linkedin} className="">
                                        <i className="bx bxl-linkedin bg-[#3d9b05] rounded-full text-lg p-1"></i>
                                    </a>
                                    <a href={service.facebook} className="">
                                        <i className="bx bxl-facebook text-lg bg-[#3d9b05] rounded-full  p-1"></i>
                                    </a>
                                    <a href={service.instagram} className="">
                                        <i className="bx bxl-instagram  bg-[#3d9b05] rounded-full  text-lg p-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProTeachers;
