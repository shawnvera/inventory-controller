import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import GetCustomerData from '../services/DataCustomers';

export default function NavBar() {
    const [state, setState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const data = await GetCustomerData();
          setState(data);
        }
        fetchData();
        return () => { }
      }, [])

    return (
        <>
            <Navbar className="bg-body-tertiary text-center">
                <Container>
                    <Navbar.Brand>Inventory Controller</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Select a Customer ID from the dropdown box.</Navbar.Brand>
                </Container>
            </Navbar>
            <br />

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Customer ID
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {state.length > 0 ?
                        state.map((item, index) => {

                            return (
                                <>
                                    <Dropdown.Item href="#">{item.name}</Dropdown.Item>
                                </>
                            )
                        })
                    : <p>works</p> }
                </Dropdown.Menu >
            </Dropdown>

            <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary" type="button">Button</button>
            </div>
        </>
)
}









{/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Select a customer or login.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Customer ID
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="http://127.0.0.1:8000/customer/">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div> */}
