import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import Footer from "../Footer";
import image from '../../Component/Assets/Prequel-lead.webp'


const Resturant = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get("http://localhost:5000/Restaurant");
                setItems(response.data);
            } catch (error) {
                console.log('Error:', error)
            }
        };
        fetchItems();
    }, []);


    return (
        <>
            <Header />
            <div>
                <img src={image} className="w-full h-screen mt-20 object-cover" alt="Description" />
            </div>
            <div className="flex flex-wrap mt-20 justify-center">
                {items.map(item => (
                    <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                        <img className="img-dim" src={item.image} alt={item.name} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{item.name}</div>
                            <p className="text-gray-700 text-base">{item.address}</p>

                        </div>
                    </div>
                ))}
            </div>
            <div>
                ljcosdvsadc
            </div>
            <Footer />

        </>
    )
}
export default Resturant