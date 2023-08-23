import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import GetCustomerData from '../services/DataCustomers';
import Page from '../pages/login/index'
import Button from 'react-bootstrap/Button';

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

    function handleEvent() {
        Page();

    }

    function handleAuthEvent(e) {


    }

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
                    <Navbar.Brand>Select a Customer from the dropdown box.</Navbar.Brand>
                </Container>
            </Navbar>
            <br />

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Customer
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {state.length > 0 ?
                        state.map((item, index) => {

                            return (
                                <>
                                    <Dropdown.Item as="button" onClick={handleEvent}>{item.name}</Dropdown.Item>
                                </>
                            )
                        })
                        : <p>works</p>}
                </Dropdown.Menu >
            </Dropdown>
            <br />

            <Button href="http://localhost:3000/login">
                LOGIN
                </Button>
        </>
    )
}