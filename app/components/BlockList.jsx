import AddBlock from "./AddBlock";
import styles from './BlockList.css'

function BlockList({ headerData }) {

    return (
        <div>
            <link rel="stylesheet" type="text/css" href={styles} />
            {headerData.map((header) => (
                <AddBlock block_name={header.service_name} url={header.url} key={header.service_name} />
            ))}
        </div>
    );

}

export default BlockList;