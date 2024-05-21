import React from 'react'
import {FaFacebookF, FaTwitter, FaDribbble, FaBehance} from 'react-icons/fa';
import { FiSend } from "react-icons/fi";
import image1 from '../Assets/Footer-1.jpg'
import image2 from '../Assets/Footer-2.jpg'
import image3 from '../Assets/Footer-3.jpg'
import image4 from '../Assets/Footer-4.jpg'
import image5 from '../Assets/Footer-5.jpg'
import image6 from '../Assets/Footer-6.jpg'
import image7 from '../Assets/Footer-7.jpg'
import image8 from '../Assets/Footer-8.jpg'



const Footer = () => {
  return (
    <>

     <div className='py-14 bg-[#222222] md:px-0 px-5 overflow-hidden'>


    <div className='max-w-[1280px] mx-auto mt-7 px-3 text-gray-300'>
  <div className='flex flex-wrap justify-center gap-10'>
  <div className='w-full md:w-1/4'>
      <h6 className='text-[#FFFFFF] mt-6 text-xl font-bold'>ABOUT US!</h6>
      <p className='mt-6 leading-9 text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>

    </div>



    <div className='w-full md:w-1/4'>
      <div className='space-y-3 mt-6'>
        <h6 className='text-[#FFFFFF] text-xl font-bold'>Newsletter</h6>
        <p className='leading-7 text-gray-300'>Stay update with our latest.</p>
      </div>
      
          <div className="flex mt-7 items-start">
            <input className="border border-gray-600 bg-transparent text-white focus:outline-none placeholder-white w-full px-3 py-2 mb-2" placeholder="Email" />
            <a href='#'>
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-3 py-3">
              <FiSend className="text-white text-lg" />
            </div>
            </a>
        </div>
    </div>




    <div className='w-full md:w-1/4'>
    <div className='space-y-3 mt-6'>
        <h6 className='text-[#FFFFFF] text-xl font-bold ps-3'>Instragram Feed</h6>
        <div className="flex flex-wrap justify-center">
      <div className="flex justify-center flex-wrap space-x-3 mb-4 mt-3">
        {/* Images for the first row */}
        <img src={image1} alt="Image 1" className="w-16 h-16 rounded-full" />
        <img src={image2} alt="Image 2" className="w-16 h-16 rounded-full" />
        <img src={image3} alt="Image 3" className="w-16 h-16 rounded-full" />
        <img src={image4} alt="Image 4" className="w-16 h-16 rounded-full" />
      </div>
      <div className="flex justify-center flex-wrap space-x-3">
        {/* Images for the second row */}
        <img src={image5} alt="Image 5" className="w-16 h-16 rounded-full" />
        <img src={image6}  alt="Image 6" className="w-16 h-16 rounded-full" />
        <img src={image7} alt="Image 7" className="w-16 h-16 rounded-full" />
        <img src={image8} alt="Image 8" className="w-16 h-16 rounded-full" />
      </div>
    </div>
      </div>
    </div>


  



    <div className='w-full md:w-40'>
    <div className='space-y-3 mt-6'>
        <h6 className='text-[#FFFFFF] text-xl font-bold'>Follow Us</h6>
        <ul>
          <a href='#'>
            <li className='py-2 text-gray-300 hover:text-[#ffc107]'>Let us be social</li>
          </a>
          <div className="flex items-center space-x-4 mt-6">
      <FaFacebookF className="text-gray-300 hover:text-[#ffc107] cursor-pointer" />
      <FaTwitter className="text-gray-300 hover:text-[#ffc107] cursor-pointer" />
      <FaDribbble className="text-gray-300 hover:text-[#ffc107] cursor-pointer" />
      <FaBehance className="text-gray-300 hover:text-[#ffc107] cursor-pointer" />
    </div>
        </ul>
      </div>
    </div>

    
  </div> 
</div>


        <div className='tracking-wide text-center mx-auto max-w-[1240px] mt-20'>
            <h1 className='text-gray-300'>Copyright © 2024 All rights reserved | Designed and Developed By <span className='text-[#ffc107] cursor-pointer'>Sudais Khan </span> .</h1>
        </div>


   </div>

    </>
  )
}

export default Footer