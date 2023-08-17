import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";

function Header() {
  const [state, dispatch] = useGlobalState();

  return (
    <div>
        <div>
        <h1 className="container-fluid p-3 mb-2 bg-dark-subtle text-dark text-center">Inventory Controller</h1>
        </div>
    </div>
  );
}

export default Header;