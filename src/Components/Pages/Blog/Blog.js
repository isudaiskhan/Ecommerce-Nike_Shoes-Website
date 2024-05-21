import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { motion } from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/banner.jpeg';
import image1 from '../../Assets/blog-1.jpg';
import image2 from '../../Assets/blog-2.jpg';
import image3 from '../../Assets/blog-3.jpg';
import image4 from '../../Assets/author.png';
import { FaFacebookF, FaTwitter, FaGithub, FaBehance, FaRegUser, FaRegCalendarAlt, FaEye, FaRegComment, FaSearch } from "react-icons/fa";
import image5 from '../../Assets/post1.jpg';
import image6 from '../../Assets/post2.jpg';
import image7 from '../../Assets/post3.jpg';
import image8 from '../../Assets/post4.jpg';
import image9 from '../../Assets/add.jpg';
import image10 from '../../Assets/m-blog-1.jpg';
import image11 from '../../Assets/m-blog-2.jpg';
import image12 from '../../Assets/m-blog-3.jpg';
import image13 from '../../Assets/m-blog-4.jpg';
import image14 from '../../Assets/m-blog-5.jpg';
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import ScrollButton from '../../ScrollButton/ScrollButton';
import Footer from '../../Footer/Footer';



const Blog = () => {
  const imageSections = [
    {
      imageUrl: image10,
      heading: "Astronomy Binoculars A Great Alternative",
      paragraph: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
      buttonText: "VIEW MORE"
    },
    {
      imageUrl: image11,
      heading: "The Basics Of Buying A Telescope",
      paragraph: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
      buttonText: "VIEW MORE"
    },
    {
      imageUrl: image12,
      heading: "The Glossary Of Telescopes",
      paragraph: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
      buttonText: "VIEW MORE"
    },
    {
      imageUrl: image13,
      heading: "The Night Sky",
      paragraph: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
      buttonText: "VIEW MORE"
    },
    {
      imageUrl: image14,
      heading: "Telescopes 101",
      paragraph: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
      buttonText: "VIEW MORE"
    }
  ];

  const buttons = ['Technology', 'Fashion', 'Architecture', 'Fashion', 'Food', 'Technology', 'Lifestyle', 'Art', 'Adventure', 'Food', 'Lifestyle', 'Adventure'];

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
              <h1 className="sm:text-5xl text-4xl font-bold text-white mt-28">Blog page</h1>
              <div className="flex flex-wrap items-center mt-6">
                <h2 className="text-white mr-4">Home</h2>
                <RxSlash className="text-white mr-4" />
                <h2 className="text-white mr-4">Blog</h2>
                <RxSlash className="text-white mr-4" />
                <h2 className="text-white">Blog</h2>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-28 container mx-auto sm:px-0 px-6">
          <div className="relative group">
            <img src={image1} alt="Image 1" className="w-full h-auto" />
            <div className='absolute inset-0 flex flex-col justify-center items-center hover:bg-[#ffbb00ad] cursor-pointer bg-[#00000096] duration-300 '>
              <div className='text-center'>
                <h1 className="text-white text-xl font-medium border-b py-2">SOCIAL LIFE</h1>
                <p className="text-white mt-3">Enjoy your social life together</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img src={image2} alt="Image 2" className="w-full h-auto" />
            <div className='absolute inset-0 flex flex-col justify-center items-center hover:bg-[#ffbb00ad] cursor-pointer bg-[#00000096] duration-300 '>
              <div className='text-center'>
                <h1 className="text-white text-xl font-medium border-b py-2">POLITICS</h1>
                <p className="text-white mt-3">Be a part of politics</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img src={image3} alt="Image 3" className="w-full h-auto" />
            <div className='absolute inset-0 flex flex-col justify-center items-center hover:bg-[#ffbb00ad] cursor-pointer bg-[#00000096] duration-300 '>
              <div className='text-center'>
                <h1 className="text-white text-xl font-medium border-b py-2">FOOD</h1>
                <p className="text-white mt-3">Let the food be finished</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap lg:max-w-[1270px] sm:max-w-3xl mx-auto lg:px-6 sm:px-12 px-5">
          <div className="w-full lg:w-1/6">
            <div className="grid grid-cols-1 lg:gap-[340px] gap-10">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="w-full mb-4">
                  <div className="mb-4">Food, <span className='text-[#ffba00]'>Technology,</span> Politics, Lifestyle</div>
                  <div className="flex cursor-pointer group justify-between items-center mb-4">
                    <div className="text-gray-500 duration-300 group-hover:text-[#ffba00]">Mark wiens</div>
                    <FaRegUser className="text-gray-500 duration-300 group-hover:text-[#ffba00]" />
                  </div>
                  <div className="flex cursor-pointer group justify-between items-center mb-4">
                    <div className="text-gray-500 duration-300 group-hover:text-[#ffba00]">12 Dec, 2018</div>
                    <FaRegCalendarAlt className="text-gray-500 duration-300 group-hover:text-[#ffba00]" />
                  </div>
                  <div className="flex cursor-pointer group justify-between items-center mb-4">
                    <div className="text-gray-500 duration-300 group-hover:text-[#ffba00]">1.2M Views</div>
                    <FaEye className="text-gray-500 duration-300 group-hover:text-[#ffba00]" />
                  </div>
                  <div className="flex cursor-pointer group justify-between items-center">
                    <div className="text-gray-500 duration-300 group-hover:text-[#ffba00]">06 Comments</div>
                    <FaRegComment className="text-gray-500 duration-300 group-hover:text-[#ffba00]" />
                  </div>
                </div>
              ))}
            </div>
          </div>


           <div className="w-full bg-white lg:w-[53%] lg:ps-7">
            <div className="container mx-auto">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 gap-10">
              {imageSections.map((section, index) => (
                <div key={index} className="bg-gray-100 p-3 rounded-lg">
                  <img src={section.imageUrl} alt={`Related ${index + 1}`} className="w-full h-auto mb-4 rounded-lg" />
                  <h3 className="sm:text-3xl text-2xl font-bold hover:text-[#c32232] duration-300 cursor-pointer mb-3">{section.heading}</h3>
                  <p className="text-gray-600 mb-4">{section.paragraph}</p>
                  <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white py-2 px-4 rounded-md">{section.buttonText}</button>
                </div>
              ))}
            </div>
          </div>
        </div>






               {/* Buttons */}
    <div className="md:flex md:flex-col md:items-center py-20">

<div className="flex-grow"></div> {/* Empty div to push buttons to the end */}

<div className="flex justify-between items-center sm:space-x-3 flex-wrap">

<button className="flex items-center justify-center group bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 hover:text-white text-white py-3 px-3 rounded">
    <MdArrowBackIosNew  className="mr-1 text-black group-hover:text-white" />
  </button>

  <button className="bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 hover:text-white text-black font-semibold py-2 px-4 rounded">
    01
  </button>
  <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500  text-white font-semibold py-2 px-4 rounded">
    02
  </button>
  <button className="bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 hover:text-white text-black font-semibold py-2 px-4 rounded">
    03
  </button>
  <button className="bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 hover:text-white text-black font-semibold py-2 px-4 rounded">
    04
  </button>
  <button className="flex items-center justify-center group bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 text-white py-3 px-3 rounded">
    <MdOutlineArrowForwardIos  className="mr-1 text-black group-hover:text-white" />
  </button>
    </div>
</div>




        </div>


          <div className="w-full lg:w-[28%] bg-gray-100 ml-auto p-4 sm:p-8 mb-52">
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Posts"
            className="w-full px-5 py-2 bg-[#ffba00] text-white caret-white placeholder:text-white border border-white rounded-full shadow-md focus:outline-none"
          />
          <div className="absolute inset-y-0 right-3 flex items-center px-2 text-white">
            <FaSearch />
          </div>
        </div>
      </div>

      <div className="text-center">
        <img className="rounded-full mx-auto mt-12 w-20 h-20" src={image4} alt="" />
        <div className="mt-6">
          <p className='font-medium text-xl'>Charlie Barber</p>
          <p className='text-gray-500 mt-1'>Senior blog writer</p>
        </div>
        <div className="flex items-center justify-center mt-4 space-x-5">
          <FaFacebookF className="mb-1 text-black hover:text-[#c32232] duration-300 cursor-pointer" />
          <FaTwitter className="mb-1 text-black hover:text-[#c32232] duration-300 cursor-pointer" />
          <FaGithub className="mb-1 text-black hover:text-[#c32232] duration-300 cursor-pointer" />
          <FaBehance className="mb-1 text-black hover:text-[#c32232] duration-300 cursor-pointer" />
        </div>
      </div>

      <div className='text-center border-b py-5 border-gray-300'>
        <p className="mb-2 text-gray-500">Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have its supporters and its detractors.</p>
      </div>

      <div className="mt-8">
        <div className="font-semibold text-lg text-center bg-[#ffba00] rounded text-white py-1.5">Popular Posts</div>

        <div className="mt-6">
          <div className="flex items-center space-x-4">
            <img src={image5} alt="Image 1" className="object-cover w-16 h-16" />
            <div>
              <p className="font-semibold hover:text-[#ffba00] cursor-pointer duration-300">Space: The Final Frontier</p>
              <p className="text-xs mt-1 text-gray-500">02 Hours ago</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <img src={image6} alt="Image 1" className="object-cover w-16 h-16" />
            <div>
              <p className="font-semibold hover:text-[#ffba00] cursor-pointer duration-300">The Amazing Hubble</p>
              <p className="text-xs mt-1 text-gray-500">03 Hours ago</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <img src={image7} alt="Image 1" className="object-cover w-16 h-16" />
            <div>
              <p className="font-semibold hover:text-[#ffba00] cursor-pointer duration-300">Astronomy Or Astrology</p>
              <p className="text-xs mt-1 text-gray-500">04 Hours ago</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <img src={image8} alt="Image 1" className="object-cover w-16 h-16" />
            <div>
              <p className="font-semibold hover:text-[#ffba00] cursor-pointer duration-300">Asteroids telescope</p>
              <p className="text-xs mt-1 text-gray-500">01 Hours ago</p>
            </div>
          </div>
        </div>

        <div className="mt-8 cursor-pointer">
          <img src={image9} alt="Advertisement" className="object-cover lg:w-full" />
        </div>

        <div className="mt-8">
          <div className="font-semibold text-lg text-center bg-[#ffba00] rounded text-white py-1.5">Post Categories</div>

          <div className="mt-6">
            {buttons.map((button, index) => (
              <div key={index} className="flex items-center mt-2 cursor-pointer group hover:border-[#ffba00] border-b-2 py-3 border-dotted">
                <h2 className='px-2 text-black group-hover:text-[#ffba00]'>{button}</h2>
                <span className='ms-auto text-gray-500 group-hover:text-[#ffba00]'>(37)</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="font-semibold text-lg text-center bg-[#ffba00] rounded text-white py-1.5">Newsletter</div>
          <div className="mt-6 text-center">
            <p className="text-gray-500 mb-4">Here, I focus on a range of items and features that we use in life without giving them a second thought.</p>
            <div className="flex flex-col md:flex-row mt-6">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full mb-4 md:mb-0 px-4 py-2 focus:outline-none border"
              />
              <button className="w-full md:w-auto px-3 py-2 bg-[#ffba00] text-white transition duration-300 ease-in-out focus:outline-none">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">You can unsubscribe at any time</p>
          </div>
        </div>

        <div className="mt-12">
          <div className="font-semibold text-lg text-center bg-[#ffba00] rounded text-white py-1.5">Tag Clouds</div>

          <div className="flex flex-wrap justify-center space-x-3 mt-7">
            {buttons.map((button, index) => (
              <button key={index} className="px-3 py-1 hover:text-white text-sm border bg-white text-black hover:bg-[#ffba00] transition duration-300 ease-in-out focus:outline-none">
                {button}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

        </div>

       
      </div>

      <ScrollButton />
      <Footer />
    </>
  );
};

export default Blog;