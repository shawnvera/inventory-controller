import Link from "next/link";
import { useState, useEffect } from 'react';
import getData from "src/data";

export default function ProductInfo() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setState(data);
    }
    console.log(state);
    fetchData();
    return () => { }
  }, [])

  return (
    <>
        <div className="container-fluid">
            <div className="row">
              { state.length > 0 ?
                        state.map((item, index) => {
                            return (
                                <>
                                    <div className="col-xs-4">
                                        <h5 className="card-title">${item.name} ${item.quantity}</h5>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </>
                        )})
            : <p>works</p>
                }
        </div>
    </div >
    </>
)
}
  
  
//   <div>
//     <h1>Testing</h1>
//     <Link href="/dashboard">Dashboard</Link>
//     <Link href="/">Home</Link>
//   </div>
// }