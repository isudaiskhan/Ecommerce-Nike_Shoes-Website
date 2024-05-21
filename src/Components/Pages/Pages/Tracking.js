import React from 'react'
import Navbar from '../../Navbar/Navbar'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/banner.jpeg';
import Footer from '../../Footer/Footer';
import ScrollButton from '../../ScrollButton/ScrollButton';



const Tracking = () => {
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
             <h1 className="sm:text-5xl text-4xl font-bold text-white mt-28">Tracking page</h1>
             <div className="flex flex-wrap items-center mt-6">
             <h2 className="text-white mr-4">Home</h2>
             <RxSlash className="text-white mr-4" />

             <h2 className="text-white mr-4">Pages</h2>
             <RxSlash className="text-white mr-4" />

            
               <h2 className="text-white mr-4">Tracking</h2>

                  </div>
                  </motion.div>
                </div>
             </div>


             <div className='max-w-[1240px] mx-auto sm:ps-14 sm:pe-6 ps-6 pe-6 py-36'>
             <div className="flex flex-col space-y-4">
  <p className="text-gray-800 sm:w-5/6 w-full">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
  <div className="flex flex-col space-y-2 md:flex-row md:space-x-4">
  <input type="text" placeholder="Order ID" className="px-4 lg:w-1/2 sm:w-11/12 w-full py-2 mt-2 border border-gray-300 focus:outline-none focus:border-[#ffba00]" />

  </div>
  <div>
        <input type="email" placeholder="Billing Email Address" className="px-4 py-2 lg:w-1/2 sm:w-11/12 w-full border border-gray-300 focus:outline-none focus:border-[#ffba00]" />

  </div>
  <div>
              <button className="bg-gradient-to-r mt-1 font-medium from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white px-6 py-2">TRACK ORDER</button>

              </div>
</div>



</div>
</div>


<Footer />
<ScrollButton />


    </>
  )
}

export default Tracking