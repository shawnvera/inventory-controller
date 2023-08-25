import Link from "next/link";
import { useState, useEffect } from 'react';
import GetInventoryData from "../services/DataInventory";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import GetCustomerProductFilteredInventoryData from "../services/CustomerProductFilteredInventory";
import CloseButton from 'react-bootstrap/CloseButton';
import { Alert } from "react-bootstrap";
import swal from "sweetalert";
import DeleteProduct from "../services/DeleteProduct";
import Form from 'react-bootstrap/Form';


export default function ProductInfo() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetCustomerProductFilteredInventoryData();
      setState(data);
    }
    fetchData();
    return () => { }
  }, [])

  let ID;

  function handleDeleteClick(ID) {
    DeleteProduct(ID);
    window.location.reload();

  }

  return (
    <>
      {state.length > 0 ?
        state.map((item, index) => {
          let ID;
          return (
            <>
              <ListGroup as="ol" numbered>
                <ListGroup.Item as="li" key={index} className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.name}</div>
                    {item.description}
                  </div>
                  <br />
                  <Form.Control className="text-center" size="sm" type="number" placeholder={item.quantity} />
                    <button onClick={()=>{handleDeleteClick(ID)}}>Delete</button>
                </ListGroup.Item>
                </ListGroup>
              </>
              )
                })
              : <p>There are no products for this customer.</p>
                }
            </>
          )
        }