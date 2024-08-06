import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-yellow-500 p-7">
            <div className='text mb-7'>
                <p className='text-center font-semibold text-white text-4xl font-mono'>House Of Hunger</p>
                <p className='text-center font-semibold text-sm text-white font-mono'>The colours & flavours like home</p>
            </div>
            <div className="text-white mb-7">
                <div className="grid grid-cols-4">
                    <div className="flex justify-center items-center text-center"><b>EAT</b></div>
                    <div className="flex justify-center items-center text-center"><b>ENJOY </b></div>
                    <div className="flex justify-center items-center text-center"><b>US</b></div>
                    <div className="flex justify-center items-center text-center"><b>Help</b></div>                   
                </div>

                <div className="grid grid-cols-4">
                    <div className="flex justify-center items-center p-4 text-center"><Link to="/Lunch">Food</Link></div>
                    <div className="flex justify-center items-center p-4 text-center"><Link to ="/Dinner">Snacks </Link></div>
                    <div className="flex justify-center items-center p-4 text-center"><Link to ="/Story">About Us </Link></div>
                    <div className="flex justify-center items-center p-4 text-center">Feedback</div>
                </div>
               
                <div className="grid grid-cols-4">
                    <div className="flex justify-center items-center p-4 text-center"><Link to ="/BookTable">Book Table </Link></div>
                    <div className="flex justify-center items-center p-4 text-center">Offers</div>
                    <div className="flex justify-center items-center p-4 text-center">What's on</div>
                    <div className="flex justify-center items-center p-4 text-center">Cancle Booking</div>
                </div>
                <div className="grid grid-cols-4">
                    <div className="flex justify-center items-center p-4 text-center"><Link to="/Resturant">Resturants</Link></div>
                    <div className="flex justify-center items-center p-4 text-center"><Link to ="/Event">Party Booking </Link></div>
                    <div className="flex justify-center items-center p-4 text-center">Careers</div>
                    <div className="flex justify-center items-center p-4 text-center">Help & Advice</div>
                  </div>
            </div>
            <div className="text-white mb-7 flex justify-center ">
                <div className="text-white mb-7 flex justify-center items-center space-x-6">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 ml-4 mt-1" />
                <p className="text-center">
                    123 Foodie Lane, Flavor Town, FL 12345
                </p>
            </div>

            <div className="mb-7">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6132028237957!2d77.60100307373114!3d12.932563715735633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ad94c1e3bb%3A0x93e6ad6099508a08!2sIBC%20Knowledge%20Park%2C%20Bhavani%20Nagar%2C%20S.G.%20Palya%2C%20Bengaluru%2C%20Karnataka%20560029!5e0!3m2!1sen!2sin!4v1721716489069!5m2!1sen!2sin"
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                ></iframe>
            </div>

            <footer className="text-center mt-7 text-white">
                <p>&copy; 2024 House for Hunger. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;
