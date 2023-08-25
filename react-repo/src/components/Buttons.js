import AddProductData from "../services/AddProduct"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Buttons() {

    function handleAddClick() {
        AddProductData();
    }
    return (
        <>
            <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a product.</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Please enter information about the new product.</p>

                        <div className="w-screen h-screen">
                            <div className="flex">
                                <form className="mx-auto border-2 bg-mtgray" onSubmit={handleAddClick}>

                                    <div className="flex justify-between m-2 items-center space-x-2">
                                        <label htmlFor="name">Name:</label>
                                        <input
                                            className="border"
                                            type="text"
                                            id="name"
                                            required
                                            onChange={(e) => handleChange("name", e.target.value)} />
                                    </div>

                                    <div className="flex justify-between m-2 items-center space-x-2">
                                        <label htmlFor="description">Description:</label>
                                        <input
                                            className="border"
                                            type="text"
                                            id="description"
                                            required
                                            onChange={(e) => handleChange("description", e.target.value)} />
                                    </div>

                                    <div className="flex justify-between m-2 items-center space-x-2">
                                        <label htmlFor="quantity">Quantity:</label>
                                        <input
                                            className="border"
                                            type="text"
                                            id="quantity"
                                            required
                                            onChange={(e) => handleChange("quantity", e.target.value)} />
                                    </div>
                                    </form>
                            </div>
                        </div>



                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary" onClick={handleAddClick}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </>
    )
};







{/* <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
            {/* <button type="button" className="col-md-4 btn mt-3 m-5 btn-info btn-lg">Filter</button> */}
{/* <button type="button" onClick={handleAddClick} className="col-md-4 btn mt-3 m-5 btn-success btn-md">Add</button>
            <button type="button" className="col-md-4 btn mt-3 m-5 btn-warning btn-md">Update</button> */}
{/* <button type="button" className="col-md-4 btn mt-3 m-5 btn-danger btn-md">Delete</button> */ }
{/* </div > */ }
{/* // </div > */ }
{/* // </div > * /} */ }