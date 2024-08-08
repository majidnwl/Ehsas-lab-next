'use client'
import { useEffect, useRef, useState } from "react";

const successStories = [
    // Your success stories data
    {
      name: "Iqran khan",
      title: "Software Engineer",
      image: "/ikr.png",
    },
    {
      name: "Ahsan Samad",
      title: "Graphic Designer",
      image: "/ahsan.png",
    },
    {
      name: "Qadeer Ali",
      title: "Software Engineer",
      image: "/qasid.png",
    },
    {
      name: "Usman Anjum",
      title: "Software Engineer",
      image: "/usman.png",
    },
    {
      name: "Shahzaib Hassan",
      title: "Graphic Designer",
      image: "/shahzaib hassan.png",
    },
    {
      name: "Fahad Ali",
      title: "Graphic Designer",
      image: "/f2.png",
    },
    {
      name: "Rabia Kousar",
      title: "Graphic Designer",
      image: "/gir.png",
    },
    {
      name: "Ayesha Siddiqa",
      title: "Graphic Designer",
      image: "/gir.png",
    },
    {
      name: "Ambreen Siddique",
      title: "Graphic Designer",
      image: "/gir.png",
    },
    {
      name: "Iram Farooq Ali",
      title: "Graphic Designer",
      image: "/gir.png",
    },
    {
        name: "Fahad Ali",
        title: "Graphic Designer",
        image: "/fahad.png",
      },
    {
      name: "Haris Majeed",
      title: "Graphic Designer",
      image: "/haris.png",
    },
    {
      name: "Hamid Ali",
      title: "Software Engineer",
      image: "/hamid.png",
    },
    {
      name: "Faizan Ali",
      title: "Senior Frontend Developer",
      image: "/faiz.png",
    },
    {
      name: "Waleed Butt",
      title: "Senior Graphic Designer",
      image: "/walid.png",
    },
  ];
  

const SuccessStory = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % successStories.length);
    }, 3000); // Adjust the time interval as needed

    return () => clearInterval(interval);
  }, []);

  const displayedStories = successStories.slice(currentIndex, currentIndex + 3);

  return (
    <div className="p-6 bg-[#002b5e] text-white min-h-screen flex flex-col items-center">
  <h2 className="text-4xl font-bold mb-8 text-center text-gradient">Success Stories</h2>
  <p className="text-lg mb-6">Meet our legends who secured their future</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 md:grid-cols-3 gap-10 mx-auto max-w-6xl">
    {displayedStories.map((story, index) => (
      <div
        key={index}
        className="bg-[#0a245c] p-10 rounded-lg text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
      >
        <div className="relative w-40 h-40 mx-auto mb-8">
          <img
            className="w-full h-full object-cover rounded-full border-4 border-white"
            src={story.image}
            alt={story.name}
          />
        </div>
        <h3 className="text-2xl font-bold mb-3">{story.name}</h3>
        <p className="text-lg text-gray-300">{story.title}</p>
      </div>
    ))}
  </div>
</div>

  
  );
};

export default SuccessStory;

