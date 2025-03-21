import React from 'react'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="-my-7">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                404 Page Not Found
              </h1>
              <p className="my-2 text-gray-800">
                {"We couldn't find the page you were looking for."}
              </p>
              <button
                type="button"
                className="sm:w-full lg:w-auto my-2 border rounded-full py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
              >
                Go to homepage
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-20">
        <Image
          src="https://i.ibb.co/ck1SGFJ/Group.png"
          alt="item"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
