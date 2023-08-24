import Link from "next/link";
import Navbar from '../../components/Navbar';
import Header from '../../components/Header'
import CustomerList from '../../components/CustomerList';
import ProductInfo from "../../components/ProductInfo";

export default function ProdList() {
    return (
        <>
            <div>
                <Header />
                <ProductInfo />
            </div>
        </>
    )
}