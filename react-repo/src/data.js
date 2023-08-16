import axios from "axios";

export default async function getData() {

    let response = await axios.get(`127.0.0.1:8000`);
    console.log(response);
    return response.data;
}

useEffect(() => {
    response.get('?_limit=10').then((response) => {
        setPosts(response.data);
    });
}, []);