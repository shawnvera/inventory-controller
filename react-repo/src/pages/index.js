import Link from "next/link";
import { React, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductInfo from '../components/ProductInfo';
import Header from '../components/Header';


export default function Page() {
  return (
  <>
  
  <div className="container-flex"> 
    <Header />
    <Link href="/dashboard">Dashboard</Link><br /> <br />
    {/* <Link href="/components/product_info">Products</Link> */}
    <ProductInfo />
  </div>

  </>
)}
// useEffect(() => {
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( 
//     <ProductInfo />
// )
// });