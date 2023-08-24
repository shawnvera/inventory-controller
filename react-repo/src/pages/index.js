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
import LoginButton from "../components/LoginButton";

export default function Page() {
  return (
    // <MyApp>
    <>
      <div className="container-flex">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />

        <LoginButton />
      </div>

    </>
    // </MyApp>
  )
}