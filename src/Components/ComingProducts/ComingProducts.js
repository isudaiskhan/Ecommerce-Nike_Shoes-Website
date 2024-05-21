import React from 'react'
import image1 from '../Assets/p1.jpg'
import image2 from '../Assets/p2.jpg'
import image3 from '../Assets/p3.jpg'
import image4 from '../Assets/p4.jpg'
import image5 from '../Assets/p5.jpg'
import image6 from '../Assets/p6.jpg'
import image7 from '../Assets/p7.jpg'
import image8 from '../Assets/p8.jpg'
import { LuRefreshCw } from "react-icons/lu";
import { SlCursorMove } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { TfiBag } from "react-icons/tfi";






const ComingProducts = () => {
  return (
    <>

    <div className='p-8 mt-16'>
    <div className="max-w-[1240px] mx-auto">

    

    <div className='text-center sm:w-1/2 mx-auto'>

        <h1 className='sm:text-5xl text-4xl font-semibold text-gray-800'>Available Products</h1>
        <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-8 gap-y-14 mt-20">


                {/* Product 1 */}
                <div className="relative bg-white overflow-hidden rounded-md shadow-md shadow-gray-300">
                    <img src={image1} alt="Product 1" className="w-full" />
                    <p className="py-4 px-4 text-gray-800 font-semibold">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS</p>        
                    <div className="px-4">
                    <div className="font-medium text-gray-800">
                       $ 150.00
                     <span className="line-through ml-4 text-gray-400">$ 210.00</span>
                          </div>
                        <div className="flex space-x-3 flex-wrap relative py-5">
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <TfiBag className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <FaRegHeart className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <LuRefreshCw className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <SlCursorMove className="text-white" />
                            </span>
                        </div>
                    </div>
                </div>




                {/* Product 2 */}
                <div className="relative bg-white overflow-hidden rounded-md shadow-md shadow-gray-300">
                    <img src={image2} alt="Product 1" className="w-full" />
                    <p className="py-4 px-4 text-gray-800 font-semibold">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS</p>        
                    <div className="px-4">
                    <div className="font-medium text-gray-800">
                       $ 150.00
                     <span className="line-through ml-4 text-gray-400">$ 210.00</span>
                          </div>
                        <div className="flex space-x-3 relative py-5 flex-wrap">
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <TfiBag className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <FaRegHeart className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <LuRefreshCw className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <SlCursorMove className="text-white" />
                            </span>
                        </div>
                    </div>
                </div>




               {/* Product 3 */}
               <div className="relative bg-white overflow-hidden rounded-md shadow-md shadow-gray-300">
                    <img src={image3} alt="Product 1" className="w-full" />
                    <p className="py-4 px-4 text-gray-800 font-semibold">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS</p>        
                    <div className="px-4">
                    <div className="font-medium text-gray-800">
                       $ 150.00
                     <span className="line-through ml-4 text-gray-400">$ 210.00</span>
                          </div>
                        <div className="flex flex-wrap space-x-3 relative py-5">
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <TfiBag className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <FaRegHeart className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <LuRefreshCw className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <SlCursorMove className="text-white" />
                            </span>
                        </div>
                    </div>
                </div>




                 {/* Product 4 */}
                 <div className="relative bg-white overflow-hidden rounded-md shadow-md shadow-gray-300">
                    <img src={image4} alt="Product 1" className="w-full" />
                    <p className="py-4 px-4 text-gray-800 font-semibold">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS</p>        
                    <div className="px-4">
                    <div className="font-medium text-gray-800">
                       $ 150.00
                     <span className="line-through ml-4 text-gray-400">$ 210.00</span>
                          </div>
                        <div className="flex flex-wrap space-x-3 relative py-5">
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <TfiBag className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <FaRegHeart className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <LuRefreshCw className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <SlCursorMove className="text-white" />
                            </span>
                        </div>
                    </div>
                </div>




                 {/* Product 5 */}
                 <div className="relative bg-white overflow-hidden rounded-md shadow-md shadow-gray-300">
                    <img src={image5} alt="Product 1" className="w-full" />
                    <p className="py-4 px-4 text-gray-800 font-semibold">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS</p>        
                    <div className="px-4">
                    <div className="font-medium text-gray-800">
                       $ 150.00
                     <span className="line-through ml-4 text-gray-400">$ 210.00</span>
                          </div>
                        <div className="flex flex-wrap space-x-3 relative py-5">
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <TfiBag className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <FaRegHeart className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <LuRefreshCw className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <SlCursorMove className="text-white" />
                            </span>
                        </div>
                    </div>
                </div>




                 {/* Product 6 */}
                 <div className="relative bg-white overflow-hidden rounded-md shadow-md shadow-gray-300">
                    <img src={image6} alt="Product 1" className="w-full" />
                    <p className="py-4 px-4 text-gray-800 font-semibold">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS</p>        
                    <div className="px-4">
                    <div className="font-medium text-gray-800">
                       $ 150.00
                     <span className="line-through ml-4 text-gray-400">$ 210.00</span>
                          </div>
                        <div className="flex flex-wrap space-x-3 relative py-5">
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <TfiBag className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <FaRegHeart className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <LuRefreshCw className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <SlCursorMove className="text-white" />
                            </span>
                        </div>
                    </div>
                </div>




                 {/* Product 7 */}
                 <div className="relative bg-white overflow-hidden rounded-md shadow-md shadow-gray-300">
                    <img src={image7} alt="Product 1" className="w-full" />
                    <p className="py-4 px-4 text-gray-800 font-semibold">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS</p>        
                    <div className="px-4">
                    <div className="font-medium text-gray-800">
                       $ 150.00
                     <span className="line-through ml-4 text-gray-400">$ 210.00</span>
                          </div>
                        <div className="flex flex-wrap space-x-3 relative py-5">
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <TfiBag className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <FaRegHeart className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <LuRefreshCw className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <SlCursorMove className="text-white" />
                            </span>
                        </div>
                    </div>
                </div>




                 {/* Product 8 */}
                 <div className="relative bg-white overflow-hidden rounded-md shadow-md shadow-gray-300">
                    <img src={image8} alt="Product 1" className="w-full" />
                    <p className="py-4 px-4 text-gray-800 font-semibold">ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS</p>        
                    <div className="px-4">
                    <div className="font-medium text-gray-800">
                       $ 150.00
                     <span className="line-through ml-4 text-gray-400">$ 210.00</span>
                          </div>
                        <div className="flex flex-wrap space-x-3 relative py-5">
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <TfiBag className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <FaRegHeart className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <LuRefreshCw className="text-white" />
                            </span>
                            <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <SlCursorMove className="text-white" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    </>
  )
}

export default ComingProducts
