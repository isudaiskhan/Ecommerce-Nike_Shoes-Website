import React from 'react'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/banner.jpeg'
import Navbar from '../../Navbar/Navbar';
import { FaAngleDown } from 'react-icons/fa'
import image1 from '../../Assets/paypal.jpg'
import Footer from '../../Footer/Footer';
import ScrollButton from '../../ScrollButton/ScrollButton';



const ProductsCheckout = () => {
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
             <h1 className="sm:text-5xl text-4xl font-bold text-white mt-28 text-center">Products Checkout page</h1>
             <div className="flex flex-wrap items-center justify-center mt-6">
             <h2 className="text-white mr-4">Home</h2>
             <RxSlash className="text-white mr-4" />

             <h2 className="text-white mr-4">Shop</h2>
             <RxSlash className="text-white mr-4" />

            
               <h2 className="text-white mr-4">Products Checkout</h2>

                  </div>
                  </motion.div>
                </div>
             </div>




             <div className="flex flex-col items-center max-w-[1240px] mx-auto mt-36">
             <div className='w-full px-5'>
    <p className="text-black mb-2 p-2 px-8 bg-gray-200">Returning Customer? <a href='#' className='text-red-600 underline'>Click here to login</a></p>
    </div>
    <div className='text-gray-500 w-full px-8 mt-2'>
      <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
    </div>
    <div className="w-full">
        <form className="bg-white px-8 pt-6 pb-8 mb-4">
            <div className="mb-4 md:flex items-center justify-start flex-row">
                <div className="md:w-2/6 w-full mr-2">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username or Email" />
                </div>
                <div className="md:w-2/6 w-full md:ml-6">
                   
                    <input className="shadow mt-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                </div>
            </div>
            <div className="sm:flex flex-row items-center justify-start mb-4">

            <div className="flex items-center justify-between">
            <button className="font-semibold duration-500 bg-[#ffba00] rounded text-white px-10 py-2">LOGIN</button>

            </div>



                <div className="flex items-center sm:mt-0 mt-3 sm:ml-6">
                    <input className="mr-3 leading-tight accent-[#828bb3]" type="checkbox" id="rememberMe" />
                    <label className="text-gray-700" htmlFor="rememberMe">
                        Remember me
                    </label>
                </div>

             
               
            </div>
            <a className="inline-block align-baseline font-semibold text-sm text-gray-700" href="#">
                    Lost your password?
                </a>
        </form>
    </div>
</div>


<div className="flex flex-col items-center max-w-[1240px] mx-auto mt-8">
             <div className='w-full px-5'>
    <p className="text-black mb-2 p-2 px-8 bg-gray-200">Have a coupon? <a href='#' className='text-red-600 underline'>Click here to enter your code</a></p>
    </div>
   
    <div className="w-full">
        <form className="bg-white px-8 pt-6 pb-8 mb-4">
            <div className="mb-4 flex items-center justify-start">
                <div className="md:w-7/12 w-full mr-2">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Enter Coupon Code" />
                </div>
               
            </div>
            <div className="flex items-center justify-start mb-4">

            <div className="flex items-center justify-between duration-300 mt-3">
            <button className="font-semibold border hover:border-transparent rounded text-black bg-white hover:bg-[#ffba00] duration-500 hover:text-white px-8 py-2">APPLY COUPON</button>

            </div>


               
            </div>
          
        </form>
    </div>
</div>



<div className="lg:flex max-w-[1240px] mx-auto py-10 pb-40">
    {/* First div with form */}
   
    <div className="lg:w-3/4 w-full p-2">
    <div className='px-5 text-xl font-semibold py-3'>
      <h1>Billing Details</h1>
    </div>
        <form className="px-5 pt-6 pb-8">
            {/* Your form inputs and selects */}
            <div className="mb-4 sm:flex items-center justify-start">
                <div className="sm:w-1/2 w-full mr-2 sm:py-0 py-2">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="First Name" />
                </div>
                <div className="sm:w-1/2 w-full sm:ml-6">
                   
                    <input className="shadow mt-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Last Name" />
                </div>
            </div>


            {/* More inputs */}
            <div className="mb-4">
              
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="companyname" type="text" placeholder="Company Name" />
            </div>
            {/* More inputs */}
            <div className="mb-4 sm:flex items-center justify-start">
                <div className="sm:w-1/2 w-full mr-2 sm:py-0 py-2">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phonenumber" type="number" placeholder="Phone Number" />
                </div>
                <div className="sm:w-1/2 w-full sm:ml-6">
                   
                    <input className="shadow mt-3 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="emailaddress" type="email" placeholder="Email Address" />
                </div>
            </div>
            {/* More inputs */}
            <div className="mb-8 relative">
 
    <select defaultValue="" className="shadow appearance-none border rounded w-full py-2 pl-4 pr-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" id="country">
        <option value="" disabled>Select your country</option>
        <option value="usa">United States</option>
        <option value="canada">Canada</option>
        <option value="uk">United Kingdom</option>
        <option value="australia">Australia</option>
        {/* Add more options for other countries */}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <FaAngleDown />
    </div>
</div>
            {/* More inputs */}
            <div className="mb-4">
                
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="addressline01" type="text" placeholder="Address Line 01" />
            </div>
            {/* More inputs */}
            <div className="mb-4">
                
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="addressline02" type="text" placeholder="Address Line 02" />
            </div>

            <div className="mb-4">
                
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="addressline02" type="text" placeholder="Town/City" />
            </div>


            {/* Select elements */}
        

<div className="mb-8 relative">
    
    <select defaultValue="" className="shadow appearance-none border rounded w-full py-2 pl-4 pr-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" id="paymentMethod">
        <option value="" disabled>District</option>
        <option value="creditCard">Distr</option>
        <option value="paypal">PayPal</option>
        {/* Add more options for other payment methods */}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <FaAngleDown />
    </div>
</div>


<div className="mb-4">
<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phonenumber" type="number" placeholder="Postcode/Zip" />

</div>


<div className="flex items-center mb-4 mt-5">
    <input type="checkbox" id="termsAndConditions" className="form-checkbox h-4 w-4 text-indigo-600 accent-[#828bb3] transition duration-150 ease-in-out" />
    <label htmlFor="termsAndConditions" className="ml-2 text-gray-700">Create an account?</label>
</div>

<div className='border-b border-b-gray-300 py-3'>
  <h1>Shipping Details</h1>
</div>




<div className="flex items-center mb-4 mt-5">
    <input type="checkbox" id="termsAndConditions" className="form-checkbox h-4 w-4 text-indigo-600 accent-[#828bb3] transition duration-150 ease-in-out" />
    <label htmlFor="termsAndConditions" className="ml-2 text-gray-700">Ship to a different address?</label>
</div>


<div>
<textarea className="resize-none border rounded-md w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your text here"></textarea>

</div>
        </form>
    </div>

    {/* Second div with order details */}
    <div className="flex lg:w-1/3 w-full p-4 bg-gray-200 mt-14">
    {/* Left side with product details */}
    <div className="w-full p-3">
        <h2 className="text-lg font-semibold mb-4 border-b border-b-gray-300 py-4">Your Order</h2>
        <div className="mb-4">

        <div className="flex justify-between py-3">
                <p>Product</p>
                <p>Total</p>
            </div>

            <div className="flex justify-between py-3">
                <p>Fresh Blackberry</p>
                <p>x 02</p>
                <p>$720.00</p>
            </div>
            <div className="flex justify-between py-3">
                <p>Fresh Tomatoes</p>
                <p>x 02</p>
                <p>$720.00</p>
            </div>
            <div className="flex justify-between py-3">
                <p>Fresh Brocoli</p>
                <p>x 02</p>
                <p>$720.00</p>
            </div>
        </div>

        <div className="flex justify-between mb-6">
                <p className='font-semibold'>SUBTOTAL</p>
                <p>$2160.00</p>
            </div>

            <div className="flex justify-between mb-6">
                <p className='font-semibold'>SHIPPING</p>
                <p>$Flat Rate: $50</p>
            </div>

            <div className="flex justify-between mb-6">
                <p className='font-semibold'>TOTAL</p>
                <p>$2210.00</p>
            </div>

            <div className="flex items-center mb-2 py-2">
    <input type="radio" id="checkPayment" name="paymentMethod" className="form-radio h-4 w-4 text-indigo-600 accent-[#828bb3] transition duration-150 ease-in-out" />
    <label htmlFor="checkPayment" className="ml-2 text-black">Check Payment</label>
</div>

<div className='bg-white'>
  <p className='text-base p-4 text-gray-600'>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
</div>


<div className="flex items-center justify-between mb-4 mt-6">

 {/* Payment method label */}
 <div className='flex items-center'>
 <input type="radio" id="checkPayment" name="paymentMethod" className="form-radio h-4 w-4 text-indigo-600 accent-[#828bb3] transition duration-150 ease-in-out" />

        <p className="text-black ml-2">PAYPAL</p>

    </div>

    {/* Image radio button */}
    <label htmlFor="paymentMethod" className="cursor-pointer">
        <img src={image1} alt="Payment Image" />
    </label>
  
   
</div>


<div className='bg-white'>
  <p className='text-base p-4 text-gray-600'>Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.</p>
</div>


<div className="flex items-center mb-4 mt-6">
    <input type="checkbox" id="termsAndConditions" className="form-checkbox h-4 w-4 text-indigo-600 accent-[#828bb3] transition duration-150 ease-in-out" />
    <label htmlFor="termsAndConditions" className="ml-2 text-gray-700 text-sm">I've read and accept the <span className='text-red-600'>terms & conditions</span></label>
</div>


<div className="flex items-center justify-between">
            <button className="font-semibold mt-4 duration-500 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 rounded text-white w-full py-2">PROCEED TO PAYPAL</button>

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

export default ProductsCheckout