import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="w-full bg-[url('/login-new.jpeg')]  h-screen flex justify-center items-center">
            <div className="w-full max-w-lg">
                <div className="leading-loose">
                    <form className="max-w-xl m-4 p-10 md:bg-transparent bg-white md:hover:bg-white rounded shadow-xl">
                        <p className="text-gray-800  text-center text-lg font-bold">Forgot Password</p>
                        <div className="mt-4">
                            <label className="block text-sm text-gray-600" htmlFor="username">Email</label>
                            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="username" name="username" type="email" required placeholder="example@gmail.com" aria-label="username" />
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Send Email</button>

                        </div>
                        <div className="mt-4 text-center">
                            <Link className="inline-block align-baseline font-bold text-sm  hover:text-blue-800" href="/login">
                                Back
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page
