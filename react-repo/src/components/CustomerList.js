import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import GetCustomerData from '../services/DataCustomers';
import useRouter from 'next/router';
import client from '../services/api.request';

export default function CustomerList() {
    // const router = useRouter();
    console.log(client);
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
            <div className="Container-fluid">
                <div className="row">
                    {state.length > 0 ?
                        state.map((item, index) => {
                            return (
                                <>
                                    <div className="col-md-3">
                                        <Card style={{ width: '12rem' }}>
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>{item.description}</Card.Text>
                                                <Button variant="primary" href="Post: {router.query.slug}">View Inventory</Button>
                                            </Card.Body>
                                        </Card>
                                    </div >
                                </>
                            )
                        }
                        )
                        : <p>Please refresh page.</p>
                    }
                </div>
            </div>
        </>
    )
}