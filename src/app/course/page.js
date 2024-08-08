import React from 'react'
import { Header, TopNavbar } from '../../../components'
import Link from 'next/link'

const page = () => {
    return (
        <div className='bg-[#05184e] text-white'>
            <Header />
            <div className="relative bg-cover bg-center md:bg-top h-[40vh] md:h-[20vh]" style={{ backgroundImage: `url('/h.jpg')` }}>
                <div className="bg-[#132148] text-white absolute md:bottom-0 bottom-[-2px] w-full py-6  ">
                    <div className="max-w-4xl mx-auto flex  justify-center md:justify-between items-center">
                        <div>
                            <h1 className="font-bold text-2xl md:text-left text-center">
                            Course Boxes
                            </h1>
                            <i>
                                <p className="md:text-left text-center">
                                Welcome to the our shortcode elements page
                                </p>
                            </i>
                        </div>

                        <i className="md:flex hidden ">
                            <Link href="/" className="hover:text-blue-400">
                                Home
                            </Link>
                            /
                            <Link href="/course" className="hover:text-blue-400  font-bold">
                                Course
                            </Link>
                        </i>
                    </div>
                </div>

            </div>
            
                <div className=" md:mt-5">
                
                    <div className="card-inner  p-4  shadow-lg ">
                        <i><h1 className='text-center font-bold text-2xl '>Course Introduction</h1>
                        </i>
                        <div className="flex flex-col md:flex-row gap-x-4 md:my-10 my-2 md:max-w-[80%] w-[90%] mx-auto overflow-hidden">
                            <div className="relative w-full border-collapse border-2 py-1 md:w-1/2 h-64">
                                <video
                                    controls
                                    className="w-full h-full "
                                    poster="https://0.s3.envato.com/h264-video-previews/ec34ad1d-cba5-43a6-a1d0-a537b10e5879/759078.mp4"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                >
                                    <source src="https://0.s3.envato.com/h264-video-previews/ec34ad1d-cba5-43a6-a1d0-a537b10e5879/759078.mp4" />
                                </video>
                            </div>
                            <div className="flex-1 md:mt-0 mt-4">
                                <p className="text-sm uppercase font-semibold mb-2">Create Your Own Online Course</p>
                                <h2 className="text-xl font-bold mb-1">Course Introduction</h2>
                                <p className="mb-2">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised believable. Suffered alteration in some form, by injected humour, or randomised.
                                </p>
                                <div className="flex items-center mb-1">
                                    <img
                                        className="w-10 h-10 rounded-full mr-3"
                                        src="/Sha.png"
                                        alt="Author"
                                    />
                                    <div className="text-sm">
                                        <p className="leading-none">Sir Hassam</p>
                                        <p className="">2 Months</p>
                                    </div>
                                </div>
                                <button className="md:w-auto w-full border duration-1000 hover:bg-[#3d9b05] text-white py-2 px-4 mt-2  ">
                                    Start Here
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            



            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Course 1 */}
                    <div className="bg-[#132148] text-white rounded-lg shadow-md p-6">
                        <img
                            src="https://picsum.photos/300/200"
                            alt="Course Image"
                            className="w-full mb-4 rounded-md"
                        />
                        <h2 className="text-xl font-bold mb-2">Getting Starting Bootstrap Framework</h2>
                        <p className=" text-sm mb-4">
                            Learn the basics of Bootstrap and how to create responsive websites.
                        </p>
                        <div className="flex items-center">
                            <span className="text-lg font-bold">$100.00</span>
                            <div className="ml-auto">
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                            </div>
                        </div>
                    </div>

                    {/* Course 2 */}
                    <div className="bg-[#132148] text-white rounded-lg shadow-md p-6">
                        <img
                            src="https://picsum.photos/300/200"
                            alt="Course Image"
                            className="w-full mb-4 rounded-md"
                        />
                        <h2 className="text-xl font-bold mb-2">Learning Professional Graphic Design</h2>
                        <p className=" text-sm mb-4">
                            Master the art of graphic design and create stunning visuals.
                        </p>
                        <div className="flex items-center">
                            <span className="text-lg font-bold">$100.00</span>
                            <div className="ml-auto">
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                            </div>
                        </div>
                    </div>

                    {/* Course 3 */}
                    <div className="bg-[#132148] text-white rounded-lg shadow-md p-6">
                        <img
                            src="https://picsum.photos/300/200"
                            alt="Course Image"
                            className="w-full mb-4 rounded-md"
                        />
                        <h2 className="text-xl font-bold mb-2">Material Color Palette From Google</h2>
                        <p className=" text-sm mb-4">
                            Learn about Google's Material Design system and how to use its color palette.
                        </p>
                        <div className="flex items-center">
                            <span className="text-lg font-bold">$100.00</span>
                            <div className="ml-auto">
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
            <TopNavbar />
        </div>
    )
}

export default page
