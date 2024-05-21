import React from 'react'
import { motion } from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/banner.jpeg';
import Navbar from '../../Navbar/Navbar';
import ExclusiveDeals from '../../ExclusiveDeals/ExclusiveDeals';
import BrandsLogo from '../../BrandsLogo/BrandsLogo';
import Footer from '../../Footer/Footer';
import ScrollButton from '../../ScrollButton/ScrollButton';



const BlogDeals = () => {
  return (
    <>

    <Navbar />


   <div className="relative">
        <div className="relative h-96 flex justify-center items-center overflow-hidden">
          <div className="absolute inset-0 h-96 bg-no-repeat bg-cover bg-center bg-blend-multiply bg-[#00000034]" style={{ backgroundImage: `url(${bgimage})` }}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
              className="flex flex-col items-center pt-10 sm:px-0 px-5 h-full"
            >
              <h1 className="sm:text-5xl text-4xl font-bold text-white mt-28">Blog Deals</h1>
              <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-white mr-4">Home</h2>
                <RxSlash className="text-white mr-4" />
                <h2 className="text-white mr-4">Blog</h2>
                <RxSlash className="text-white mr-4" />
                <h2 className="text-white">Blog Deals</h2>
              </div>
            </motion.div>
          </div>
        </div>


        </div>


        <div className='mt-36'>
        <ExclusiveDeals />
        </div>
        <div className='py-10'>
        <BrandsLogo />
        </div>
        <Footer />
        <ScrollButton />



      
    </>
  )
}

export default BlogDeals
