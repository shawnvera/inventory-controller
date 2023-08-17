import axios from "axios";
import useState from 'react';

export default async function getData() {

    let response = await axios.get(`http://127.0.0.1:8000/inventory/`);
    console.log(response);
    // response.get('?_limit=10').then((response) => {
    //     const [state, setState] = useState(initialState);
    //     setState(response.data);
    return response.data;
    // });
};

// useEffect(() => {
//     getData();
// }, []);