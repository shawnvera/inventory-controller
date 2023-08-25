import axios from "axios";
import ProductInfo from "../components/ProductInfo";

export default async function DeleteProduct(deleteID) {
    let response = await axios.delete(`http://127.0.0.1:8000/prod_destroy/${deleteID}/`);
    return response.data;
};
