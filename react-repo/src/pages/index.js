'use client'

import Link from "next/link";
import { React, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductInfo from '../components/ProductInfo';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import NavBar from '../components/Navbar';

export default function Page() {
//   useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
// }, []);
  
  return (
    
    // <MyApp>
<>
      <div className="container-flex">
        <Header />
        <NavBar />
        <Buttons />
        <ProductInfo />
      </div>

</>
      // </MyApp>
    
)}
// useEffect(() => {
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( 
//     <ProductInfo />
// )
// });