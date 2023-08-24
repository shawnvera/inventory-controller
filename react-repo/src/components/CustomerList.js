import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import GetCustomerData from '../services/DataCustomers';
import { useRouter } from 'next/navigation';
import ProdList from '../pages/prod_list';

export default function CustomerList() {
    const [state, setState] = useState([]);
    const router = useRouter();
    // const [customerProducts, setCustomerProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetCustomerData();
            setState(data);
        }
        fetchData();
        return () => { }
    }, [])

    function handleEvent(e) {
        router.push('/prod_list')
    }

    return (
        <>
            <div className="Container-fluid">
                {state.length > 0 ?
                    state.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="row">
                                    <div className="col-md-3">
                                        <Card style={{ width: '12rem' }}>
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>{item.description}</Card.Text>
                                                <Button variant="primary" onClick={handleEvent}>View Inventory</Button>
                                            </Card.Body>
                                        </Card>
                                    </div >
                                </div>
                            </>
                        )
                    }
                    )
                    : <p>Please refresh page.</p>
                }
            </div>
        </>
    )
}