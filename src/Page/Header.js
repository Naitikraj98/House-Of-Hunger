import React, { useState } from 'react';
import Logo from '../Component/Assets/Logo.png';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const closeDropdown = () => setDropdownOpen(false);

    return (
        <div className="container-flex bg-yellow-400 flex justify-between items-center p-1 fixed top-0 left-0 w-full z-50">
            <img src={Logo} alt='logo' className='h-12' />
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-block p-2 rounded-lg text-gray-500 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 md:hidden"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <ul className={`flex-col md:flex-row md:flex ${menuOpen ? 'flex' : 'hidden'} ml-auto text-sm font-medium text-center text-gray-500 dark:border-gray-700 dark:text-black font-bold`}>
                <li className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="inline-flex items-center p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                        aria-expanded={dropdownOpen}
                    >
                        Menu
                        <svg className="ml-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                            <a href="/breakfast" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeDropdown}>Breakfast</a>
                            <a href="/lunch" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeDropdown}>Lunch</a>
                            <a href="/drinks" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeDropdown}>Drinks</a>
                            <a href="/dinner" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeDropdown}>Dinner</a>
                        </div>
                    )}
                </li>
                <li className="me-2">
                    <a href="/Event" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Events</a>
                </li>
                <li className="me-2">
                    <a href="/Story" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Our Story</a>
                </li>
                {/* <li className="me-2">
                    <a href="More" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">About</a>
                </li> */}
            </ul>
        </div>
    );
};

export default Header;
