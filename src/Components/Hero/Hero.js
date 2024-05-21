import React, { useRef, useState } from 'react';
import bgimage from '../Assets/hero.webp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiPlus } from "react-icons/fi";



const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

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
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
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

  const slidesContent = [
    {
      title: "Nike New Collection !",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',

    },
    {
      title: "Nike New Collection !",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',

    },
    {
      title: "Nike New Collection !",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
     
    },
  ];

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentSlide(index);
  };

  return (
    <>
    <div className="sm:ps-14 ps-2 pe-4 relative overflow-hidden py-28">
     <div
        className="absolute inset-0 bg-blend-multiply bg-[#00000070] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimage})`,
          width: '100%',
          height: '100%',
        }}
      >
      </div>
      <div className="absolute inset-0"></div>
      <div className="relative z-10 w-full sm:max-w-xl">
        <Slider {...settings} ref={sliderRef} beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}>
          {slidesContent.map((slide, index) => (
            <div key={index} className="w-full relative group">
              <div className="py-5 sm:ps-10 sm:pe-10 ps-4">
                <h1 className="sm:text-6xl text-4xl mb-8 text-white font-bold" style={{ lineHeight: '4.7rem' }}>
                  {slide.title}
                </h1>
                <div className="tracking-wide lg:pe-14 pe-6 text-white">{slide.description}</div>

              </div>
              <div className="flex items-center sm:ps-10 sm:pe-10 ps-3">

              <div className="p-4 rounded-full cursor-pointer bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500">
        <FiPlus className="text-white text-lg" />
      </div>

      <h5 className="text-white ml-4 font-semibold text-sm">
        ADD TO BAG
      </h5>
     
    </div>
            </div>
          ))}
        </Slider>
        <div className="flex space-x-5 sm:ps-12 ps-5 text-lg mt-8">
          {slidesContent.map((_, index) => (
            <h1
              key={index}
              className={`cursor-pointer ${currentSlide === index ? 'text-[#ffa807] underline decoration-2 underline-offset-8' : 'text-white'}`}
              onClick={() => goToSlide(index)}
            >
              0{index + 1}
            </h1>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;