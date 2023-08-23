import axios from "axios";

export default async function GetCustomerData() {
    let response = await axios.get(`http://127.0.0.1:8000/customer/`);
    return response.data;
};
