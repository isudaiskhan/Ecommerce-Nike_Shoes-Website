import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Assets/shoe1.png';
import image2 from '../Assets/shoe2.png';
import image3 from '../Assets/shoe3.png';
import image4 from '../Assets/shoe4.png';
import image5 from '../Assets/shoe5.png';
import image6 from '../Assets/shoe6.png';
import image7 from '../Assets/shoe7.png';
import image8 from '../Assets/shoe8.png';
import image9 from '../Assets/shoe9.png';
import image10 from '../Assets/shoe10.png';



const AvailableProducts = () => {
  const sliderRef = useRef();

  const images = [image1, image2, image3, image4 ,image5,image6,image7,image8,image9,image10];
  const shoeNames = ["Nike Dunk Low", "Nike Dunk Low", "Nike Dunk Low", "Nike Dunk Low", "Nike Dunk Low", "Nike Dunk Low", "Nike Dunk Low", "Nike Dunk Low", "Nike Dunk Low", "Nike Dunk Low", "Nike Dunk Low", "Nike Dunk Low"];

  const settings = {
    infinite: true,
    speed: 3000, // Adjust the speed of scrolling
    autoplaySpeed: 3000, // Set to 0 for continuous scrolling
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    arrows: false, // Hide default arrows
    pauseOnHover: false, // Pause autoplay on hover
    
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
  };


  

  return (
    <>
    <div className='max-w-[1240px] mx-auto py-28 mt-28 relative sm:ps-3 sm:pe-3 ps-4 pe-4'>
      <h1 className='sm:text-5xl text-4xl mb-8 ps-4 text-center font-semibold text-gray-800'>Latest Products</h1>
      <p className='text-gray-600 mt-4 text-center sm:w-1/2 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="flex flex-wrap -mx-4 mt-12 py-16">
              <div className="mx-auto w-11/12 px-4 mb-4">
                <div className="bg-white hover:shadow-xl rounded-md hover:shadow-gray-400 overflow-hidden shadow-lg">
                  <div className="relative">
                    <img className="w-full object-cover cursor-pointer transition-transform ease-in-out duration-500 delay-150 hover:scale-110 hover:-translate-y-1" src={image} alt={`Image ${index + 1}`} />
                    <span className="absolute top-2 right-2 px-3 py-2 tracking-wide bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium rounded-lg">Mens</span>
                    </div>
                    <div className="p-4">
                    <h2 className="text-lg font-semibold mt-5 text-[#45595b]">{shoeNames[index]}</h2>
                    <div className="font-medium text-gray-800 mb-3 mt-4">
                       $ 150.00
                     <span className="line-through ml-4 text-gray-400">$ 210.00</span>
                          </div>
                       
                  </div>
                  <div className='bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 cursor-pointer'>
                           <h1 className='text-center'>Add To Bag</h1>
                        </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>


    </>

  );
};

export default AvailableProducts;