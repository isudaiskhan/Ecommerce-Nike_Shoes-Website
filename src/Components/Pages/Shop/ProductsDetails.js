import React,{useState,useEffect} from 'react'
import bgimage from '../../Assets/banner.jpeg'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import Navbar from '../../Navbar/Navbar';
import image1 from '../../Assets/s-p1.jpg'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { SlDiamond } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import image2 from '../../Assets/review-1.png'
import image3 from '../../Assets/review-2.png'
import image4 from '../../Assets/review-3.png'
import { RxDotsHorizontal } from "react-icons/rx";
import { FaRegCommentDots,} from "react-icons/fa";
import WeeklyDeals from '../../WeeklyDeals/WeeklyDeals';
import Footer from '../../Footer/Footer';
import { FaStar } from 'react-icons/fa';
import ScrollButton from '../../ScrollButton/ScrollButton';




const ProductsDetails = () => {

    const [category, setCategory] = useState('Description');

    useEffect(() => {
      // Add any necessary actions you want to perform when the component mounts or when category changes
    }, [category]);
  
    const handleCategoryClick = (categoryName) => {
      setCategory(categoryName);
      // Add any other actions you want to perform when a category is clicked
    };
  

  const images = [
    { category: 'branding', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },
    { category: 'digital-marketing', text1: 'VIP Auto Tires & Service', text2: 'Photography' },
    { category: 'web', text1: 'VIP Auto Tires & Service', text2: 'eCommerce Magento' },
    { category: 'photography', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },
    { category: 'ecommerce', text1: 'VIP Auto Tires & Service', text2: 'Photography' },
    { category: 'branding', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },
    { category: 'web', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },
    { category: 'photography', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },
    { category: 'ecommerce', text1: 'VIP Auto Tires & Service', text2: 'eCommerce / Magento' },

  ];


  const filteredImages = category === 'all' ? images : images.filter(image => image.category === category);




    
    const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);


  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);

  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
    setIsOpen3(false);
    setIsOpen4(false);

  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen4(false);


  };

  
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
  };


  const closeDropdowns = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
  };


  
    const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };


  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value >= 0 ? value : 0);
  };

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
             <h1 className="sm:text-5xl text-4xl font-bold text-white mt-28 text-center">Products Details page</h1>
             <div className="flex flex-wrap items-center mt-6 justify-center">
             <h2 className="text-white mr-4">Home</h2>
             <RxSlash className="text-white mr-4" />

             <h2 className="text-white mr-4">Shop</h2>
             <RxSlash className="text-white mr-4" />

            
               <h2 className="text-white mr-4">Products Details</h2>

                  </div>
                  </motion.div>
                </div>
             </div>





             <div className="container mx-auto p-4 mt-32">
  <div className="flex flex-wrap">
    <div className="w-full md:w-1/2 p-4">
      <img src={image1} alt="Product Image" className="w-full h-auto" />
    </div>
    <div className="w-full md:w-1/2 md:p-10 p-5 mt-10">
      <h2 className="text-3xl font-semibold">Faded SkyBlu Denim Jeans</h2>
      <p className="text-2xl font-bold bg-gradient-to-r mt-3 from-yellow-500 to-orange-500 bg-clip-text text-transparent">$149.99</p>
      <p className="text-lg mt-4 text-gray-700">Category  <span className='ml-9 text-orange-400'>: Household</span></p>
      <p className="text-lg mt-2 text-gray-700">Availability <span className='ml-6'>: In Stock </span></p>
      <div className='py-7'>
      <p className="border-t py-7 border-t-gray-300 text-gray-500 border-dotted">Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time give you the pleasant warm feeling during the winter.</p>
      </div>



          <div className="flex items-center mt-5">
           
           <label htmlFor="quantity" className="mr-2">Quantity:</label>

          <form className="max-w-xs">
         <div className="relative flex items-center max-w-32">
        <button type="button" onClick={increaseQuantity} id="decrement-button" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
        <FaChevronUp />
        </button>
        <input type="text" id="quantity" value={quantity} name="quantity" onChange={handleQuantityChange}  className="bg-gray-100 border border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required />
        <button type="button" onClick={decreaseQuantity} id="increment-button" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
        <FaChevronDown />
        </button>
    </div>
</form>



</div>




          <div className="flex flex-wrap items-center mt-12">
          <button className="bg-gradient-to-r font-semibold from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white px-6 py-2 rounded-md">ADD TO CART</button>
          
          <div className="ps-5">
                   
                        <div className="flex space-x-3 flex-wrap relative py-5">
                           

                        <span className="relative group p-3 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <SlDiamond className="text-white" />
                            </span>

                            <span className="relative group p-3 cursor-pointer rounded-full bg-[#828bb2] hover:bg-gradient-to-r from-orange-500 to-yellow-500">
                                <FaRegHeart className="text-white" />
                            </span>
                            
                          
                        </div>
                    </div>
          </div>
        

</div>
</div>
</div>





    <div className='py-10 mt-14 max-w-[1240px] mx-auto lg:ps-5 sm:ps-10 sm:pe-10 ps-5 pe-5 lg:pe-5 overflow-hidden'>
    <div className="flex justify-center mb-4 flex-wrap bg-gray-200 p-4">


    <motion.button
    initial={{x:-100,opacity:0}}
    whileInView={{x: 0, opacity: 1}}
    transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
    duration:1}}
    onClick={() => handleCategoryClick('Description')}
            className={`mr-4 ${category === 'Description' ? 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white' : 'bg-white text-black'} px-6 py-2`}>Description</motion.button>


    <motion.button
    initial={{x:-100,opacity:0}}
    whileInView={{x: 0, opacity: 1}}
    transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
    duration:1}}
      onClick={() => handleCategoryClick('Specification')} className={`mr-4 ${category === 'Specification' ? 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white' : 'bg-white text-black'} px-4 py-2`}>Specification</motion.button>


      <motion.button
      initial={{x:100,opacity:0}}
    whileInView={{x: 0, opacity: 1}}
    transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
    duration:1}}
      onClick={() => handleCategoryClick('comments')} className={`mr-4 ${category === 'comments' ? 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white' : 'bg-white text-black'} px-6 py-2`}>Comments</motion.button>

      <motion.button
      initial={{x:100,opacity:0}}
    whileInView={{x: 0, opacity: 1}}
    transition={{delay:0.2, x:{type:"spring", stiffness:60},opacity:{duration:1},ease:"easeIn",
    duration:1}}
      onClick={() => handleCategoryClick('Reviews')} className={`mr-4 ${category === 'Reviews' ? 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white' : 'bg-white text-black'} px-8 py-2`}>Reviews</motion.button>

    </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredImages.map((image, index) => (
    <div key={index} className="relative mt-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200">
      <img src={image.src} className="w-full h-64 object-cover" alt="Video thumbnail" />
      <div className="absolute inset-0 flex justify-center items-center">
       
      </div>

      <div className="absolute bottom-0 left-0 w-full p-4 text-center bg-black bg-opacity-50">
      <h1 className="text-white text-2xl font-semibold">{image.text1}</h1>
        <h2 className="text-gray-400">{image.text2}</h2>
      </div>   
    </div>
  ))}
</div>







    {category === 'Description' && (


    <div className='p-4'>

    <p className='text-gray-500'>
    Beryl Cook is one of Britain's most talented and amusing artists .Beryl's pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named 'Hangover' by Beryl's husband and</p>
    <div className='text-gray-500 mt-5'>
    <p>It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less</p>

    </div>
    </div>
    )}






    {category === 'Specification' && (


    <div className='p-3'>
    <div className="max-w-[1240px] mx-auto">
      <div className="flex flex-wrap justify-between">
    {/* Left Table */}
    <div className="w-full md:w-1/2 px-4">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="text-gray-600 border-b py-3 ps-4">Width</td>
          </tr>
          <tr>
            <td className="text-gray-600 border-b py-3 ps-4">Height</td>
          </tr>
          <tr>
            <td className="text-gray-600 border-b py-3 ps-4">Depth</td>
          </tr>
          <tr>
            <td className="text-gray-600 border-b py-3 ps-4">Weight</td>
          </tr>
          <tr>
            <td className="text-gray-600 border-b py-3 ps-4">Quality checking</td>
          </tr>
          <tr>
            <td className="text-gray-600 border-b py-3 ps-4">Freshness Duration</td>
          </tr>
          <tr>
            <td className="text-gray-600 border-b py-3 ps-4">When packaging</td>
          </tr>
          <tr>
            <td className="text-gray-600 py-3 ps-4">Each Box contains</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Right Table */}
    <div className="w-full md:w-1/2 px-4">
      <table className="w-full">
        <tbody>
          <tr>
            <td className='text-gray-600 border-b py-3 ps-4'>128mm</td>
          </tr>
          <tr>
            <td className='text-gray-600 border-b py-3 ps-4'>508mm</td>
          </tr>
          <tr>
            <td className='text-gray-600 border-b py-3 ps-4'>85mm</td>
          </tr>
          <tr>
            <td className='text-gray-600 border-b py-3 ps-4'>52gm</td>
          </tr>
          <tr>
            <td className='text-gray-600 border-b py-3 ps-4'>yes</td>
          </tr>
          <tr>
            <td className='text-gray-600 border-b py-3 ps-4'>03days</td>
          </tr>
          <tr>
            <td className='text-gray-600 border-b py-3 ps-4'>Without touch of hand</td>
          </tr>
          <tr>
            <td className='text-gray-600 py-3 ps-4'>60pcs</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


</div>
)}





      {category === 'comments' && (

      <div className="flex flex-wrap justify-between max-w-[1240px] mx-auto">

      {/* Comments Section */}
      <div className="w-full md:w-1/2 px-4">
      <section className="bg-white dark:bg-gray-900 py-8 antialiased">
      <div className="max-w-2xl mx-auto sm:px-4">

      <article className="py-6 sm:mt-0 mt-10 text-base bg-white rounded-lg dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
      <div>
        <p className="inline-flex items-center mr-3 text-gray-900 dark:text-white font-semibold"><img
                className="mr-2 rounded-full"
                src={image2}
                alt="Michael Gough" />Michael Gough</p>
                
              <div className="text-sm flex text-gray-500 font-semibold dark:text-gray-400">
      <p>February 4, 2024</p>
      <p className='ml-2'>at</p>
      <p className='ml-2'>12:00 PM</p>
      </div>

      </div>


      <div className="relative inline-block text-left">
      <button
      id="dropdownComment1Button"
      onClick={toggleDropdown1}
      className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      type="button"
      >
      <RxDotsHorizontal className='text-lg' /> 
      <span className="sr-only">Comment settings</span>
      </button>
      {/* Dropdown menu */}
      {isOpen1 && (
      <div
      id="dropdownComment1"
      className="absolute right-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      >
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
      <li>
      <a
        href="#"
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={closeDropdowns}

      >
        Edit
      </a>
      </li>
      <li>
      <a
        href="#"
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={closeDropdowns}

      >
        Remove
      </a>
      </li>
      <li>
      <a
        href="#"
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={closeDropdowns}

      >
        Report
      </a>
      </li>
      </ul>
      </div>
      )}
      </div>



      </footer>
      <p className="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
      instruments for the UX designers. The knowledge of the design tools are as important as the
      creation of the design strategy.</p>
      <div className="flex items-center mt-4 space-x-4">
      <button type="button"
        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
        <FaRegCommentDots className='mr-2' />
        Reply
      </button>
      </div>
      </article>
      <article className="py-6 sm:mt-0 mt-10 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
      <div>
        <p className="inline-flex items-center mr-3 text-gray-900 dark:text-white font-semibold"><img
                className="mr-2 rounded-full"
                src={image3}
                alt="Jese Leos" />Jese Leos</p>
              <div className="text-sm flex text-gray-500 font-semibold dark:text-gray-400">
      <p>February 4, 2024</p>
      <p className='ml-2'>at</p>
      <p className='ml-2'>12:00 PM</p>
      </div>

      </div>



      <div className="relative inline-block text-left">
      <button
      id="dropdownComment2Button"
      onClick={toggleDropdown2}
      className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      type="button"
      >
      <RxDotsHorizontal className='text-lg' /> 
      <span className="sr-only">Comment settings</span>
      </button>
      {/* Dropdown menu */}
      {isOpen2 && (
      <div
      id="dropdownComment2"
      className="absolute right-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      >
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
      <li>
      <a
        href="#"
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={closeDropdowns}

      >
        Edit
      </a>
      </li>
      <li>
      <a
        href="#"
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={closeDropdowns}

      >
        Remove
      </a>
      </li>
      <li>
      <a
        href="#"
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={closeDropdowns}

      >
        Report
      </a>
      </li>
      </ul>
      </div>
      )}
      </div>


      </footer>
      <p className="text-gray-500 dark:text-gray-400">Much appreciated! Glad you liked it ☺️</p>
      <div className="flex items-center mt-4 space-x-4">
      <button type="button"
        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
      <FaRegCommentDots className='mr-2' />

        Reply
      </button>
      </div>
      </article>



      <article className="py-6 sm:mt-0 mt-10 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
      <div>
        <p className="inline-flex items-center mr-3 text-gray-900 dark:text-white font-semibold"><img
                className="mr-2 rounded-full"
                src={image4}
                alt="Bonnie Green" />Bonnie Green</p>
              <div className="text-sm flex text-gray-500 font-semibold dark:text-gray-400">
      <p>February 4, 2024</p>
      <p className='ml-2'>at</p>
      <p className='ml-2'>12:00 PM</p>
      </div>
      </div>


      <div className="relative inline-block text-left">
      <button
      id="dropdownComment3Button"
      onClick={toggleDropdown3}
      className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      type="button"
      >
      <RxDotsHorizontal className='text-lg' /> 
      <span className="sr-only">Comment settings</span>
      </button>
      {/* Dropdown menu */}
      {isOpen3 && (
      <div
      id="dropdownComment3"
      className="absolute right-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      >
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
      <li>
      <a
        href="#"
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={closeDropdowns}

      >
        Edit
      </a>
      </li>
      <li>
      <a
        href="#"
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={closeDropdowns}

      >
        Remove
      </a>
      </li>
      <li>
      <a
        href="#"
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={closeDropdowns}

      >
        Report
      </a>
      </li>
      </ul>
      </div>
      )}
      </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
      <div className="flex items-center mt-4 space-x-4">
      <button type="button"
        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
        <FaRegCommentDots className='mr-2' />

        Reply
      </button>
      </div>
      </article>


      </div>
      </section>
      </div>




      {/* Contact Form */}
      <div className="w-full md:w-1/2 px-4 mt-16">
      <div className="md:max-w-lg mx-auto sm:p-3">
      <h2 className="text-2xl font-semibold mb-6">Post a comment</h2>
      <form>
      <div className="mb-4">

      <input
      type="text"
      id="name"
      name="name"
      className="w-full px-4 py-2 border focus:outline-none focus:border-[#ffba00]"
      placeholder="Your Full Name"
      required
      />
      </div>
      <div className="mb-4">

      <input
      type="email"
      id="email"
      name="email"
      className="w-full px-4 py-2 border focus:outline-none focus:border-[#ffba00]"
      placeholder="Email Address"
      required
      />
      </div>
      <div className="mb-4">

      <input
      type="tel"
      id="phone"
      name="phone"
      className="w-full px-4 py-2 border focus:outline-none focus:border-[#ffba00]"
      placeholder="Phone Number"
      required
      />
      </div>
      <div className="mb-4">

      <textarea
      id="message"
      name="message"
      rows="4"
      className="w-full px-4 py-2 border focus:outline-none focus:border-[#ffba00]"
      placeholder="Message"
      required
      ></textarea>
      </div>
      <div className="flex justify-end">
      <button
      type="submit"
      className="px-6 py-2 text-white focus:outline-none bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500"
      >
      SUBMIT NOW
      </button>
      </div>
      </form>
      </div>
      </div>




      </div>
      )}





      {category === 'Reviews' && (

      <div className="flex flex-wrap justify-between max-w-[1240px] mx-auto">

      {/* Comments Section */}
      <div className="w-full lg:w-1/2 sm:px-4">
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-12 antialiased">
      <div class="max-w-2xl mx-auto px-4">
      <div className="sm:flex items-center">
    {/* First div */}
    <div className="bg-gray-200 sm:px-20 py-6">
        <p className="text-2xl font-semibold text-center">Overall</p>
        <p className="text-5xl font-bold text-center mt-1 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">4.0</p>
        <p className="text-gray-500 font-semibold mt-2 text-center">(03 Reviews)</p>
    </div>
    
    <div className="flex items-center justify-between sm:ml-10 ml-2">
   
    {/* Left side */}
    <div className="flex flex-col sm:mt-0 mt-8">
    <div className='font-semibold text-xl'>
    <h3 className='mb-3'>Based on 3 Reviews</h3>
    </div>
        {[...Array(5)].map((_, rowIndex) => (
            <div key={rowIndex} className="flex items-center justify-between w-full mb-1">
                <p className="text-gray-500">5 Star</p>
                <div className="flex items-center">
                    {[...Array(5)].map((_, starIndex) => (
                        <FaStar key={starIndex} className="text-yellow-500 mr-1" />
                    ))}
                </div>
                <p className="text-gray-500 dark:text-white">01</p>
            </div>
        ))}
    </div>
</div>
</div>






<article className="py-6 sm:mt-0 mt-10 text-base bg-white rounded-lg dark:bg-gray-900">
<footer className="flex justify-between items-center mb-2">
<div className="flex items-center">
    <div className="flex flex-wrap items-center">
        <img
            className="mr-2 rounded-full"
            src={image2}
            alt="Michael Gough"
        />
        <p className="text-gray-900 dark:text-white font-semibold">
            Michael Gough
            <div className="flex items-end space-x-2 mt-2">
        <FaStar className="mb-1 text-yellow-400" />
        <FaStar className="mb-1 text-yellow-400" />
        <FaStar className="mb-1 text-yellow-400" />
        <FaStar className="mb-1 text-yellow-400" />
        <FaStar className="mb-1 text-yellow-400" />

    </div>
        </p>
    </div>
   
</div>


        <div className="relative inline-block text-left">
        <button
        id="dropdownComment1Button"
        onClick={toggleDropdown1}
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
        >
        <RxDotsHorizontal className='text-lg' /> 
        <span className="sr-only">Comment settings</span>
        </button>
        {/* Dropdown menu */}
        {isOpen1 && (
        <div
        id="dropdownComment1"
        className="absolute right-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
        <li>
        <a
          href="#"
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={closeDropdowns}

        >
          Edit
        </a>
        </li>
        <li>
        <a
          href="#"
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={closeDropdowns}

        >
          Remove
        </a>
        </li>
        <li>
        <a
          href="#"
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={closeDropdowns}

        >
          Report
        </a>
        </li>
        </ul>
        </div>
        )}
        </div>



        </footer>
        <p className="text-gray-500 dark:text-gray-400">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
        instruments for the UX designers. The knowledge of the design tools are as important as the
        creation of the design strategy.</p>
        <div className="flex items-center mt-4 space-x-4">
        <button type="button"
          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
          <FaRegCommentDots className='mr-2' />
          Reply
        </button>
        </div>
        </article>



        <article className="py-6 sm:mt-0 mt-10 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
        <div className="flex flex-wrap items-center">
        <img
            className="mr-2 rounded-full"
            src={image3}
            alt="Jese Leos"
        />
        <p className="text-gray-900 dark:text-white font-semibold">
            Jese Leos
            <div className="flex items-end space-x-2 mt-2">
        <FaStar className="mb-1 text-yellow-400" />
        <FaStar className="mb-1 text-yellow-400" />
        <FaStar className="mb-1 text-yellow-400" />
        <FaStar className="mb-1 text-yellow-400" />
        <FaStar className="mb-1 text-yellow-400" />

    </div>
        </p>
    </div>


        <div className="relative inline-block text-left">
        <button
        id="dropdownComment3Button"
        onClick={toggleDropdown3}
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
        >
        <RxDotsHorizontal className='text-lg' /> 
        <span className="sr-only">Comment settings</span>
        </button>
        {/* Dropdown menu */}
        {isOpen3 && (
        <div
        id="dropdownComment3"
        className="absolute right-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
        <li>
        <a
          href="#"
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={closeDropdowns}

        >
          Edit
        </a>
        </li>
        <li>
        <a
          href="#"
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={closeDropdowns}

        >
          Remove
        </a>
        </li>
        <li>
        <a
          href="#"
          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={closeDropdowns}

        >
          Report
        </a>
        </li>
        </ul>
        </div>
        )}
        </div>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
        <div className="flex items-center mt-4 space-x-4">
        <button type="button"
          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
          <FaRegCommentDots className='mr-2' />

          Reply
        </button>
        </div>
        </article>
        <article className="py-6 sm:mt-0 mt-10 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer className="flex justify-between items-center mb-2">
        <div className="flex flex-wrap items-center">
        <img
            className="mr-2 rounded-full"
            src={image4}
            alt="Bonnie Green"
        />
        <p className="text-gray-900 dark:text-white font-semibold">
            Bonnie Green
            <div className="flex items-end space-x-2 mt-2">
        <FaStar className="mb-1 text-yellow-400" />
        <FaStar className="mb-1 text-yellow-400" />
        <FaStar className="mb-1 text-yellow-400" />
        <FaStar className="mb-1 text-yellow-400" />
        <FaStar className="mb-1 text-yellow-400" />

    </div>
        </p>
    </div>

      <div className="relative inline-block text-left">
      <button
      id="dropdownComment4Button"
      onClick={toggleDropdown4}
      className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      type="button"
      >
      <RxDotsHorizontal className='text-lg' /> 
      <span className="sr-only">Comment settings</span>
      </button>
      {/* Dropdown menu */}
      {isOpen4 && (
      <div
      id="dropdownComment4"
      className="absolute right-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      >
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
      <li>
      <a
        href="#"
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={closeDropdowns}

      >
        Edit
      </a>
      </li>
      <li>
      <a
        href="#"
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={closeDropdowns}
      >
        Remove
      </a>
      </li>
      <li>
      <a
        href="#"
        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={closeDropdowns}
      >
        Report
      </a>
      </li>
      </ul>
      </div>
      )}
      </div>

      </footer>
      <p className="text-gray-500 dark:text-gray-400">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
      <div className="flex items-center mt-4 space-x-4">
      <button type="button"
        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
        <FaRegCommentDots className='mr-2' />

        Reply
      </button>
      </div>
      </article>
      </div>
      </section>
      </div>






      {/* Contact Form */}
      <div className="w-full lg:w-1/2 px-4 mt-8">
      <div className="max-w-lg mx-auto sm:p-2">
      <h2 className="text-2xl font-semibold mb-4">Add a Review</h2>

      <div className="flex items-center justify-start flex-wrap">
          <p className="text-gray-500">Your Rating:</p>
          <div className="flex items-center ml-3">
              {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400 mr-1" />
              ))}
          </div>
          <p className="text-gray-500 ml-3 dark:text-white">Outstanding</p>
      </div>

      <form>
      <div className="mb-4 mt-6">

      <input
      type="text"
      id="name"
      name="name"
      className="w-full px-4 py-2 border focus:outline-none focus:border-[#ffba00]"
      placeholder="Your Full Name"
      required
      />
      </div>
      <div className="mb-4">

      <input
      type="email"
      id="email"
      name="email"
      className="w-full px-4 py-2 border focus:outline-none focus:border-[#ffba00]"
      placeholder="Email Address"
      required
      />
      </div>
      <div className="mb-4">

      <input
      type="tel"
      id="phone"
      name="phone"
      className="w-full px-4 py-2 border focus:outline-none focus:border-[#ffba00]"
      placeholder="Phone Number"
      required
      />
      </div>
      <div className="mb-4">

      <textarea
      id="message"
      name="message"
      rows="4"
      className="w-full px-4 py-2 border focus:outline-none focus:border-[#ffba00]"
      placeholder="Message"
      required
      ></textarea>
      </div>
      <div className="flex justify-end">
      <button
      type="submit"
      className="px-6 py-2 text-white focus:outline-none bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500"
      >
      SUBMIT NOW
      </button>
      </div>
      </form>
      </div>
      </div>



      </div>
      )}


      </div>



      </div>



      <WeeklyDeals />
      <Footer />
      <ScrollButton />


      
    </>
  )
}

export default ProductsDetails