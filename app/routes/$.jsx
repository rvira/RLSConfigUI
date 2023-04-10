import { json } from 'react-router'
import axios from 'axios'
import { getAccessRole } from '../../function/helper';


export async function action({ request }) {

    // const par = (params['*'] || '')
    // console.log("ccccc",par)
    const path = request?.headers?.get("Referer").split("/").pop()

    if (getAccessRole(path)) {
        const result = await request;
        const res = await axios.post("https://hkdk.events/5qKuXBcslFYE", result)
        return res.data;
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

export async function loader({ request }) {

    // const par = (params['*'] || '')
    // console.log("ccccc", par)
    const path = request?.headers?.get("Referer").split("/").pop()

    if (getAccessRole(path)) {
        const res = await axios.get("https://fakestoreapi.com/products/1")
        return res.data;
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

