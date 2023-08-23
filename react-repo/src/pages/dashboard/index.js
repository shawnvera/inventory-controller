import Link from "next/link";
import Navbar from '../../components/Navbar';
import Header from '../../components/Header'
import CustomerList from '../../components/CustomerList';

export default function Page() {
  return <div>
    <Header />
    <Navbar />
    <CustomerList />
  </div>
}