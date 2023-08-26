import Link from "next/link";
import { useState, useEffect } from 'react';
import GetInventoryData from "../services/DataInventory";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import GetCustomerProductFilteredInventoryData from "../services/CustomerProductFilteredInventory";
import CloseButton from 'react-bootstrap/CloseButton';
import axios from 'axios';
import DeleteProduct from "../services/DeleteProduct";
import Form from 'react-bootstrap/Form';
import authHeader from "../services/auth.headers";

export default function ProductInfo() {
  // state to remember products.
  const [state, setState] = useState([]);

  const [quantity, setQuantity] = useState(null);
  const [item, setItem] = useState({});

  // state to remember the item id to be used for deletion axios call.
  const [deleteID, setDeleteID] = useState(null);

  // useEffect to GET filtered customer data for products.
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetInventoryData();
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

  const handleUpdate = async (e) => {
    const headers = authHeader()
    let formField = new FormData()

    formField.append('quantity', quantity)

    await axios({
      method: 'put',
      url: `http://127.0.0.1:8000/prod_update/`,
      data: item,
      headers: headers
    }).then((response) => {
    })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
  }

  const newFunc = (id, qty) => {
    setItem({
      id: id,
      quantity: qty
    })
  }

  return (
    <>
      {state.length > 0 ?
        state.map((item, index) => {
          return (
            <>
              <ListGroup as="ul">
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold" key={index}>{item.name}</div>
                    {item.description}
                  </div>
                  <br />

                  <Form.Control className="text-center" size="sm" type="number" placeholder={item.quantity}
                    onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => newFunc(item.id, e.target.value)} />

                  <CloseButton type="button" onClick={(e) => handleDeleteClick(e)} value={item.id} />

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