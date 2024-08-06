import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/Naitik'; // Replace with your server URL mongodb://localhost:27017/

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const MenuItems = async (category) => {
    try {
        const response = await apiClient.get(`/${category}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching menu items:', error);
        throw error;
    }
};
