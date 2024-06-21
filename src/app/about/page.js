import React from 'react'
import { Header, Hero, TopNavbar } from '../../../components'
import Link from 'next/link'

const page = () => {
    return (
        <div>
            <Header />
            {/* <Hero /> */}
            <div className="relative bg-cover bg-center md:bg-top h-[40vh] md:h-[20vh]" style={{ backgroundImage: `url('/h.jpg')` }}>
                <div className="bg-[#f4f4f7] absolute md:bottom-0 bottom-[-2px] w-full py-6  ">
                    <div className="max-w-4xl mx-auto flex  justify-center md:justify-between items-center">
                        <div>
                            <h1 className="font-bold text-2xl md:text-left text-center">
                                About
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
                            <Link href="/about" className="hover:text-blue-400  font-bold">
                                About
                            </Link>
                        </i>
                    </div>
                </div>

            </div>
            {/* <div className="bg-white">
                <div className="container mx-auto py-12">
                    <h1 className="text-4xl font-bold text-center mb-4">
                        WE ARE TEACHME
                    </h1>
                    <i>

                        <p className="text-lg text-gray-600 text-center mb-8">
                            We build awesome course & university sites! Don't miss out join us
                            today!
                        </p>
                    </i>
                    <div className="grid grid-cols-1 md:grid-cols-4 max-w-6xl mx-10 gap-6">
                        <div class="bg-gray-800 text-white  p-6 shadow-md">
                            <h2 class="text-2xl font-bold text-center ">Welcome to Teachme</h2>
                            <p class="text-lg text-center mb-6">Professional responsive and retina ready template for online learning websites!</p>
                            <button class="bg-blue-500  mx-10 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">Read More</button>
                        </div>
                        <div class="container mx-auto py-12">
                            <div class="flex flex-col items-center">
                                <img src="/Sha.png" alt="Image of a group of people working" class="w-96 rounded-lg shadow-md mb-6" />
                                <h2 class="text-3xl font-bold text-gray-800 mb-4">What We Do</h2>
                                <p class="text-lg text-gray-600 text-center">We build beautiful responsive course listing pages, search forms and singular learning systems.</p>
                            </div>
                        </div>
                        <div className="  p-6">
                            <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
                            <p className="text-gray-600 mb-4">
                                With our professional course pages, you can earn money from your
                                online courses. Join us today!
                            </p>
                        </div>
                        <div className="  p-6">
                            <h2 className="text-2xl font-bold mb-2">Our Terms</h2>
                            <p className="text-gray-600 mb-4">
                                Create and share outstanding quiz's, ask questions and get answer
                                from your awesome clients!
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="bg-white">
                <div className="container mx-auto py-12">
                    <h1 className="text-4xl font-bold text-center mb-4">
                        WE ARE TEACHME
                    </h1>
                    <i>
                        <p className="text-lg text-gray-600 text-center mb-8">
                            We build awesome course & university sites! Don't miss out join us
                            today!
                        </p>
                    </i>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-6">
                        <div className="bg-gray-800 text-white p-6 shadow-md">
                            <img src="/w.jpg" alt="Image of a group of people working" className="w-full lg:w-96 rounded-lg shadow-md mb-6" />
                            <h2 className="text-2xl font-bold text-center">Welcome to Teachme</h2>
                            <p className="text-lg text-center mb-6">
                                Professional responsive and retina ready template for online learning websites!
                            </p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mx-auto block">
                                Read More
                            </button>
                        </div>
                        <div className="bg-white p-6 shadow-md">
                            <div className="flex flex-col items-center">
                                <img src="/we.jpg" alt="Image of a group of people working" className="w-full lg:w-96 rounded-lg shadow-md mb-6" />
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Do</h2>
                                <p className="text-lg text-gray-600 text-center">
                                    We build beautiful responsive course listing pages, search forms, and singular learning systems.
                                </p>
                            </div>
                        </div>
                        <div className=" p-6 shadow-md">
                            <div className="flex flex-col items-center">
                                <img src="/Sha.png" alt="Image of a group of people working" className="w-full lg:w-96 rounded-lg shadow-md mb-6" />
                                <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
                                <p className="text-gray-600 mb-4">
                                    With our professional course pages, you can earn money from your
                                    online courses. Join us today!
                                </p>
                            </div>
                        </div>
                        <div className=" p-6 shadow-md">
                            <img src="/t.jpg" alt="Image of a group of people working" className="w-full lg:w-96  rounded-lg shadow-md mb-6" />

                            <div className="flex flex-col items-center">
                                <h2 className="text-2xl font-bold mb-2">Our Terms</h2>
                                <p className="text-gray-600 mb-4">
                                    Create and share outstanding quizzes, ask questions, and get answers
                                    from your awesome clients!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 bg-gray-800 py-16">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
                    <div className="md:w-1/2">
                        <img
                            src="/ab1.jpeg"
                            alt="Professional Course Builder"
                            className="w-full rounded-lg shadow-md"
                        />
                    </div>
                    <div className="md:w-1/2 text-white ">
                        <h2 className="text-xl  text-center font-bold  mb-4">
                            Learn Anything From Anywhere
                        </h2>
                        <h1 className="text-2xl font-bold  mb-4">
                            Professional Course Builder
                        </h1>
                        <p className="text-lg md:text-left text-center mb-2 md:mb-6">
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised believable. Sufferede foshumour, or
                            randomised..
                        </p>
                        <p className="text-lg md:text-left text-center mb-2 md:mb-6">
                            But the majority have suffered alteration in some form, by injected
                            humour, or randomised believable. Suffered alteration in some form, by
                            injected humour, or randomised..
                        </p>
                        <button className="bg-blue-500 md:w-32 w-full hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline">
                            Start Here
                        </button>
                    </div>

                </div>
            </div>

            < div className="container mx-auto py-16">
                <h2 className="text-3xl font-bold text-center mb-8">OUR TEAM</h2>
                <i>

                    <p className="text-center  mb-12">We build awesome course & university sites! Don't miss out join us today!</p>
                </i>
                <div className='border-b border-blue-500 mx-auto mb-2 mt-[-30px] max-w-4xl'></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <img src="/hu.png" alt="John Doe" className="w-full rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Husnain</h3>
                        <p className="text-gray-600 mb-2">Web Designer</p>
                        <p className="text-gray-600">Lorem ipsum m dolor sit amet, consectetur adipiing elit.dolor sit amet, consectetur adipiing elit.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <img src="/aj.png" alt="Jenny Sendins" className="w-full rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Aj King</h3>
                        <p className="text-gray-600 mb-2">Graphic Designer</p>
                        <p className="text-gray-600">Consectetur adipiing elit.dolor sit amet, consectetur adipiing lorem ipsum m dolor sit amet elit.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <img src="/Sha.png" alt="Rick Bobsen" className="w-full rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Sir Hassam</h3>
                        <p className="text-gray-600 mb-2">Graphic Designer</p>
                        <p className="text-gray-600">Adipiing consectetur adipiing elit.dolor sit amet, consectetur lorem ipsum m dolor sit amet elit.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <img src="/kam.png" alt="Andy Robinson" className="w-full rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-2">Kamran Sharif</h3>
                        <p className="text-gray-600 mb-2">Fashion Designer</p>
                        <p className="text-gray-600">Dolor consectetur adipiing elit.dolor sit amet, consectetur adipiing lorem ipsum m sit amet elit.</p>
                    </div>
                </div>
            </div>

            <div className="rounded-lg max-w-4xl mt-4 mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Contact Details
                </h2>
                <p className="text-center mb-6">
                    For your pre-sale questions, please use the form below.
                </p>
                <div></div>

            </div>
            <div className="flex justify-center">

                <div className="flex md:flex-nowrap justify-start  flex-wrap gap-x-10 mx-10 mb-8">
                    <div class="w-full md:w-1/2 lg:w-1/3 p-2 md:pt-7 mb-2 md:mb-10">
                        <p class="mb-6">
                            If you need help before, during or after your purchase, this is
                            the place to be. Please use below contact details for all your
                            pre-sale questions, contact questions.
                        </p>
                        <hr />
                        <p class="mb-2 flex items-center">
                            <i class="bx bx-link mr-2 text-blue-500"></i>
                            <Link
                                href="http://www.yoursite.com"
                                class="text-blue-500 hover:underline"
                            >
                                www.yoursite.com
                            </Link>
                        </p>
                        <p class="mb-2 flex items-center">
                            <i class="bx bx-envelope mr-2 text-blue-500"></i>
                            <Link
                                href="mailto:info@yoursite.com"
                                class="text-blue-500 hover:underline"
                            >
                                info@yoursite.com
                            </Link>
                        </p>
                        <p class="mb-2 flex items-center">
                            <i class="bx bx-phone mr-2 text-blue-500"></i> +90 123 45 67
                        </p>
                        <p class="mb-2 flex items-center">
                            <i class="bx bx-fax mr-2 text-blue-500"></i> +90 123 45 68
                        </p>
                        <p class="mb-2 flex items-center">
                            <i class="bx bxs-map mr-2 text-blue-500"></i> Envato INC 22
                            Elizabeth St.
                        </p>
                        <hr className="mb-4" />
                        <div class="flex space-x-3 mt-4">
                            <Link
                                href="https://www.facebook.com"
                                class="hover:bg-blue-600 hover:text-white p-2 rounded"
                            >
                                <i class="bx bxl-facebook md:text-xl text-lg"></i>
                            </Link>
                            <Link
                                href="https://plus.google.com"
                                class="hover:bg-red-600 hover:text-white p-2 rounded"
                            >
                                <i class="bx bxl-google-plus md:text-xl text-lg"></i>
                            </Link>
                            <Link
                                href="https://twitter.com"
                                class="hover:bg-blue-400 hover:text-white p-2 rounded"
                            >
                                <i class="bx bxl-twitter md:text-xl text-lg"></i>
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                class="hover:bg-blue-700 hover:text-white p-2 rounded"
                            >
                                <i class="bx bxl-linkedin md:text-xl text-lg"></i>
                            </Link>
                            <Link
                                href="https://pinterest.com"
                                class="hover:bg-red-600 hover:text-white p-2 rounded"
                            >
                                <i class="bx bxl-pinterest md:text-xl text-lg"></i>
                            </Link>
                            <Link
                                href="https://skype.com"
                                class="hover:bg-blue-400 hover:text-white p-2 rounded"
                            >
                                <i class="bx bxl-skype md:text-xl text-lg"></i>
                            </Link>
                            <Link
                                href="https://vimeo.com"
                                class="hover:bg-blue-500 hover:text-white p-2 rounded"
                            >
                                <i class="bx bxl-vimeo md:text-xl text-lg"></i>
                            </Link>
                            <Link
                                href="https://youtube.com"
                                class="hover:bg-red-600 hover:text-white p-2 rounded"
                            >
                                <i class="bx bxl-youtube md:text-xl text-lg"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-2/3 p-2">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-3 rounded border border-gray-300"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-3 rounded border border-gray-300"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="w-full p-3 rounded border border-gray-300"
                                    placeholder="Your Phone Number"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full p-3 rounded border border-gray-300"
                                    placeholder="Subject"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="w-full p-3 rounded border border-gray-300"
                                    placeholder="Message Below"
                                    defaultValue={""}
                                />
                            </div>
                            <div className="text-center md:text-right">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-6 py-3 w-full md:w-auto  rounded"
                                >
                                    Send Form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <TopNavbar />

        </div>
    )
}

export default page
