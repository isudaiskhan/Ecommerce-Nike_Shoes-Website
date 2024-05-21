import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { FaSearch, FaTimes } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { TfiBag } from "react-icons/tfi";
import { BsSearch } from "react-icons/bs";
import { motion } from 'framer-motion';



const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('HOME');
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenu(false);
    window.scrollTo(0, 0);

    const shopPaths = ['/ShopCategory', '/ProductsDetails', '/ProductsCheckout', '/ShoppingCart', '/Confirmation'];
    const blogPaths = ['/blog'];
    const pagesPaths = ['/login', '/tracking', '/elements'];
    const contactPaths = ['/contact'];

    if (shopPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('SHOP');
    } else if (blogPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('BLOG');
    } else if (pagesPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('PAGES');
    } else if (contactPaths.some(path => location.pathname.includes(path))) {
      setActiveMenuItem('CONTACT');
    } else {
      setActiveMenuItem('HOME');
    }
  }, [location]);

  const navItems = [
    { id: 'home', label: 'HOME', link: '/' },
    {
      id: 'shopcategory',
      label: 'SHOP',
      submenu: [
        { label: 'SHOP CATEGORY', link: '/ShopCategory' },
        { label: 'PRODUCTS DETAILS', link: '/ProductsDetails' },
        { label: 'PRODUCTS CHECKOUT', link: '/ProductsCheckout' },
        { label: 'SHOPPING CART', link: '/ShoppingCart' },
        { label: 'CONFIRMATION', link: '/Confirmation' }
      ]
    },
    {
      id: 'blog',
      label: 'BLOG',
      submenu: [
        { label: 'BLOG', link: '/blog' },
        { label: 'BLOG DEALS', link: '/blogdeals' }
      ]
    },
    {
      id: 'pages',
      label: 'PAGES',
      submenu: [
        { label: 'LOGIN', link: '/login' },
        { label: 'TRACKING', link: '/tracking' },
        { label: 'ELEMENTS', link: '/elements' }
      ]
    },
    { id: 'contact', label: 'CONTACT', link: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const toggleSubmenu = (id) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <>
      <nav className={`sticky top-0 w-full bg-white z-50 transition duration-300 ${hasScrolled ? 'top-0 shadow-xl' : ''}`}>
        <div className="relative max-w-[1240px] mx-auto sm:ps-9 sm:pe-9 ps-5 pe-5 xl:ps-0 xl:pe-0">
          <div className="xl:py-4 py-6 mx-auto flex items-center justify-between lg:justify-start">
            <div>
              <NavLink to="/">
                <img src={logo} alt="Logo" />
              </NavLink>
            </div>
            <div className="hidden lg:flex items-center space-x-24 ml-auto">
              <ul className="flex items-center space-x-3">
                {navItems.map((item) => (
                  <li key={item.id} className="relative p-5 group cursor-pointer">
                    <NavLink
                      to={item.link}
                      onClick={() => setMobileMenu(false)}
                      className={`text-gray-600 text-sm duration-300 font-semibold hover:text-[#ffba00] ${activeMenuItem === item.label ? 'text-[#ffba00]' : ''}`}
                      activeclassname="text-[#81c408] underline"
                       style={{ color: activeMenuItem === item.label ? '#ffba00' : '' }} // Apply color based on activeMenuItem
                     >
                      {item.label}
                    </NavLink>
                    {item.submenu && (
                      <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg w-60 z-10 pt-4">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.label} className="border-b hover:border-transparent hover:bg-[#ffba00]">
                            <NavLink
                              to={subItem.link}
                              className="block w-full p-5 px-7 font-semibold text-[#ffba00] text-xs hover:text-white transition-colors duration-300"
                               activeclassname="text-[#81c408]"

                            >
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-7 mt-2">
                <div className="relative text-gray-600">
                  <NavLink to='#'>
                    <TfiBag className='text-xl hover:text-[#ffba00] duration-300' />
                  </NavLink>
                </div>
                <div className="relative">
                  <button onClick={toggleSearch} className="text-white focus:outline-none">
                    <BsSearch className="text-gray-600 hover:text-[#ffba00] text-xl duration-300" />
                  </button>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 60, duration: 1 }}
                      className="fixed inset-0 bg-gray-200 bg-opacity-90 z-50 flex justify-center items-center"
                    >
                      <div className="bg-white rounded-lg shadow-md w-2/3 relative">
                        <input
                          type="text"
                          placeholder="Search"
                          className="py-4 rounded-md w-full pl-5 pr-12"
                        />
                        <button onClick={toggleSearch} className="absolute top-0 right-0 p-4 bg-gray-300 rounded-md">
                          <FaSearch className="text-gray-500 text-2xl" />
                        </button>
                      </div>
                      <button onClick={toggleSearch} className="absolute top-4 right-3 mt-2 mr-2">
                        <FaTimes className="text-gray-600 text-2xl" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
            <div className="block lg:hidden">
              <button onClick={toggleMobileMenu}>
                {mobileMenu ? (
                  <IoMdMenu className="text-3xl text-gray-600" />
                ) : (
                  <IoMdMenu className="text-4xl text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {mobileMenu && (
        <div className="fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 60, duration: 1 }}
            className="absolute right-0 min-h-screen w-full sm:w-3/5 py-4 px-8 shadow md:w-1/3 bg-gradient-to-r from-orange-500 to-yellow-500 z-50"
          >
            <button className="absolute top-0 right-0 mt-4 mr-4" onClick={closeMobileMenu}>
              <AiOutlineClose className="text-4xl text-white hover:text-gray-300" />
            </button>
            <ul className="mt-8 flex flex-col space-y-5">
              {navItems.map((item) => (
                <li key={item.id} className="relative p-3 select-none group cursor-pointer">
                  {!item.submenu ? (
                    <NavLink
                      to={item.link}
                      onClick={() => setMobileMenu(false)}
                      className={`text-white text-sm duration-300 font-semibold hover:text-[#ffba00] ${activeMenuItem === item.label ? 'text-[#ffba00]' : ''}`}
                      activeclassname="text-[#81c408] underline"
                       style={{ color: activeMenuItem === item.label ? '#ffba00' : '' }} // Apply color based on activeMenuItem
                     >
                      {item.label}
                    </NavLink>
                  ) : (
                    <div
                      onClick={() => toggleSubmenu(item.id)}
                      className={`text-white text-sm duration-300 font-semibold hover:text-[#ffba00] ${activeMenuItem === item.label ? 'text-[#ffba00]' : ''}`}
                       style={{ color: activeMenuItem === item.label ? '#ffba00' : '' }} // Apply color based on activeMenuItem
                     >
                      {item.label}
                      {openSubmenu === item.id && (
                        <ul className="pt-2">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.label} className="border-b bg-white shadow-lg hover:border-transparent hover:bg-[#ffba00]">
                              <NavLink
                                to={subItem.link}
                                onClick={() => setMobileMenu(false)}
                                className="block w-full px-7 text-[#ffba00] text-xs p-4 hover:text-white transition-colors duration-300"
                                activeclassname="text-[#81c408]"
                               >
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center space-x-7 mt-4">
              <div className="relative text-white ms-3">
                <NavLink to='#'>
                  <TfiBag className='text-xl hover:text-[#7da82e]' />
                </NavLink>
              </div>
              <div className="relative">
                <button onClick={toggleSearch} className="text-white focus:outline-none">
                  <BsSearch className="text-white mt-1.5 text-xl" />
                </button>
                {isSearchOpen && (
                  <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 60, duration: 1 }}
                    className="fixed inset-0 bg-gray-200 bg-opacity-90 z-50 flex justify-center items-center"
                  >
                    <div className="bg-white rounded-lg shadow-md w-2/3 relative">
                      <input
                        type="text"
                        placeholder="Search"
                        className="py-4 rounded-md w-full pl-5 pr-12"
                      />
                      <button onClick={toggleSearch} className="absolute top-0 right-0 p-4 bg-gray-300 rounded-md">
                        <FaSearch className="text-gray-500 text-2xl" />
                      </button>
                    </div>
                    <button onClick={toggleSearch} className="absolute top-4 right-3 mt-2 mr-2">
                      <FaTimes className="text-gray-600 text-2xl" />
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;