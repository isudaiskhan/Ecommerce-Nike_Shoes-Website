import React from 'react'
import Navbar from '../../Navbar/Navbar'
import image1 from '../../Assets/g1.jpg'
import image2 from '../../Assets/g2.jpg'
import image3 from '../../Assets/g3.jpg'
import image4 from '../../Assets/g4.jpg'
import image5 from '../../Assets/g5.jpg'
import image6 from '../../Assets/g6.jpg'
import image7 from '../../Assets/g7.jpg'
import image8 from '../../Assets/g8.jpg'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/banner.jpeg'
import AvailableProducts from '../../AvailableProducts/AvailableProducts'
import Footer from '../../Footer/Footer'
import ScrollButton from '../../ScrollButton/ScrollButton'



const Elements = () => {
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
             <h1 className="sm:text-5xl text-4xl font-bold text-white mt-28">Elements page</h1>
             <div className="flex flex-wrap items-center mt-6">
             <h2 className="text-white mr-4">Home</h2>
             <RxSlash className="text-white mr-4" />

             <h2 className="text-white mr-4">Pages</h2>
             <RxSlash className="text-white mr-4" />

            
               <h2 className="text-white mr-4">Elements</h2>

                  </div>
                  </motion.div>
                </div>
             </div>


    <div className='mt-36 container mx-auto sm:ps-0 sm:pe-0 ps-3 pe-3'>
    <div className='xl:px-6 pb-20'>
      <h1 className='text-3xl font-semibold'>Image Gallery</h1>
    </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
      {/* <!-- First three images --> */}
      <div className="bg-gray-200 sm:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 cursor-pointer">
        <img src={image1} alt="Image 1" className="w-full  h-52" />
      </div>
      <div className="bg-gray-200 sm:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 cursor-pointer">
        <img src={image2} alt="Image 2" className="w-full h-52" />
      </div>
      <div className="bg-gray-200 sm:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 cursor-pointer">
        <img src={image3} alt="Image 3" className="w-full h-52" />
      </div>
      </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-5 gap-8 max-w-[1240px] mx-auto'>
      {/* <!-- Fourth and fifth images --> */}
      <div className="bg-gray-200 sm:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 cursor-pointer">
        <img src={image4} alt="Image 4" className="w-full h-52" />
      </div>
      <div className="bg-gray-200 sm:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 cursor-pointer">
        <img src={image5} alt="Image 5" className="w-full h-52" />
      </div>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto mt-5'>  {/* <!-- Last three images --> */}
      <div className="bg-gray-200 sm:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 cursor-pointer">
        <img src={image6} alt="Image 6" className="w-full h-48" />
      </div>
      <div className="bg-gray-200 sm:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 cursor-pointer">
        <img src={image7} alt="Image 7" className="w-full h-48" />
      </div>
      <div className="bg-gray-200 sm:p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200 cursor-pointer">
        <img src={image8} alt="Image 8" className="w-full h-48" />
      </div>
    </div>



</div>

</div>


<AvailableProducts />
<Footer />
<ScrollButton />
      
    </>
  )
}

export default Elements