export default function Buttons() {
    return (
        <>
        <div className="container-fluid text-center">
            <div className="row">
            <button type="button" className="col-md-4 btn mt-3 m-5 btn-info btn-lg">Filter</button>
            <button type="button" className="col-md-4 btn mt-3 m-5 btn-secondary btn-lg">Add</button>
            <button type="button" className="col-md-4 btn mt-3 m-5 btn-warning btn-lg">Update</button>
            <button type="button" className="col-md-4 btn mt-3 m-5 btn-danger btn-lg">Delete</button>
            </div>
            </div>
        </>
    )
};