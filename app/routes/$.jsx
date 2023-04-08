import { json } from 'react-router'
import axios from 'axios'
import { getAccessRole } from '../../data/notes';


export async function action({ request, params }) {

    const par = (params['*'] || '')
    // console.log("ccccc",par)
    const path = request.headers.get("Referer").split("/").pop()

    if (getAccessRole(path)) {
        const result = await request.json();
        const res = await axios.post("https://hkdk.events/5qKuXBcslFYE", result)
        return json(res.data);
    }
    else {
        throw json(
            { message: 'You cannot access the page' },
            {
                status: 404,
                statusText: 'No access found',
            }
        );
    }

}

export async function loader({ request, params }) {

    const par = (params['*'] || '')
    // console.log("ccccc", par)
    const path = request.headers.get("Referer").split("/").pop()

    if (SomeComponent(path)) {
        const res = await axios.get("https://fakestoreapi.com/products")
        return json(res.data);
    }
    else {
        throw json(
            { message: 'You cannot access the page' },
            {
                status: 404,
                statusText: 'No access found',
            }
        );
    }
}

