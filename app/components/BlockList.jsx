import AddBlock from "./AddBlock";
import styles from './BlockList.css'

function BlockList({ headerData }) {

    return (
        <ol>
            <link rel="stylesheet" type="text/css" href = {styles} /> 
            {headerData.map((header) => (
                <li key={header.service_name}>
                    <AddBlock block_name={header.service_name} url = {header.url} />
                    <br />
                </li>
            ))}
        </ol>
    );

}

export default BlockList;