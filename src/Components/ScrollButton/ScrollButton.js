import React,{useState,useEffect} from 'react'
import { FaArrowUp } from 'react-icons/fa';


const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 200px
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>

<div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 p-3 rounded-full text-white focus:outline-none transition duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
      
    </>
  )
}

export default ScrollButton
