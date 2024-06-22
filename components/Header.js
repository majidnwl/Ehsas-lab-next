'use client'
import React, { useState } from 'react'
import TopNavbar from './TopNavbar'
import Link from 'next/link'


const Header = () => {
  const [toogle, setToogle] = useState(false)

  return (
    <div>
      <header>

        <TopNavbar />
        <div>
          <div className="text-white bg-black flex justify-between  gap-x-3 p-5">
            <div className="h-[49px] flex justify-center gap-x-10 items-center">
              <div className=" relative px-2 flex items-center ">
               <Link href="/">
                   <img className="h-[47px]" src="/eg.png" alt="" />
                <h1 className="font-bold">Ehsas Lab</h1>
    </Link> 
                {toogle ?
                 

                    <ul className="flex-col gap-y-6 z-50 border-t-2 border-gray-400 px-11  absolute top-[63px] w-[250px] left-[-1.5rem] bg-black items-center md:hidden  md:font-bold">
                      <Link href=""><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Home</li></Link>
                      <Link href="/about"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">About</li></Link>
                      <Link href="/course"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Course</li></Link>
                      <Link href="/blog"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Blog</li></Link>
                      <Link href="/forums"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Forums</li></Link>
                      <Link href="/contact"><li className="hover:border-b-2 hover:border-gray-600 hover:bg-green-600">Contact</li></Link>
                    </ul> : ''

                }
              </div>

             

                <ul className="md:flex z-auto md:items-center hidden md:gap-x-10 md:font-bold">
                  <Link href="/"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Home</li></Link>
                  <Link href="/about"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">About</li></Link>
                  <Link href="/course"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Course</li></Link>
                  <Link href="/blog"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Blog</li></Link>
                  <Link href="/forums"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Forums</li></Link>
                  <Link href="/contact"><li className="cursor-pointer active:text-blue-400 hover:border-b-2">Contact</li></Link>
                </ul>
              
            </div>


            <div className="md:flex md:items-center md:gap-x-4 hidden">
              <i className='bx bxs-shopping-bag text-xl' ></i>
              <i className='bx bx-search text-xl' ></i>
              <button className='bg-blue-600 hover:bg-green-500 rounded-full px-2 flex gap-x-2'><Link href='/login'>Login</Link>/<Link href='/register'>Sing-up</Link></button>
            </div>
            <div  className="md:hidden flex gap-x-2 group items-center ">
            <button className='bg-blue-600 hover:bg-green-500  px-2 flex gap-x-2'><Link href='/login'>Login</Link>/<Link href='/register'>Sing-up</Link></button> 
              <i onClick={() => setToogle(!toogle)} class='bx bx-menu bg-gray-500 text-4xl' ></i>



            </div>
          </div>

        </div>

      </header>
    </div>
  )
}

export default Header
