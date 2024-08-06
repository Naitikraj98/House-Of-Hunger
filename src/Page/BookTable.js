import React, { useState } from "react";
import axios from "axios";
import Image from "../Component/Assets/Book-Table.jpg";

const BookTable = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobileNumber: "",
        email: "",
        numberOfGuests: "0",
        occasion: "Select",
        reservationDate: "",
        reservationTime: ""
    });

    const options = ["Select", "Birthday", "Marriage", "Anniversary", "Other"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:6000/reservations", formData);
            alert("Reservation successful!");
            setFormData({
                name: "",
                mobileNumber: "",
                email: "",
                numberOfGuests: 1,
                occasion: "Select",
                reservationDate: "",
                reservationTime: ""
            });
        } catch (error) {
            console.error("Error making reservation:", error);
            alert("Error making reservation. Please try again.");
        }
    };

    return (
        <div className="relative h-screen">
            <img
                src={Image}
                alt="Background"
                className="absolute inset-0 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
                <div className="w-full max-w-md p-6 rounded-md mt-20 shadow-md bg-white bg-opacity-50">
                    <h2 className="text-3xl text-indigo-50 font-bold text-center text-gray-800 mb-4 bg-opacity-50">
                        Book a Table
                    </h2>
                    <form onSubmit={handleSubmit}>
                        {[
                            { label: "Name", type: "text", name: "name" },
                            { label: "Mobile No", type: "text", name: "mobileNumber" },
                            { label: "Email id", type: "email", name: "email" },
                            { label: "Number Of Guests", type: "number", name: "numberOfGuests", min: "1" },
                            { label: "Date", type: "date", name: "reservationDate" },
                            { label: "Time", type: "time", name: "reservationTime" },
                        ].map(({ label, type, name, ...rest }) => (
                            <div className="mb-4" key={name}>
                                <label
                                    htmlFor={name}
                                    className="block text-sm font-medium text-indigo-50 text-gray-700"
                                >
                                    {label}
                                </label>
                                <input
                                    type={type}
                                    id={name}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    {...rest}
                                />
                            </div>
                        ))}
                        <div className="mb-4">
                            <label htmlFor="occasion" className="block text-sm font-medium text-indigo-50 text-gray-700">
                                Occasion
                            </label>
                            <select
                                id="occasion"
                                name="occasion"
                                value={formData.occasion}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                {options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookTable;

