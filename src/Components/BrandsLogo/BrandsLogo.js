import React,{useRef} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Assets/logo1.png';
import image2 from '../Assets/logo2.png';
import image3 from '../Assets/logo3.png';
import image4 from '../Assets/logo4.png';
import image5 from '../Assets/logo5.png';

  

  const BrandsLogo = () => {

    
      const sliderRef = useRef();
    
      const images = [image1, image2, image3,image4,image5];
    
      const settings = {
        infinite: true,
        speed: 3000, // Adjust the speed of scrolling
        autoplaySpeed: 3000, // Set to 0 for continuous scrolling
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        arrows: false, // Hide default arrows
        pauseOnHover: false, // Pause autoplay on hover
        
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
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


    <div className="relative">
    <div className="mt-28 ps-14 pe-14">

    <Slider ref={sliderRef} {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <div className="flex flex-wrap py-16 relative">
            <div className="mx-auto w-11/12 px-4 mb-4">
              <div className="overflow-hidden relative">
                
                <img className="object-contain cursor-pointer h-auto mx-auto" src={image} alt={`Image ${index + 1}`} />
              </div>
            
           
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  </div>

      
    </>
  )
}

export default BrandsLogo