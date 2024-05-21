import React from 'react'
import Navbar from '../../Navbar/Navbar'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/banner.jpeg'
import {FiUser, FiMail, FiMessageSquare,FiPhoneCall} from 'react-icons/fi'
import { FaRegEnvelope  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../../Footer/Footer';
import { FaPen } from "react-icons/fa";
import ScrollButton from '../../ScrollButton/ScrollButton';



const Contact = () => {
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
             <h1 className="sm:text-5xl text-4xl font-bold text-white mt-28">Contact Us</h1>
             <div className="flex flex-wrap items-center mt-6">
             <h2 className="text-white mr-4">Home</h2>
             <RxSlash className="text-white mr-4" />

            
               <h2 className="text-white mr-4">Contact</h2>

                  </div>
                  </motion.div>
                </div>
             </div>


          {/* Map */}
          <div className='overflow-hidden max-w-7xl sm:px-10 px-2 mt-32 mx-auto'>
            <motion.div
                initial={{x:-100,opacity:0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
              duration:1}}
              className="relative h-full" style={{ paddingBottom: "36.25%" }}>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805202.1174245778!2d144.39369296677754!3d-37.969642773560494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1713880008987!5m2!1sen!2s"        
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute top-0 left-0 w-full"
                ></iframe>
              </motion.div>
            </div>



            <div className='w-full pb-40 mt-28 bg-white'>
        <div className='max-w-[1240px] sm:ps-6 sm:pe-6 mx-auto flex flex-col sm:flex-col md:flex-row'>



        {/* contact Section */}
        <div className='md:w-1/3 w-11/12 mx-auto my-3 mt-10 '>


        
      <div className='flex items-center mt-1'>
        <a href='#' className='px-3 rounded-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500'>
          <FaLocationDot  className='text-2xl text-white' />
        </a>

        <div className='ml-4'>
          <h1 className='text-[#12141D] font-bold text-xl'>California, United States</h1>
          <span className='text-gray-700'>Santa monica bullevard</span>
        </div>
      </div>
 

        <div className='flex items-center mt-12'>
        <a href='#' className='px-3 rounded-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500'>
          <FiPhoneCall className='text-2xl text-white' />
        </a>

        <div className='ml-4'>
          <h1 className='text-[#12141D] font-bold text-xl'>00 (440) 9865 562</h1>
          <span className='text-gray-700'>Mon to Fri 9am to 6 pm</span>
        </div>
      </div>




      <div className='flex items-center mt-12'>
        <a href='#' className='px-3 rounded-full py-3 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500'>
          <FaRegEnvelope  className='text-2xl text-white' />
        </a>

        <div className='ml-4'>
          <h1 className='text-[#12141D] font-bold text-xl'>support@ Gmail.com</h1>
          <span className='text-gray-700'>Send us your query anytime!</span>
        </div>
      </div>





      </div>


   {/* Form Section */}
    <form className='md:w-3/5 w-11/12 max-w-3xl md:mt-0 mt-5 mx-auto pt-10 space-y-3 mb-4 md:mb-0'>
   
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className='relative md:w-1/2 w-full'>
          <input type="text" id="input1" name="user_name" placeholder='Name' required className="w-full border rounded border-gray-400 px-4 py-2 text-black focus:outline-[#ffba00]" />
          <FiUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className='relative md:w-1/2 w-full'>
          <input type="email" id="input2" name="user_Email" placeholder='Email' required className="w-full border rounded border-gray-400 px-4 py-2 text-black focus:outline-[#ffba00]" />
          <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        
      </div>
     

        <div className='relative w-full'>
          <input type="email" id="input2" name="user_Subject" placeholder='Subject' required className="w-full border rounded border-gray-400 px-4 py-2 text-black focus:outline-[#ffba00]" />
          <FaPen  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

      <div className='w-full relative'>
        <textarea id="textarea" placeholder='Message' name="message" required rows="5" className="p-2 px-4 py-3 w-full border border-gray-400 rounded-md focus:outline-[#ffba00]" />
        <FiMessageSquare className="absolute right-3 bottom-3 text-gray-400" />
      </div>


    
      

        
      <div className="flex items-center justify-start duration-300 mt-3">
      <div>
            <button className="font-semibold duration-500 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white px-8 py-4">SEND MESSAGE</button>

            </div>
            </div>
    </form>

  
    </div>
  </div>


             </div>


          <Footer />
          <ScrollButton />
      

    </>
  )
}

export default Contact