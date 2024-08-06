import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from '../Page/Header';
import Footer from "./Footer";


const Event = () => {
  const [menuItems, setMenuItems] = useState([]);


  useEffect(() => {
    const MenuItem = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Facilities");
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error', error);
      }
    };
    MenuItem();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-wrap mt-20 justify-center">
        {menuItems.map(item => (
          <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="img-dim" src={item.image} alt={item.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.event}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
              {/* <p className="text-gray-900 font-semibold">Price: {item.price}</p>
              <p className="text-gray-600">Rating: {item.rate}</p>
              <p className="text-gray-600">Country: {item.country}</p> */}
            </div>
          </div>
        ))}
      </div >
      <Footer/>

    </>
  )
}

export default Event