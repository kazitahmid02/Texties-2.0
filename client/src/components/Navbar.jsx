import React, { useEffect, useState } from 'react';
import { styles } from '../styles'; // Importing styles for consistent design
import { navLinks } from '../constants'; // Importing navigation links
import { menu, close } from '../assets'; // Importing menu and close icons
import { Link } from 'react-router-dom'; // Importing Link component for routing

const Navbar = () => {
  // State variables for managing active state, toggle state, and scroll state
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scrolling effect
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true); // Set scrolled to true when scrolled down
      } else {
        setScrolled(false); // Set scrolled to false when scrolled to top
      }
    };

    window.addEventListener('scroll', handleScroll); // Adding scroll event listener

    return () => window.removeEventListener('scroll', handleScroll); // Removing event listener when component unmounts
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-white/50 backdrop-blur-md' : 'bg-transparent backdrop-blur-md'
      } border-b border-gray-200`}
    >
      <div className='w-full flex justify-between flex-row items-center max-w-7xl mx-auto'>
        {/* Logo and Brand Title */}
        <div className='flex items-center md:space-x-20'>
          {/* Logo Button */}
          <div className='transform hover:scale-105 transition-transform duration-300'>
            <Link
              to='/'
              className='flex items-center gap-2'
              onClick={() => {
                setActive('');
                window.scrollTo(0, 0); // Scroll to top on logo click
              }}
            >
              <img src="./logo-no-background.png" className='w-10 h-auto' alt="logo" />
            </Link>
          </div>
        </div>

        {/* Main Navigation Links */}
        <ul className='list-none hidden sm:flex flex-row gap'>
          {/* Mapping through navigation links */}
          {navLinks.map(nav => (
            <li
              key={nav.id}
              className=' flex items-center rounded-md bg-black p-3 text-center transform hover:scale-105 transition-transform duration-300'
              style={{ margin: '0 8px' }}
            >
              <a
                href={`#${nav.id}`}
                className={`${
                  active === nav.title ? 'text-yellow-500' : 'text-white'
                } hover:text-yellow-500 text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)} // Set active link on click
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Menu Icon for Small Screens */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} // Toggle menu on click
          />

          {/* Dropdown Menu for Small Screens */}
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-white/50 backdrop-blur-md`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {/* Mapping through navigation links */}
              {navLinks.map(nav => (
                <li
                  key={nav.id}
                  className='flex items-center rounded bg-black p-3 text-center transform hover:scale-105 transition-transform duration-300'
                >
                  <a
                    href={`#${nav.id}`}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? 'text-yellow-500' : 'text-white-500'
                    }`}
                    onClick={() => {
                      setToggle(!toggle); // Toggle menu on click
                      setActive(nav.title); // Set active link on click
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
