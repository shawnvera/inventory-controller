import AddProductData from "../services/AddProduct"

export default function Buttons() {

    function handleAddClick() {
        GetInventoryData();

    }
    return (
        <>
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
            {/* <button type="button" className="col-md-4 btn mt-3 m-5 btn-info btn-lg">Filter</button> */}
            <button type="button" onClick={handleAddClick} className="col-md-4 btn mt-3 m-5 btn-success btn-md">Add</button>
            <button type="button" className="col-md-4 btn mt-3 m-5 btn-warning btn-md">Update</button>
            {/* <button type="button" className="col-md-4 btn mt-3 m-5 btn-danger btn-md">Delete</button> */}
                </div>
            </div>
            </div>
        </>
    )
};