import Link from "next/link";
import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProductInfo from '../components/product_info';


export default function Page() {
  return <div>
    <h1>Inventory Controller</h1>
    <Link href="/dashboard">Dashboard</Link><br />
    <Link href="/about">about</Link>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductInfo />
);