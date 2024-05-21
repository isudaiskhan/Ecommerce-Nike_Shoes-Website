import React from 'react';
import image1 from '../Assets/deal1.jpg';
import image2 from '../Assets/deal2.jpg';
import image3 from '../Assets/deal3.jpg';
import image4 from '../Assets/deal4.jpg';
import image5 from '../Assets/deal5.jpg';
import image6 from '../Assets/deal6.jpg';
import image7 from '../Assets/deal7.jpg';
import image8 from '../Assets/deal8.jpg';
import image9 from '../Assets/deal9.jpg';
import image10 from '../Assets/c5.jpg';



const WeeklyDeals = () => {
  const items = [
    {
      imageUrl: image1,
      heading1: 'BLACK LACE HEELS',
      price: '189.00',
    },
    {
      imageUrl: image2,
      heading1: 'BLACK LACE HEELS',
      price: '189.00',
    },
    {
      imageUrl: image3,
      heading1: 'BLACK LACE HEELS',
      price: '189.00',
    },
    {
      imageUrl: image4,
      heading1: 'BLACK LACE HEELS',
      price: '189.00',
    },
    {
      imageUrl: image5,
      heading1: 'BLACK LACE HEELS',
      price: '189.00',
    },
    {
      imageUrl: image6,
      heading1: 'BLACK LACE HEELS',
      price: '189.00',
    },
    {
      imageUrl: image7,
      heading1: 'BLACK LACE HEELS',
      price: '189.00',
    },
    {
      imageUrl: image8,
      heading1: 'BLACK LACE HEELS',
      price: '189.00',
    },
    {
      imageUrl: image9,
      heading1: 'BLACK LACE HEELS',
      price: '189.00',
    },
  ];

  return (

    <>

    <div className='max-w-[1240px] mx-auto ps-3 pe-3 sm:ps-7 sm:pe-7 mt-20 py-20'>
       <h1 className="sm:text-5xl text-4xl mb-8 px-4 text-center font-semibold text-gray-800">Deals of the Week</h1>
        <p className="text-gray-600 mt-4 text-center sm:w-2/3 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   
    
    <div className="relative flex flex-col lg:flex-row mt-14">
      <div className="mx-auto">
       

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-16 gap-y-8 relative z-10">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <img src={item.imageUrl} alt="Product" className="mr-2 object-cover cursor-pointer rounded-md" />
                <div>
                  <h2 className="text-md mb-1 hover:text-[#ffc107] cursor-pointer duration-300">{item.heading1}</h2>
                  <div className="font-medium text-sm text-gray-900 mb-3 mt-1">
                    {item.price}
                    <span className="line-through ml-2 text-gray-400">$210.00</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
     <div className='mx-auto'>
      {/* Image positioned after the third column */}
      <img src={image10} alt="Background" className="hidden lg:block h-full object-cover z-20 w-72" />
      </div>
    </div>
    </div>

    </>
  );
};

export default WeeklyDeals;
