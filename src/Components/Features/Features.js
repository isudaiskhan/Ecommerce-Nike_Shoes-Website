import React from 'react'
import { FiTruck } from "react-icons/fi";
import { TbRefresh } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa6";
import { GoDatabase } from "react-icons/go";



const Features = () => {
  return (
    <>

<div className='max-w-[1240px] mx-auto py-28 mt-14'>

<div className="flex flex-wrap justify-center shadow-lg shadow-gray-300">
   {/* Box 1 */}
  <div className="w-full sm:w-1/2 lg:w-1/4">
    <div className="bg-white rounded-lg border-r p-8">
      <div className="text-center">
      <FiTruck className="text-4xl mx-auto mb-4 text-gray-800 hover:text-[#ffba00] duration-300" />
        <h1 className="text-lg font-semibold text-gray-800 mb-2">Free Delivery</h1>
        <p className="text-gray-600">Free Shipping on all order.</p>
      </div>
    </div>
  </div>

   {/* Box 2 */}
  <div className="w-full sm:w-1/2 lg:w-1/4 ">
    <div className="bg-white rounded-lg border-r p-8">
      <div className="text-center">
      <TbRefresh className="text-4xl mx-auto mb-4 text-gray-800 hover:text-[#ffba00] duration-300" />

        <h1 className="text-lg font-semibold text-gray-800 mb-2">Return Policy</h1>
        <p className="text-gray-600">Free Shipping on all order.</p>
      </div>
    </div>
  </div>

   {/* Box 3 */}
  <div className="w-full sm:w-1/2 lg:w-1/4">
    <div className="bg-white rounded-lg border-r p-8">
      <div className="text-center">
      <FaHeadphones className="text-4xl mx-auto mb-4 text-gray-800 hover:text-[#ffba00] duration-300" />

        <h1 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h1>
        <p className="text-gray-600">Free Shipping on all order.</p>
      </div>
    </div>
  </div>

   {/* Box 4 */}
  <div className="w-full sm:w-1/2 lg:w-1/4">
    <div className="bg-white rounded-lg p-8">
      <div className="text-center">
      <GoDatabase className="text-4xl mx-auto mb-4 text-gray-800 hover:text-[#ffba00] duration-300" />

        <h1 className="text-lg font-semibold text-gray-800 mb-2">Secure Payment</h1>
        <p className="text-gray-600">Free Shipping on all order.</p>
      </div>
    </div>
  </div>
</div>
</div>
      
    </>
  )
}

export default Features
