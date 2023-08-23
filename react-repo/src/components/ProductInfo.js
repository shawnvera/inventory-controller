import Link from "next/link";
import { useState, useEffect } from 'react';
import GetInventoryData from "../services/DataInventory";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

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
              <ListGroup as="ol" numbered>
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.name}</div>
                    {item.description}
                  </div>
                  <Badge bg="primary" pill>
                    {item.quantity}
                  </Badge>
                </ListGroup.Item>
                </ListGroup>
              </>
              )
                })
              : <p>Please select a customer.</p>
                }
            </>
          )
        }

                {/* <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <Badge bg="primary" pill>
                    14
                  </Badge>
                </ListGroup.Item>
              </ListGroup> */}





              {/* <div key={Date.now} className="container-fluid border shadow-md bg-body-tertiary rounded text-center">
                <div className="row border border-dark">
                  <div className="col-md-4 border border-dark">{item.name}</div>
                  <div className="col-md-4 border border-dark">{item.quantity}</div>
                  <div className="col-md-4 border border-dark">{item.description}</div>
                </div>
              </div> */}


//   <div>
//     <h1>Testing</h1>
//     <Link href="/dashboard">Dashboard</Link>
//     <Link href="/">Home</Link>
//   </div>
// }