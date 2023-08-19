import axios from "axios";
import useState from 'react';

export default async function GetCustomerData() {
    let inventory;
    let customer;
    let user;

    let response = await axios.get(`http://127.0.0.1:8000/customer/`);

    inventory = response.data.inventory;
    customer = response.data.customer;
    user = response.data.user;
    
    return response.data;

};
