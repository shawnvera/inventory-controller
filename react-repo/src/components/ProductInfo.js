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
  // state to remember products.
  const [state, setState] = useState([]);

  // state to remember the item id to be used for deletion axios call.
  const [deleteID, setDeleteID] = useState(null);

  // useEffect to GET filtered customer data for products.
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetCustomerProductFilteredInventoryData();
      setState(data);
    }
    fetchData();
    return () => { }
  }, [])


  // useEffect to run the delete of a product if the value of deleteID has been changed from null.
  useEffect(() => {
    if (deleteID !== null) {
      DeleteProduct(deleteID); 
      window.location.reload();
    } 
  }, [deleteID])

  // function to handle the click of the delete button for product.
  const handleDeleteClick = (e) => {
    setDeleteID(e.target.value);
  }

  return (
    <>
      {state.length > 0 ?
        state.map((item, index) => {
          let ID;
          return (
            <>
              <ListGroup as="ul">
                <ListGroup.Item as="li" key={index} className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.name}</div>
                    {item.description}
                  </div>
                  <br />
                  {/* <div className="container-fluid">
                    <div className="row-md-6">
                      <div className="col-md-3"> */}
                  <Form.Control className="text-center" size="sm" type="number" placeholder={item.quantity} />
                  <CloseButton type="button" onClick={(e)=>handleDeleteClick(e)} value={item.id}/>
                  {/* <div className="col-md-1">
                  </div>
                  </div>
                  </div>
                  </div> */}
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