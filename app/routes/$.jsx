import { json } from 'react-router'
import axios from 'axios'


export async function action({ request, params }) {

    const par = (params['*'] || '')
    // console.log("ccccc",par)

    const result = await request.json();
    const res = await axios.post("https://hkdk.events/5qKuXBcslFYE", result)
    return json(res.data);
}

export async function loader({ request, params }) {

    const par = (params['*'] || '')
    // console.log("ccccc", par)

    const res = await axios.get("https://fakestoreapi.com/products")
    return json(res.data);
}