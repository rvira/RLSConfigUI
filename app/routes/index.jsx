import { useLoaderData, json } from 'react-router';
import { getHeaders, sampleRole } from '../../function/helper';
import BlockList from '../components/BlockList';
import style from './../../styles/index.css'


export default function Index() {
  const headerData = useLoaderData();
  return (
    <main id="content">
      <link rel="stylesheet" type="text/css" href={style} />
      <h1>Want to know which endpoints ??</h1>
      <p>Try our early beta and never loose track of your endpoints again!</p>
      <div id="cta">
        <BlockList headerData={headerData} />
      </div>
    </main>
  );
}


export async function loader({ params }) {

  const head = await getHeaders();    //modify this function based on header
  const headDetails = await sampleRole();         // get roles from headers
  let selectedService = head.filter(service => service.roles.some(role => headDetails.includes(role)));

  if (!selectedService) {
    throw json(
      { message: 'You cannot access this page ' },
      { status: 404 }
    );
  }
  return selectedService;
}
