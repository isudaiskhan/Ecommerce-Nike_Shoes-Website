import React from 'react'
import Navbar from '../../Navbar/Navbar'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/banner.jpeg'
import bgimage2 from '../../Assets/login.jpg'
import Footer from '../../Footer/Footer';
import ScrollButton from '../../ScrollButton/ScrollButton';


const Login = () => {
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
             <h1 className="sm:text-5xl text-4xl font-bold text-white mt-28">Login page</h1>
             <div className="flex flex-wrap items-center mt-6">
             <h2 className="text-white mr-4">Home</h2>
             <RxSlash className="text-white mr-4" />

             <h2 className="text-white mr-4">Pages</h2>
             <RxSlash className="text-white mr-4" />

            
               <h2 className="text-white mr-4">Login</h2>

                  </div>
                  </motion.div>
                </div>
             </div>




        <div className='w-full md:px-4 sm:px-6 px-2 py-12 mt-6'>
        <div className='w-full py-16 px-4'>
          <div className='max-w-[1100px] mx-auto grid md:grid-cols-2'>
          <div className="bg-no-repeat py-36 bg-cover bg-center bg-blend-multiply bg-[#0000007c]" style={{ backgroundImage: `url(${bgimage2})` }}>

            <div className='flex flex-col justify-center p-6 md:p-20'>

              <h1 className='text-2xl text-center font-medium py-2 text-white'>
              New to our website?
              </h1>
              <p className='text-center mt-4 text-white'>
              There are advances being made in science and technology everyday, and a good example of this is the
              </p>

            <div>
            <div className='mt-6 flex justify-center'>
              <button className="bg-gradient-to-r font-medium from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white px-6 py-2">CREATE AN ACCOUNT</button>

              </div>
            </div>
            </div>
             </div>



             {/* Form */}

            <div className='bg-white flex flex-col justify-center shadow-2xl p-6 md:p-16'>
              <form className='grid grid-cols-1 gap-4'>
                <h1 className='text-2xl text-center font-semibold text-black'>
                 LOG IN TO ENTER
                </h1>

            
                <input
                  type='text'
                  id='input3'
                  name='input2'
                  required
                  placeholder='Username'
                  className='mt-2 w-full border-b border-b-gray-300 px-4 py-3 text-black focus:outline-[#ffba00]'
                />

               <input
                  type='password'
                  id='input3'
                  name='input2'
                  required
                  placeholder='Password'
                  className='mt-2 w-full border-b border-b-gray-300 px-4 py-3 text-black focus:outline-[#ffba00]'
                />


          <div className="flex items-center mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 accent-[#828bb2]" />
            </label>
            <p className="ml-3 text-gray-400">Keep me logged in</p>
          </div>


             <div className='mt-6 flex justify-center'>
              <button className="bg-gradient-to-r font-medium from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white w-full py-2">LOG IN</button>

              </div>
                <div className='text-center mt-1'>
                <a href="#" className="text-gray-500 hover:underline">Forgot Password?</a>

                </div>
              </form>
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

export default Login