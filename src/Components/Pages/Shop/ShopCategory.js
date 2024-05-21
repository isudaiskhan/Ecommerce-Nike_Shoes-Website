import React,{useState} from 'react'
import Navbar from '../../Navbar/Navbar'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/banner.jpeg'
import image1 from '../../Assets/p1.jpg'
import image2 from '../../Assets/p2.jpg'
import image3 from '../../Assets/p3.jpg'
import image4 from '../../Assets/p4.jpg'
import image5 from '../../Assets/p5.jpg'
import image6 from '../../Assets/p6.jpg'
import { LuRefreshCw } from "react-icons/lu";
import { SlCursorMove } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { TfiBag } from "react-icons/tfi";
import { HiChevronDown } from 'react-icons/hi'; 
import WeeklyDeals from '../../WeeklyDeals/WeeklyDeals';
import Footer from '../../Footer/Footer';
import { FaLongArrowAltRight,FaLongArrowAltLeft  } from "react-icons/fa";
import ScrollButton from '../../ScrollButton/ScrollButton';



const ShopCategory = () => {

  const [price, setPrice] = useState(0);
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

const [dropdown1Open, setDropdown1Open] = useState(false);
const [dropdown2Open, setDropdown2Open] = useState(false);
const [dropdown3Open, setDropdown3Open] = useState(false);


const toggleDropdown1 = () => {
  setDropdown1Open(!dropdown1Open);
  if (dropdown2Open) {
    setDropdown2Open(false);
  }
  if (dropdown3Open) {
    setDropdown3Open(false);
  }
};

const toggleDropdown2 = () => {
  setDropdown2Open(!dropdown2Open);
  if (dropdown1Open) {
    setDropdown1Open(false);
  }
  if (dropdown3Open) {
    setDropdown3Open(false);
  }
};

const toggleDropdown3 = () => {
  setDropdown3Open(!dropdown3Open);
  if (dropdown1Open) {
    setDropdown1Open(false);
  }
  if (dropdown2Open) {
    setDropdown2Open(false);
  }
};



  const [products] = useState([
            { id: 1, image: image1, name: "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS", price: 150.00 },
            { id: 2, image: image2, name: "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS", price: 150.00 },
            { id: 3, image: image3, name: "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS", price: 150.00 },
            { id: 4, image: image4, name: "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS", price: 150.00 },
            { id: 5, image: image5, name: "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS", price: 150.00 },
            { id: 6, image: image6, name: "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSONS", price: 150.00 }
          ]);
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
             <h1 className="sm:text-5xl text-4xl font-bold text-center text-white mt-28">Shop Category page</h1>
             <div className="flex flex-wrap items-center mt-6 justify-center">
             <h2 className="text-white mr-4">Home</h2>
             <RxSlash className="text-white mr-4" />

             <h2 className="text-white mr-4">Shop</h2>
             <RxSlash className="text-white mr-4" />

            
               <h2 className="text-white mr-4">Shop Category</h2>

                  </div>
                  </motion.div>
                </div>
             </div>

         
         <div className='max-w-[1240px] mx-auto'>
        <div className="mt-28 lg:grid grid-cols-12 gap-4 lg:ps-5 lg:p-5 sm:ps-12 sm:pe-12 ps-6 pe-6">    
          <div className="sm:col-span-3">


       {/* Browse Categories */}
       <div className="mb-4 bg-[#828bb3] p-5">      
       <h2 className='text-white font-semibold px-2'>Browse Categories</h2>        
         </div>

            <div className="mb-4 space-y-5">
              <div>
            <div className="flex items-center mt-2 cursor-pointer" onClick={toggleDropdown}>
                <h2 className='px-4 text-black hover:text-[#ffc107] duration-300 select-none'>Fruits And Vegetables</h2>
                <span className='ms-auto text-gray-500 select-none'>(53)</span>
            </div>
            

            {/* Dropdown content */}
            {dropdownOpen && (
                <div className="mt-2">
                    <ul className="py-2">
                        <li className="px-10 py-3 hover:bg-gray-100 border-b cursor-pointer">Apple</li>
                        <li className="px-10 py-3 hover:bg-gray-100 border-b cursor-pointer">Banana</li>
                        <li className="px-10 py-3 hover:bg-gray-100 border-b cursor-pointer">Orange</li>
                        <li className="px-10 py-3 hover:bg-gray-100 border-b cursor-pointer">Carrot</li>
                        <li className="px-10 py-3 hover:bg-gray-100 cursor-pointer">Tomato</li>
                    </ul>
                </div>
            )}
        </div>

              <div className="flex items-center mt-2 cursor-pointer">
                
                <h2 className='px-4 text-black hover:text-[#ffc107] duration-300'>Meat and Fish</h2>
                <span className='ms-auto text-gray-500'>(53)</span>
              </div>

              <div className="flex items-center mt-2 cursor-pointer">
                
                <h2 className='px-4 text-black hover:text-[#ffc107] duration-300'>Cooking</h2>
                <span className='ms-auto text-gray-500'>(53)</span>
              </div>


              <div className="flex items-center mt-2 cursor-pointer">
                
                <h2 className='px-4 text-black hover:text-[#ffc107] duration-300'>Beverages</h2>
                <span className='ms-auto text-gray-500'>(24)</span>
              </div>


              <div className="flex items-center mt-2 cursor-pointer">
                
                <h2 className='px-4 text-black hover:text-[#ffc107] duration-300'>Home and Cleaning</h2>
                <span className='ms-auto text-gray-500'>(53)</span>
              </div>

              <div className="flex items-center mt-2 cursor-pointer">
                
                <h2 className='px-4 text-black hover:text-[#ffc107] duration-300'>Pest Contro</h2>
                <span className='ms-auto text-gray-500'>(24)</span>
              </div>

              <div className="flex items-center mt-2 cursor-pointer">
                
                <h2 className='px-4 text-black hover:text-[#ffc107] duration-300'>Office Products</h2>
                <span className='ms-auto text-gray-500'>(77)</span>
              </div>

              <div className="flex items-center mt-2 cursor-pointer">
                
                <h2 className='px-4 text-black hover:text-[#ffc107] duration-300'>Beauty Products</h2>
                <span className='ms-auto text-gray-500'>(65)</span>
              </div>

              <div className="flex items-center mt-2 cursor-pointer">
                
                <h2 className='px-4 text-black hover:text-[#ffc107] duration-300'>Health Products</h2>
                <span className='ms-auto text-gray-500'>(29)</span>
              </div>

              <div className="flex items-center mt-2 cursor-pointer">
                
                <h2 className='px-4 text-black hover:text-[#ffc107] duration-300'>Pet Care</h2>
                <span className='ms-auto text-gray-500'>(29)</span>
              </div>

              <div className="flex items-center mt-2 cursor-pointer">
                
                <h2 className='px-4 text-black hover:text-[#ffc107] duration-300'>Home Appliances</h2>
                <span className='ms-auto text-gray-500'>(15)</span>
              </div>

              <div className="flex items-center mt-2 cursor-pointer">
                
                <h2 className='px-4 text-black hover:text-[#ffc107] duration-300'>Baby Care</h2>
                <span className='ms-auto text-gray-500'>(48)</span>
              </div>
                </div>
         




            {/* Product Filters Radio Buttons */}
            <div className='mt-12'>
            <div className="mb-4 bg-[#828bb3] p-4">      
           <h2 className='text-white font-semibold px-2'>Product Filters</h2>     
          </div>
              <h1 className="text-lg font-semibold ps-4 text-black mt-8">BRANDS</h1>
              <div className="flex items-center mt-5 ps-4">
                <input type="radio" id="small" name="size" className="mr-2 accent-[#828bb3] w-5 h-5" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Apple</label>
                <span className='ms-auto text-gray-500'>(29)</span>

              </div>


              <div className="flex items-center mt-2 ps-4">
                <input type="radio" id="small" name="size" className="mr-2 accent-[#828bb3] w-5 h-5" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Asus</label>
                <span className='ms-auto text-gray-500'>(19)</span>

              </div>


              <div className="flex items-center mt-2 ps-4">
                <input type="radio" id="small" name="size" className="mr-2 accent-[#828bb3] w-5 h-5" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Gionee</label>
                <span className='ms-auto text-gray-500'>(29)</span>

              </div>


              <div className="flex items-center mt-2 ps-4">
                <input type="radio" id="small" name="size" className="mr-2 accent-[#828bb3] w-5 h-5" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Micromax</label>
                <span className='ms-auto text-gray-500'>(29)</span>

              </div>


              <div className="flex items-center mt-2 ps-4">
                <input type="radio" id="small" name="size" className="mr-2 accent-[#828bb3] w-5 h-5" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Samsung</label>
                <span className='ms-auto text-gray-500'>(19)</span>

              </div>
            </div>



             

               {/* COLOR Radio Buttons */}
            <div className='mt-12'>
              <h1 className="text-lg font-semibold ps-4 text-black mt-8">COLOR</h1>
              <div className="flex items-center mt-5 ps-4">
                <input type="radio" id="small" name="size" className="mr-2 accent-[#828bb3] w-5 h-5" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Black</label>
                <span className='ms-auto text-gray-500'>(29)</span>

              </div>


              <div className="flex items-center mt-2 ps-4">
                <input type="radio" id="small" name="size" className="mr-2 accent-[#828bb3] w-5 h-5" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Black Leather</label>
                <span className='ms-auto text-gray-500'>(19)</span>

              </div>


              <div className="flex items-center mt-2 ps-4">
                <input type="radio" id="small" name="size" className="mr-2 accent-[#828bb3] w-5 h-5" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Black With Red</label>
                <span className='ms-auto text-gray-500'>(29)</span>

              </div>


              <div className="flex items-center mt-2 ps-4">
                <input type="radio" id="small" name="size" className="mr-2 accent-[#828bb3] w-5 h-5" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Gold</label>
                <span className='ms-auto text-gray-500'>(29)</span>

              </div>


              <div className="flex items-center mt-2 ps-4">
                <input type="radio" id="small" name="size" className="mr-2 accent-[#828bb3] w-5 h-5" />
                <label htmlFor="small" className='text-gray-600 ml-2 text-lg'>Spacegrey</label>
                <span className='ms-auto text-gray-500'>(19)</span>

              </div>
            </div>
          



         {/* Price Range */}
       <div className="mb-4 mt-12">
      <h1 className="text-2xl font-semibold text-gray-600">Price</h1>
      <div className="mb-4 mt-3">
        <input
          type="range"
          className="w-full appearance-none accent-[#828bb3] cursor-pointer h-3 bg-gray-200 rounded-lg outline-none"
          min="0"
          max="100"
          step="1"
          value={price}
          onChange={handlePriceChange}
          style={{
            background: `linear-gradient(to right, #828bb3 0%, #828bb3 ${price}%, #D1D5DB ${price}%, #D1D5DB 100%)`,
          }}
        />

      </div>
      <div className="flex justify-between">
      <span className="text-sm text-gray-500">{price}</span>
        <span className="text-xs text-gray-500">100</span>
      </div>
    </div>

    </div>

         



     {/* default sorting dropdown and buttons*/}
   <div className='lg:px-6 sm:col-span-9'>
   
  <div className="mb-4 bg-[#828bb3] p-3 flex space-x-4 justify-between flex-col md:flex-row md:items-center">

    {/* Dropdown 1 */}
    <div className="relative space-x-4 flex">
      {/* Dropdown button 1 */}
      <button
        id="dropdownDefaultButton1"
        onClick={toggleDropdown1}
        className="text-gray-600 focus:outline-none bg-white font-medium text-sm px-5 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Default Sorting <HiChevronDown className="text-lg ms-3" />
      </button>

      {/* Dropdown menu 1 */}
      <div
        id="dropdown1"
        className={`z-10 ${dropdown1Open ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow sm:w-44 w-32 dark:bg-gray-700 absolute top-full`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton1">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
          </li>
          </ul>
        </div>      
     </div>
    


    {/* Buttons */}
    <div className="md:flex md:flex-col md:items-center md:mt-0 mt-5">

    <div className="flex-grow"></div> {/* Empty div to push buttons to the end */}

    <div className="flex justify-between items-center sm:space-x-3 flex-wrap">

    <button className="flex items-center group justify-center bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 hover:text-white text-white py-3 px-3 rounded">
        <FaLongArrowAltLeft className="mr-1 text-black group-hover:text-white" />
      </button>

      <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500  text-white font-semibold py-2 px-4 rounded">
        1
      </button>
      <button className="bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 hover:text-white text-black font-semibold py-2 px-4 rounded">
        2
      </button>
      <button className="bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 hover:text-white text-black font-semibold py-2 px-4 rounded">
        3
      </button>
      <button className="bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 hover:text-white text-black font-semibold py-2 px-4 rounded">
        4
      </button>
      <button className="flex items-center justify-center group bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 text-white py-3 px-3 rounded">
        <FaLongArrowAltRight className="mr-1 text-black group-hover:text-white" />
      </button>
        </div>
    </div>
    </div>


      {/*6 Shoes Cards */}
      <div className="max-w-[1240px] mx-auto mt-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-14">
          {products.slice(0, 6).map(product => (
            <div key={product.id} className="relative bg-white overflow-hidden rounded-md shadow-md shadow-gray-300">
              <img src={product.image} alt={`Product ${product.id}`} className="w-full" />
              <p className="py-4 px-4 text-gray-800 font-semibold">{product.name}</p>        
              <div className="px-4">
                <div className="font-medium text-gray-800">
                  $ {product.price}
                  <span className="line-through ml-4 text-gray-400">$ 210.00</span>
                </div>
                <div className="flex flex-wrap space-x-3 relative py-5">
                  <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                    <TfiBag className="text-white" />
                  </span>
                  <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                    <FaRegHeart className="text-white" />
                  </span>
                  <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                    <LuRefreshCw className="text-white" />
                  </span>
                  <span className="relative group p-2 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                    <SlCursorMove className="text-white" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>




          <div className="mb-4 bg-[#828bb3] justify-between p-3 flex flex-col md:flex-row md:items-center space-x-4 mt-16">

          {/* Dropdown 3 */}
          <div className="relative space-x-4">
            {/* Dropdown button 3 */}
            <button
              id="dropdownDefaultButton3"
              onClick={toggleDropdown3}
              className="text-gray-600 focus:outline-none bg-white font-medium text-sm px-5 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Show 12 <HiChevronDown className="text-lg ms-3" />
            </button>

            {/* Dropdown menu 3 */}
            <div
              id="dropdown3"
              className={`z-10 ${dropdown3Open ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow sm:w-44 w-32 dark:bg-gray-700 absolute top-full md:top-auto`}
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton3">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
          </div>



           {/* Buttons */}
          <div className="md:flex md:flex-col md:items-center md:mt-0 mt-5">
          
          <div className="flex-grow"></div> {/* Empty div to push buttons to the end */}

          <div className="flex justify-between items-center sm:space-x-3 flex-wrap">

            <button className="flex items-center group justify-center bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 hover:text-white text-white py-3 px-3 rounded">
              <FaLongArrowAltLeft className="mr-1 text-black group-hover:text-white" />
            </button>

            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500  text-white font-semibold py-2 px-4 rounded">
              1
            </button>
            <button className="bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 hover:text-white text-black font-semibold py-2 px-4 rounded">
              2
            </button>
            <button className="bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 hover:text-white text-black font-semibold py-2 px-4 rounded">
              3
            </button>
            <button className="bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 hover:text-white text-black font-semibold py-2 px-4 rounded">
              4
            </button>
            <button className="flex items-center justify-center group bg-gradient-to-r from-white to-white hover:from-orange-500 hover:to-yellow-500 text-white py-3 px-3 rounded">
              <FaLongArrowAltRight className="mr-1 text-black group-hover:text-white" />
            </button>

          </div>
          </div>
              </div>
          </div>
        </div>
      </div>
  </div>


  <WeeklyDeals />
  <Footer />
  <ScrollButton />
      
      
    </>
  )
}

export default ShopCategory