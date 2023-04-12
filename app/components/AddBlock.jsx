import { Link } from "@remix-run/react";
import style from './AddBlock.css'

function AddBlock({ block_name, url }) {
    return (
        <div>
            <link rel="stylesheet" type="text/css" href={style} />
            <Link to={`endpoints/${block_name}`}>
                <button className="custom-btn btn-4"><span>{block_name}</span></button>
            </Link>
        </div>
    );
}

export default AddBlock;
