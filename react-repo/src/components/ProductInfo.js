import Link from "next/link";
import { useState, useEffect } from 'react';
import GetInventoryData from "../services/DataInventory";

export default function ProductInfo() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetInventoryData();
      setState(data);
    }
    fetchData();
    return () => { }
  }, [])

  return (
    <>
      {state.length > 0 ?
        state.map((item, index) => {

          return (
            <>
              <div key={Date.now} className="container-fluid border shadow-md bg-body-tertiary rounded text-center">
                <div className="row border border-dark">
                  <div className="col-md-4 border border-dark">{item.name}</div>
                  <div className="col-md-4 border border-dark">{item.quantity}</div>
                  <div className="col-md-4 border border-dark">{item.description}</div>
                </div>
              </div>
            </>
          )
        })
        : <p>works</p>
      }
    </>
  )
}


//   <div>
//     <h1>Testing</h1>
//     <Link href="/dashboard">Dashboard</Link>
//     <Link href="/">Home</Link>
//   </div>
// }