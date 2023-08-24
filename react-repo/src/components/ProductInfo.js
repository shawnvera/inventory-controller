import Link from "next/link";
import { useState, useEffect } from 'react';
import GetInventoryData from "../services/DataInventory";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import GetCustomerProductFilteredInventoryData from "../services/CustomerProductFilteredInventory";

export default function ProductInfo() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetCustomerProductFilteredInventoryData(); //GetInventoryData();
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
                <ListGroup.Item as="li" key={index} className="d-flex justify-content-between align-items-start">
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