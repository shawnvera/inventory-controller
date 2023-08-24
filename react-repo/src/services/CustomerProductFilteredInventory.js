import axios from "axios";

export default async function GetCustomerProductFilteredInventoryData() {
    let response = await axios.get(`http://127.0.0.1:8000/prod_filter/`);
    return response.data;
};
