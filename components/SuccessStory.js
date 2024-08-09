'use client'
import { useEffect, useState } from "react";

const successStories = [
  { name: "Iqran khan", title: "Software Engineer", image: "/ikr.png" },
  { name: "Ahsan Samad", title: "Graphic Designer", image: "/ahsan.png" },
  { name: "Qasid Ali", title: "Software Engineer", image: "/qasid.png" },
  { name: "Usman Anjum", title: "Software Engineer", image: "/usman.png" },
  { name: "Shahzaib Hassan", title: "Graphic Designer", image: "/shahzaib hassan.png" },
  { name: "Fahad Ali", title: "Graphic Designer", image: "/f2.png" },
  { name: "Rabia Kousar", title: "Graphic Designer", image: "/gir.png" },
  { name: "Ayesha Siddiqa", title: "Graphic Designer", image: "/gir.png" },
  { name: "Ambreen Siddique", title: "Graphic Designer", image: "/gir.png" },
  { name: "Iram Farooq Ali", title: "Graphic Designer", image: "/gir.png" },
  { name: "Fahad Ali", title: "Graphic Designer", image: "/fahad.png" },
  { name: "Haris Majeed", title: "Graphic Designer", image: "/haris.png" },
  { name: "Hamid Ali", title: "Software Engineer", image: "/hamid.png" },
  { name: "Faizan Ali", title: "Senior Frontend Developer", image: "/faiz.png" },
  { name: "Waleed Butt", title: "Senior Graphic Designer", image: "/walid.png" },
];

const SuccessStory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        handleNext();
      }, 2000);  // 1-second interval
      return () => clearInterval(interval);
    }
  }, [autoScroll]);

  const displayedStories = [
    successStories[(currentIndex - 1 + successStories.length) % successStories.length],
    successStories[currentIndex],
    successStories[(currentIndex + 1) % successStories.length]
  ];

  const handlePrev = () => {
    setAutoScroll(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + successStories.length) % successStories.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
  };

  return (
    <div className="p-6 bg-[#002b5e] text-white min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-8 text-center text-gradient">Success Stories</h2>
      <p className="text-lg mb-6">Meet our legends who secured their future</p>
      
      <div className="flex items-center justify-center gap-4 mb-6">
        <button onClick={handlePrev} className="text-3xl text-white hover:text-gray-400 transition-colors duration-300">
          <i className={`bx bxs-chevron-left-circle text-4xl cursor-pointer `}></i>
        </button>
        <button onClick={handleNext} className="text-3xl text-white hover:text-gray-400 transition-colors duration-300">
          <i className={`bx bxs-chevron-right-circle text-4xl ml-4 cursor-pointer `}></i>
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-full snap-x snap-mandatory scroll-smooth">
        {displayedStories.map((story, index) => {
          const isMiddle = index === 1; // Middle card in the three displayed
          return (
            <div
              key={index}
              className={`p-10 rounded-lg text-center transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl ${isMiddle ? 'scale-125 shadow-2xl' : 'scale-100'}`}
              style={{ scrollSnapAlign: "center" }}
            >
              <div className="relative w-40 h-40 mx-auto mb-8">
                <img
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                  src={story.image}
                  alt={story.name}
                />
              </div>
              <h3 className="text-lg font-bold mb-3">{story.name}</h3>
              <p className="text-md text-gray-300">{story.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuccessStory;
