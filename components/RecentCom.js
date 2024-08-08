// 'use client'
// import { useEffect, useRef, useState } from "react";

// const courses = [
//   {
//     title: "Getting Starting With Graphic Designing",
//     instructor: "Sir Hassam",
//     duration: "2 Month",
//     students: 12,
//     price: 100.00,
//     rating: 5,
//     image: "/gra.jpg",
//     featured: true
//   },
//   {
//     title: "Learning WordPress Content Management System",
//     instructor: "Sir Hassam",
//     duration: "1 Month",
//     students: 63,
//     price: 55.00,
//     rating: 5,
//     image: "/di.jpg",
//     featured: false
//   },
//   {
//     title: "How To Write A 10-Finger Keyboard With Laptop",
//     instructor: "Sir Hassam",
//     duration: "3 Month",
//     students: 66,
//     price: 57.00,
//     rating: 5,
//     image: "/basic.jpg",
//     featured: false
//   },
//   {
//     title: "How To Create a Website ",
//     instructor: "Sir Hassam",
//     duration: "3 Month",
//     students: 66,
//     price: 57.00,
//     rating: 5,
//     image: "/web.jpg",
//     featured: false
//   },
//   {
//     title: "How To Create a Website ",
//     instructor: "Sir Hassam",
//     duration: "3 Month",
//     students: 66,
//     price: 57.00,
//     rating: 5,
//     image: "/web.jpg",
//     featured: false
//   },

// ];

// const RecentCom = ({ title }) => {
//   const scrollRef = useRef(null);
//   const [isScrollableLeft, setIsScrollableLeft] = useState(false);
//   const [isScrollableRight, setIsScrollableRight] = useState(true);

//   useEffect(() => {
//     // Check scroll position on mount and update scrollable states
//     handleScroll();

//     // Set up auto-scroll
//     const autoScroll = setInterval(() => {
//       if (scrollRef.current) {
//         scrollRight();
//       }
//     }, 3000); // Adjust the interval as needed

//     // Clean up on component unmount
//     return () => clearInterval(autoScroll);
//   }, []);

//   const handleScroll = () => {
//     if (scrollRef.current) {
//       setIsScrollableLeft(scrollRef.current.scrollLeft > 0);
//       setIsScrollableRight(
//         scrollRef.current.scrollLeft < (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
//       );
//     }
//   };

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       const newPosition = scrollRef.current.scrollLeft - 200;
//       scrollRef.current.scrollLeft = Math.max(newPosition, 0);
//       handleScroll();
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       const newPosition = scrollRef.current.scrollLeft + 200;
//       const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
//       scrollRef.current.scrollLeft = Math.min(newPosition, maxScrollLeft);
//       handleScroll();
//     }
//   };

//   return (
//     <div className="p-4 bg-[#05184e] text-white border-black border-y-[10px]">
//       <div className="flex items-center justify-between mx-5">
//         <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Recent {title}</h2>
//         <div className="flex items-center">
//           <i className={`bx bxs-chevron-left-circle text-4xl cursor-pointer ${isScrollableLeft ? 'text-blue-500' : 'text-gray-300'}`} onClick={scrollLeft}></i>
//           <i className={`bx bxs-chevron-right-circle text-4xl ml-4 cursor-pointer ${isScrollableRight ? 'text-blue-500' : 'text-gray-300'}`} onClick={scrollRight}></i>
//         </div>
//       </div>

//       <div className={`overflow-x-auto scroll-smooth md:scrollbar-hidden`} onScroll={handleScroll} ref={scrollRef} style={{
//         overflowY: 'scroll',
//         WebkitOverflowScrolling: 'touch',
//         scrollbarWidth: 'none',
//         msOverflowStyle: 'none',
//         WebkitScrollbarDisplay: 'none',
//       }}>
//         <div className="flex flex-nowrap">
//           {courses.map((course, index) => (
//             <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex-shrink-0">
//               <div className="border border-gray-400 bg-[#132148] text-white rounded-lg p-4 flex flex-col justify-between leading-normal shadow-md h-full">
//                 <div className="mb-8 relative flex-grow">
//                   <img className="w-full h-48 rounded-md object-cover" src={course.image} alt="Course" />
//                   {course.featured && (
//                     <div className="absolute top-0 left-0 bg-[#1b2d5e] text-white p-2 rounded-tr-md rounded-bl-md">Featured</div>
//                   )}
//                   <div className="font-bold text-xl mb-2">{course.title}</div>
//                   <p className="text-base">${course.price.toFixed(2)}</p>
//                   <div className="mt-2 flex items-center">
//                     {[...Array(course.rating)].map((_, i) => (
//                       <i key={i} className='bx bxs-star text-yellow-500'></i>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <img className="w-10 h-10 rounded-full mr-4" src="/Sha.png" alt="Instructor" />
//                   <div className="text-sm">
//                     <p className="leading-none">{course.instructor}</p>
//                     <p>{course.duration} | {course.students} students</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="mt-4 flex justify-center">
//         <a href='/course'>
//           <button className="bg-[#05184e] hover:bg-[#3d9b05] text-white font-bold py-2 px-4 rounded duration-1000">
//             View All {title}
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default RecentCom;


'use client'
import { useEffect, useRef, useState } from "react";

const courses = [
  {
    title: "Getting Starting With Graphic Designing",
    instructor: "Sir Hassam",
    duration: "2 Month",
    students: 12,
    price: 100.00,
    rating: 5,
    image: "/gra.jpg",
    featured: true
  },
  {
    title: "Learning WordPress Content Management System",
    instructor: "Sir Hassam",
    duration: "1 Month",
    students: 63,
    price: 55.00,
    rating: 5,
    image: "/di.jpg",
    featured: false
  },
  {
    title: "How To Write A 10-Finger Keyboard With Laptop",
    instructor: "Sir Hassam",
    duration: "3 Month",
    students: 66,
    price: 57.00,
    rating: 5,
    image: "/basic.jpg",
    featured: false
  },
  {
    title: "How To Create a Website ",
    instructor: "Sir Hassam",
    duration: "3 Month",
    students: 66,
    price: 57.00,
    rating: 5,
    image: "/web.jpg",
    featured: false
  },
  {
    title: "How To Create a Website ",
    instructor: "Sir Hassam",
    duration: "3 Month",
    students: 66,
    price: 57.00,
    rating: 5,
    image: "/web.jpg",
    featured: false
  },

];

const RecentCom = ({ title }) => {
  const scrollRef = useRef(null);
  const [isScrollableLeft, setIsScrollableLeft] = useState(false);
  const [isScrollableRight, setIsScrollableRight] = useState(true);

  useEffect(() => {
    // Check scroll position on mount and update scrollable states
    handleScroll();

    // Set up auto-scroll
    const autoScroll = setInterval(() => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
          // Reset to the start for infinite scroll effect
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRight();
        }
      }
    }, 3000); // Adjust the interval as needed

    // Clean up on component unmount
    return () => clearInterval(autoScroll);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      setIsScrollableLeft(scrollRef.current.scrollLeft > 0);
      setIsScrollableRight(
        scrollRef.current.scrollLeft < (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)
      );
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newPosition = scrollRef.current.scrollLeft - 200;
      scrollRef.current.scrollLeft = Math.max(newPosition, 0);
      handleScroll();
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const newPosition = scrollRef.current.scrollLeft + 200;
      const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = Math.min(newPosition, maxScrollLeft);
      handleScroll();
    }
  };

  return (
    <div className="p-4 bg-[#05184e] text-white border-black border-y-[10px]">
      <div className="flex items-center justify-between mx-5">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Recent {title}</h2>
        <div className="flex items-center">
          <i className={`bx bxs-chevron-left-circle text-4xl cursor-pointer ${isScrollableLeft ? 'text-blue-500' : 'text-gray-300'}`} onClick={scrollLeft}></i>
          <i className={`bx bxs-chevron-right-circle text-4xl ml-4 cursor-pointer ${isScrollableRight ? 'text-blue-500' : 'text-gray-300'}`} onClick={scrollRight}></i>
        </div>
      </div>

      <div className="overflow-x-auto scroll-smooth md:scrollbar-hidden" onScroll={handleScroll} ref={scrollRef} style={{
        overflowY: 'scroll',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitScrollbarDisplay: 'none',
      }}>
        <div className="flex flex-nowrap">
  {courses.map((course, index) => (
    <div 
      key={index} 
      className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex-shrink-0 transition-transform duration-300 ease-in-out"
      style={{
        opacity: '1', // Default opacity
        transform: 'scale(1)', // Default scale
        transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        // Decrease opacity of other cards
        Array.from(e.currentTarget.parentNode.children).forEach(sibling => {
          if (sibling !== e.currentTarget) {
            sibling.style.opacity = '0.5';
          }
        });
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        // Reset opacity of other cards
        Array.from(e.currentTarget.parentNode.children).forEach(sibling => {
          sibling.style.opacity = '1';
        });
      }}
    >
      <div className="group relative border border-gray-400 bg-[#132148] text-white rounded-lg p-4 flex flex-col justify-between leading-normal shadow-md h-full">
        <div className="mb-8 relative flex-grow">
          <img className="w-full h-48 rounded-md object-cover" src={course.image} alt="Course" />
          {course.featured && (
            <div className="absolute top-0 left-0 bg-[#1b2d5e] text-white p-2 rounded-tr-md rounded-bl-md">Featured</div>
          )}
          <div className="font-bold text-xl mb-2">{course.title}</div>
          <p className="text-base">${course.price.toFixed(2)}</p>
          <div className="mt-2 flex items-center">
            {[...Array(course.rating)].map((_, i) => (
              <i key={i} className='bx bxs-star text-yellow-500'></i>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="/Sha.png" alt="Instructor" />
          <div className="text-sm">
            <p className="leading-none">{course.instructor}</p>
            <p>{course.duration} | {course.students} students</p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>

      <div className="mt-4 flex justify-center">
        <a href='/course'>
          <button className="bg-[#05184e] hover:bg-[#3d9b05] text-white font-bold py-2 px-4 rounded duration-1000">
            View All {title}
          </button>
        </a>
      </div>
    </div>
  );
};

export default RecentCom;
