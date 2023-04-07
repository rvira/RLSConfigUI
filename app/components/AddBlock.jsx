import { Link } from "@remix-run/react";
import style from './AddBlock.css'

function AddBlock({ block_name, url }) {
    return (
        <div>
            <link rel="stylesheet" type="text/css" href = {style} /> 
            <Link to={`endpoints/${block_name}`} style={{textDecoration:"none"}}><button type="block" className="block">{block_name}</button></Link>
        </div>
    );
}

export default AddBlock;
