import React from 'react'
import image1 from '../Assets/c1.jpg'
import image2 from '../Assets/c2.jpg'
import image3 from '../Assets/c3.jpg'
import image4 from '../Assets/c4.jpg'
import image5 from '../Assets/c5.jpg'



const Category = () => {
  return (
    <>


   <div className='max-w-[1240px] mx-auto ps-5 pe-5 sm:ps-7 sm:pe-7 mt-20 py-20'>   
    <div className="relative flex flex-col lg:flex-row mt-14">
      <div className="mx-auto">
        <div className="pe-4">
        <div className="flex sm:flex-row flex-col sm:space-x-3">
        <div className="relative cursor-pointer transition-opacity duration-300 group">
          <img src={image1} alt="Image 2" className="w-full h-full" />
          <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <div className='text-center'>
              <h2 className="font-semibold text-white mb-5 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">SNEAKER FOR SPORTS</h2>
            </div>
          </div>
        </div>


       <div className="relative cursor-pointer transition-opacity duration-300 group">
          <img src={image2} alt="Image 2" className="sm:w-60 w-full" />
          <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <div className='text-center'>
              <h2 className="font-semibold text-white mb-5 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">SNEAKER FOR SPORTS</h2>
            </div>
          </div>
        </div>
      </div>

    <div className="flex sm:flex-row flex-col space-x-3 mt-3">
       <div className="relative cursor-pointer transition-opacity duration-300 group">
          <img src={image3} alt="Image 2" className="sm:w-60 w-full" />
          <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <div className='text-center'>
              <h2 className="font-semibold text-white mb-5 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">SNEAKER FOR SPORTS</h2>
            </div>
          </div>
        </div>

        
        <div className="relative cursor-pointer transition-opacity duration-300 group">
          <img src={image4} alt="Image 2" className="w-full h-full" />
          <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <div className='text-center'>
              <h2 className="font-semibold text-white mb-5 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">SNEAKER FOR SPORTS</h2>
            </div>
          </div>
        </div>
       </div>
        </div>
      </div>


      <div className="relative transition-opacity cursor-pointer duration-300 group mx-auto">
      <div className='lg:mt-0 mt-6'>
      {/* Image positioned after the third column */}
      <img src={image5} alt="Background" className="h-full object-cover z-20 w-full" />
      </div>      
          <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <div className='text-center'>
              <h2 className="font-semibold text-white mb-5 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">SNEAKER FOR SPORTS</h2>
            </div>
          </div>
        </div>
      
    
    </div>
    </div>

    </>
  )
}

export default Category
