import axios from "axios";
import useState from 'react';

export default async function GetInventoryData() {
    let response = await axios.get(`http://127.0.0.1:8000/inventory/`);
    return response.data;
};
