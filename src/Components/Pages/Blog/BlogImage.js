import React from 'react'

const BlogImage = ({ imageUrl, heading, paragraph, buttonText }) => {
  return (
    <>

<div className="mb-8">
            <div className="text-center">
                <img src={imageUrl} alt="Your Image" className="mx-auto w-full  max-h-80 shadow-lg" />
            </div>
            <h1 className="text-3xl font-bold hover:text-[#c32232] duration-300 cursor-pointer mt-8">{heading}</h1>
            <p className="text-gray-700 mt-4">{paragraph}</p>
            <div className="flex justify-start mt-8">
             <button className="font-semibold border hover:border-transparent rounded text-black bg-gray-200 hover:bg-[#ffba00] duration-500 hover:text-white px-8 py-2.5">{buttonText}</button>

            </div>
        </div>
      
    </>
  )
}

export default BlogImage
