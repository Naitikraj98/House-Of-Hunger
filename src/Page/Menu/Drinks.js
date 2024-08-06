import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import "../Menu/Style/Menu.css";

const Drinks= () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get("http://localhost:5000/drinks");
                setMenuItems(response.data);
                console.log("AA", response);
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };

        fetchMenuItems();
    }, []);

    return (
        <div>
            <Header />
            <div className="flex flex-wrap mt-20 justify-center">
                {menuItems.map(item => (
                    <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                        <img className="w-full" src={item.img} alt={item.name} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item.name}</div>
                            <p className="text-gray-700 text-base">{item.dsc}</p>
                            <p className="text-gray-900 font-semibold">Price: {item.price}</p>
                            <p className="text-gray-600">Rating: {item.rate}</p>
                            <p className="text-gray-600">Country: {item.country}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Drinks;
