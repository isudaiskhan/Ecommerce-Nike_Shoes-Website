import React,{useState} from 'react'
import Navbar from '../../Navbar/Navbar'
import {motion} from 'framer-motion';
import { RxSlash } from "react-icons/rx";
import bgimage from '../../Assets/banner.jpeg'
import { FaMinus, FaPlus, FaTimes,FaAngleDown } from 'react-icons/fa';
import image1 from '../../Assets/cart.jpg'
import Footer from '../../Footer/Footer';
import ScrollButton from '../../ScrollButton/ScrollButton';



const ShoppingCart = () => {
  const [products, setProducts] = useState([
    { id: 1, image: image1, name: 'Banana', price: 20, quantity: 1 },
    { id: 2, image: image1, name: 'Potatoes', price: 15, quantity: 1 },
    { id: 3, image: image1, name: 'Brocoli', price: 20, quantity: 1 },
  ]);

  const increaseQuantity = (id) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    }));
  };

  const decreaseQuantity = (id) => {
    setProducts(products.map(product => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    }));
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
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
             <h1 className="sm:text-5xl text-4xl font-bold text-white text-center mt-28">Shopping Cart page</h1>
             <div className="flex flex-wrap items-center justify-center mt-6">
             <h2 className="text-white mr-4">Home</h2>
             <RxSlash className="text-white mr-4" />

             <h2 className="text-white mr-4">Shop</h2>
             <RxSlash className="text-white mr-4" />

            
               <h2 className="text-white mr-4">Shopping Cart</h2>

                  </div>
                  </motion.div>
                </div>
             </div>

             <div className="w-full max-w-[1240px] sm:px-5 px-7 mx-auto">
         {/* For small screens, display as grid */}
         <div className="sm:hidden grid grid-cols-1 gap-4 mt-28">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-md rounded-md p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="w-1/2">
                  <img src={product.image} alt={`Product ${product.id}`} className="h-20 w-20 rounded-full" />
                </div>
                <div className="w-1/2">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaMinus onClick={() => decreaseQuantity(product.id)} className="cursor-pointer text-4xl select-none rounded-full bg-gray-200/80 text-gray-600 p-3" />
                  <span className="px-2 py-1">{product.quantity}</span>
                  <FaPlus onClick={() => increaseQuantity(product.id)} className="cursor-pointer text-4xl rounded-full select-none bg-gray-200/80 text-gray-600 p-3" />
                </div>
                <div>
                  <p className="text-gray-600">${product.price * product.quantity}</p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button onClick={() => removeProduct(product.id)} className="text-red-500">
                  <FaTimes className="text-red-500 p-2 text-4xl rounded-full bg-gray-200/80" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* For larger screens, display as table */}
        <table className="hidden sm:table min-w-full divide-y divide-gray-200 mt-28">
          <thead className="bg-gray-50">
            <tr className='border-b border-b-slate-500'>
              <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                Products
              </th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                Total
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-gray-500 tracking-wider">
              Handle
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {products.map(product => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={product.image} alt={`Product ${product.id}`} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${product.price}
                </td>
                <td className="px-6 py-4 mt-6 whitespace-nowrap  flex items-center">
                  <FaMinus onClick={() => decreaseQuantity(product.id)} className="cursor-pointer text-4xl select-none rounded-full bg-gray-200/80 text-gray-600 p-3" />
                  <span className="px-2 py-1">{product.quantity}</span>
                  <FaPlus onClick={() => increaseQuantity(product.id)} className="cursor-pointer text-4xl rounded-full select-none bg-gray-200/80 text-gray-600 p-3" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ${product.price * product.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-lg font-medium">
                  <button onClick={() => removeProduct(product.id)}>
                    <FaTimes className="text-red-500 p-2 text-4xl rounded-full bg-gray-200/80" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-right border-b border-b-gray-300 mt-4 pe-10 font-medium">Total: ${calculateTotal()}</div>

    <div className='flex items-center justify-between py-7 border-b border-b-gray-300 mt-5'>

    <div className="flex items-center justify-between flex-wrap w-full">
  {/* First Button */}
  <div>
    <button className="font-semibold border hover:border-transparent rounded text-black bg-gray-200 hover:bg-[#ffba00] duration-500 hover:text-white px-8 py-2">
      UPDATE CART
    </button>
  </div>

  {/* Input and Other Buttons */}
  <div className="flex items-center flex-wrap space-x-4 sm:space-y-0 space-y-3 mt-4 sm:mt-0 ml-auto">
    <input
      type="text"
      placeholder="Enter coupon code"
      className="px-5 py-2 border sm:w-60 w-full border-gray-300 focus:outline-none"
    />
    <button className="bg-gradient-to-r font-semibold from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white px-12 py-2.5">
      APPLY
    </button>
    <button className="font-semibold border hover:border-transparent rounded text-black bg-gray-200 hover:bg-[#ffba00] duration-500 hover:text-white px-8 py-2.5">
      CLOSE COUPON
    </button>
  </div>
</div>


</div>

 {/* Card */}
<div className="flex flex-wrap gap-4 sm:mt-0 mt-10 py-7 justify-end">
  <div className="sm:p-8 flex flex-col justify-between w-full sm:w-1/2 md:w-2/5 lg:w-1/3">
    
    {/* Subtotal Section */}
    <div className="pt-4 mb-4 flex justify-between items-start">
      <div>
        <h2 className="font-semibold mb-2 text-black">Subtotal</h2>
      </div>
      <p className="text-black">	$2160.00</p>
    </div>
 





{/* Shipping Section */}
<div className="border-t border-gray-300 pt-4 mb-4 flex justify-between items-start">
    <div>
        <h2 className="font-semibold mb-2 text-black">Shipping</h2>
    </div>
    <div className="flex flex-col items-end">
        <label className="inline-flex items-center py-1">
            <span className="text-gray-500">Flat Rate: $5.00</span>
            <input type="radio" className="form-radio h-5 w-5 ml-3 accent-[#828bb3] text-indigo-600 transition duration-150 ease-in-out mr-2" name="radioGroup" />

        </label>
        <label className="inline-flex items-center py-1">
            <span className="text-gray-500">Free Shipping</span>
            <input type="radio" className="form-radio h-5 w-5 ml-3 accent-[#828bb3] text-indigo-600 transition duration-150 ease-in-out mr-2" name="radioGroup" />

        </label>
        <label className="inline-flex items-center py-1">
            <span className="text-gray-500">Flat Rate: $10.00</span>
            <input type="radio" className="form-radio h-5 w-5 ml-3 accent-[#828bb3] text-indigo-600 transition duration-150 ease-in-out mr-2" name="radioGroup" />

        </label>
        <label className="inline-flex items-center py-1">
            <span className="text-gray-500">Local Delivery: $2.00</span>
            <input type="radio" className="form-radio h-5 w-5 ml-3 accent-[#828bb3] text-indigo-600 transition duration-150 ease-in-out mr-2" name="radioGroup" />

        </label>
    </div>
</div>





<div className="mb-8 relative">
 
 <select defaultValue="" className="shadow appearance-none border bg-gray-200 rounded w-full py-2 pl-4 pr-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="country">
     <option value="" disabled>Select your country</option>
     <option value="usa">United States</option>
     <option value="canada">Canada</option>
     <option value="uk">United Kingdom</option>
     <option value="australia">Australia</option>
     {/* Add more options for other countries */}
 </select>
 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
     <FaAngleDown />
 </div>
</div>



<div className="mb-8 relative">
 
 <select defaultValue="" className="shadow appearance-none bg-gray-200 border rounded w-full py-2 pl-4 pr-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="country">
     <option value="" disabled>Select Your State</option>
     <option value="usa">United States</option>
     <option value="canada">Canada</option>
     <option value="uk">United Kingdom</option>
     <option value="australia">Australia</option>
     {/* Add more options for other countries */}
 </select>
 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
     <FaAngleDown />
 </div>
</div>



<div className="mb-4">
<input className="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 placeholder:text-gray-600 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phonenumber" type="number" placeholder="Postcode/Zip" />

</div>


<div className="flex items-center justify-end mt-5 duration-300">
            <button className="font-semibold border hover:border-transparent rounded text-black bg-gray-200 hover:bg-[#ffba00] duration-500 hover:text-white px-8 py-2">UPDATE DETAILS</button>

            </div>




           
  </div>
  
</div>
   <div className="flex items-center border-t pb-36 py-16 justify-end duration-300 pe-3">
            <button className="font-semibold sm:text-base text-sm rounded text-black bg-gray-200 px-8 py-2.5">CONTINUE SHOPPING</button>
            <button className="bg-gradient-to-r sm:text-base text-sm font-semibold from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white px-6 py-2.5">PROCEED TO CHECKOUT</button>


            </div>
      </div>


</div>



<Footer />
<ScrollButton />
      
    </>
  )
}

export default ShoppingCart