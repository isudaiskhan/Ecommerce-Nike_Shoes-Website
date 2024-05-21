import React,{useState} from 'react'
import Navbar from '../../Navbar/Navbar'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/banner.jpeg'
import { FaTimes } from 'react-icons/fa';
import Footer from '../../Footer/Footer';
import ScrollButton from '../../ScrollButton/ScrollButton';


const Confirmation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>

    <Navbar />


    <div className="relative">
      <div className="relative h-96 flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 h-96 bg-no-repeat bg-cover bg-center bg-blend-multiply bg-[#00000034]" style={{ backgroundImage: `url(${bgimage})` }}>

         <motion.div
               initial={{x:-100,opacity:0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
                duration:1}}
           className="flex flex-col items-center pt-10 sm:ps-16 sm:px-0 px-5 h-full">
             <h1 className="sm:text-5xl text-4xl font-bold text-white mt-28">Confirmation page</h1>
             <div className="flex flex-wrap items-center mt-6">
             <h2 className="text-white mr-4">Home</h2>
             <RxSlash className="text-white mr-4" />

             <h2 className="text-white mr-4">Shop</h2>
             <RxSlash className="text-white mr-4" />

            
               <h2 className="text-white mr-4">Confirmation</h2>

                  </div>
                  </motion.div>
                </div>
             </div>




<div className='max-w-[1240px] mx-auto sm:ps-6 sm:pe-6 mt-32 ps-3 pe-3'>
<div>
{isOpen && (
        <div id="alert-border-3" className="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
          <div className="ms-3 text-lg font-medium">
          Thank you. Your order has been received .
          </div>
          <button type="button" onClick={handleClose} className="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" aria-label="Close">
            <span className="sr-only">Dismiss</span>
            <FaTimes className="w-4 h-4" />
          </button>
        </div>
      )}

</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-28">
  {/* Order Info */}
  <div className="w-full mx-auto px-4">
  <h4 className="text-lg font-semibold mb-2 border-b py-2">Order Info</h4>
  <ul>
    <li className="mb-2 flex justify-between">
      <div className="w-1/2 text-gray-700">Order number</div>
      <div className="w-1/2 text-start">: 60235</div>
    </li>
    <li className="mb-2 flex justify-between">
      <div className="w-1/2 text-gray-700">Date</div>
      <div className="w-1/2 text-start">: Los Angeles</div>
    </li>
    <li className="mb-2 flex justify-between">
      <div className="w-1/2 text-gray-700">Total</div>
      <div className="w-1/2 text-start">: USD 2210</div>
    </li>
    <li className="mb-2 flex justify-between">
      <div className="w-1/2 text-gray-700">Payment method</div>
      <div className="w-1/2 text-start">: Check payments</div>
    </li>
  </ul>
</div>

  {/* Billing Address */}
  <div className="w-full mx-auto px-4">
  <h4 className="text-lg font-semibold mb-2 border-b py-2">Billing Address</h4>
  <ul>
    <li className="mb-2 flex justify-between">
      <div className="w-1/2 text-gray-700">Street</div>
      <div className="w-1/2 text-start">: 56/8</div>
    </li>
    <li className="mb-2 flex justify-between">
      <div className="w-1/2 text-gray-700">City</div>
      <div className="w-1/2 text-start">: Los Angeles</div>
    </li>
    <li className="mb-2 flex justify-between">
      <div className="w-1/2 text-gray-700">Country</div>
      <div className="w-1/2 text-start">: United States</div>
    </li>
    <li className="mb-2 flex justify-between">
      <div className="w-1/2 text-gray-700">Postcode</div>
      <div className="w-1/2 text-start">: 36952</div>
    </li>
  </ul>
</div>
  {/* Shipping Address */}
  <div className="w-full mx-auto px-4">
  <h4 className="text-lg font-semibold mb-2 border-b py-2">Shipping Address</h4>
  <ul>
    <li className="mb-2 flex justify-between">
      <div className="w-1/2 text-gray-700">Total</div>
      <div className="w-1/2 text-start">: USD 2210</div>
    </li>
    <li className="mb-2 flex justify-between">
      <div className="w-1/2 text-gray-700">Payment method</div>
      <div className="w-1/2 text-start">: Check payments</div>
    </li>
    <li className="mb-2 flex justify-between">
      <div className="w-1/2 text-gray-700">Street</div>
      <div className="w-1/2 text-start">: 56/8</div>
    </li>
    <li className="mb-2 flex justify-between">
      <div className="w-1/2 text-gray-700">City</div>
      <div className="w-1/2 text-start">: Los Angeles</div>
    </li>
  </ul>
</div>
</div>




{/* Second div with order details */}
<div className='py-32'>
<div className="flex w-full p-4 bg-gray-200">
    <div className="w-full sm:px-10">
        <h2 className="text-lg font-semibold mb-4 border-b border-b-gray-300 py-4">Order Details</h2>
        
        <div className="mb-4">
            <div className="grid grid-cols-3 gap-4 py-3 border-b border-b-gray-300">
                <p className="text-gray-700">Product</p>
                <p className="text-center text-gray-700">Quantity</p>
                <p className="text-right text-gray-700">Total</p>
            </div>

            <div className="grid grid-cols-3 gap-4 py-3 border-b border-b-gray-300">
                <p className="text-gray-700">Pixelstore fresh Blackberry</p>
                <p className="text-center font-semibold">x 02</p>
                <p className="text-right text-gray-700">$720.00</p>
            </div>
            <div className="grid grid-cols-3 gap-4 py-3 border-b border-b-gray-300">
                <p className="text-gray-700">Pixelstore fresh Blackberry</p>
                <p className="text-center font-semibold">x 02</p>
                <p className="text-right text-gray-700">$720.00</p>
            </div>
            <div className="grid grid-cols-3 gap-4 py-3 border-b border-b-gray-300">
                <p className="text-gray-700">Pixelstore fresh Blackberry</p>
                <p className="text-center font-semibold">x 02</p>
                <p className="text-right text-gray-700">$720.00</p>
            </div>
        </div>

        <div className="flex justify-between border-b py-3 border-b-gray-300">
            <p className='font-semibold'>SUBTOTAL</p>
            <p className='text-gray-700'>$2160.00</p>
        </div>

        <div className="flex justify-between border-b py-3 border-b-gray-300">
            <p className='font-semibold'>SHIPPING</p>
            <p className='text-gray-700'>$Flat Rate: $50</p>
        </div>

        <div className="flex justify-between py-3">
            <p className='font-semibold'>TOTAL</p>
            <p>$2210.00</p>
        </div>
    </div>
</div>

</div>
</div>
</div>
      


<Footer />
<ScrollButton />


    </>
  )
}

export default Confirmation