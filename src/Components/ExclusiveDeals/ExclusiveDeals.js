import React, { useState, useEffect,useRef } from 'react';
import bgimage from '../Assets/exclusive.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Assets/e-p1.png';
import { TfiBag } from "react-icons/tfi";
import { FaArrowLeftLong,FaArrowRightLong } from "react-icons/fa6";



function ExclusiveDeals({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };


  const sliderRef = useRef();

  const images = [image1, image1, image1];
  const shoeNames = ["ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON", "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON", "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON"];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    
  responsive: [
    {
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
   
  ],
  };


  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showFestivalStart, setShowFestivalStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      // Check if countdown is finished
      if (Object.keys(timeLeft).length === 0) {
        setShowFestivalStart(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Function to add leading zeros
  const addLeadingZeros = (value) => {
    return value.toString().padStart(2, '0');
  };


  return (
    <>

    <div className='lg:grid-cols-2 grid-cols-1 grid'>
      <div className="relative w-full">
        <div
          className="bg-no-repeat bg-cover bg-center h-[800px] bg-blend-multiply bg-[#00000086]"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <div className="absolute inset-0 flex flex-col items-center">
            <div className="text-center ps-5 pe-5 mt-48">
              <div className="">
                {showFestivalStart ? (
                  <h1 className="md:text-4xl text-3xl font-semibold text-white mt-8">
                  Stay Tuned for our next Hot Deal !
                  </h1>
                ) : (
                  <h1 className="md:text-4xl text-3xl font-semibold text-white">
                  Exclusive Hot Deal Ends Soon !
                  </h1>
                )}

                <p className="text-white mt-3">Who are in extremely love with eco friendly system.</p>
              </div>
              <div className="grid md:grid-cols-4 grid-cols-2 justify-center items-center mt-14 bg-white rounded-md p-3">
                <div className="flex flex-col items-center sm:mr-2 sm:mb-2 border-r">
                  <span className="font-semibold text-black w-full text-4xl"> 
                    {addLeadingZeros(timeLeft.days || 0)}
                  </span>
                  <span className="text-black mt-1 tracking-widest w-full"> Days </span>
                </div>
                <div className="flex flex-col items-center sm:mr-2 sm:mb-2 md:border-r">
                  <span className="font-semibold w-full text-black text-4xl">
                    {addLeadingZeros(timeLeft.hours || 0)}
                  </span>
                  <span className="text-black mt-1 tracking-widest w-full"> Hours </span>
                </div>
                <div className="flex flex-col items-center sm:mr-2 sm:mb-2 border-r">
                  <span className="font-semibold w-full text-black text-4xl">
                    {addLeadingZeros(timeLeft.minutes || 0)}
                  </span>
                  <span className="text-black w-full mt-1 tracking-widest"> Minutes </span>
                </div>
                <div className="flex flex-col items-center sm:mr-2 sm:mb-2">
                  <span className="font-semibold w-full text-black text-4xl">
                    {addLeadingZeros(timeLeft.seconds || 0)}
                  </span>
                  <span className="text-black tracking-widest mt-1 w-full"> Seconds </span>
                </div>
              </div>
              <div className="flex justify-center w-full mt-16">
                <button className={`bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 rounded-full tracking-wider text-white py-4 px-8 ${showFestivalStart ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                {showFestivalStart ? "DEAL TIME IS OVER !" : "SHOP NOW"}
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      

          <div className="relative">
          <div className="sm:w-2/3 mx-auto mt-16">

              <div className="sm:absolute sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 flex justify-between items-center ps-8 pe-8">
                  <button className="text-black" onClick={goToPrev}>
                  <span className="text-gray-500 text-sm">PREV</span>
                    <FaArrowLeftLong className="mr-3 text-gray-500 text-xl" />
                  </button>
                  <button className="text-black" onClick={goToNext}>
                  <span className="text-gray-500 text-sm">NEXT</span>
                    <FaArrowRightLong className="mr-3 text-gray-500 text-xl" />
                  </button>
              </div>


    <Slider ref={sliderRef} {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <div className="flex flex-wrap py-16 relative">
            <div className="mx-auto w-11/12 px-4 mb-4">
              <div className="overflow-hidden relative">
                
                <img className="object-contain h-auto mx-auto" src={image} alt={`Image ${index + 1}`} />
              </div>
              <div className="font-medium text-center text-gray-900 mb-3 mt-4">
                $150.00
                <span className="line-through ml-4 text-gray-400">$210.00</span>
              </div>
              <div className="p-4">
                <h2 className="text-2xl text-center leading-9 font-semibold text-black">{shoeNames[index]}</h2>
              </div>
              <div className="flex items-center mt-2 justify-center sm:ps-10 sm:pe-10 ps-3">
                <div className="rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 relative group p-2 cursor-pointer">
                  <TfiBag className="text-white" />
                </div>
                <h5 className="text-black font-semibold ml-2 text-sm">ADD TO BAG</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

      </div>

    </>
  );
}

export default ExclusiveDeals;