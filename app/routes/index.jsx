import { useLoaderData, json } from 'react-router';
import { getHeaders, sampleRole } from '../../data/notes';
import BlockList from '../components/BlockList';
import style from './../index.css'


export default function Index() {
  const headerData = useLoaderData();
  return (
    <main id="content">
      <h1>Want to know which endpoints ??</h1>
      <p>Try our early beta and never loose track of your endpoints again!</p>
      <div><link rel="stylesheet" type="text/css" href={style} /> </div>
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
      { message: 'Could not find note for Id ' },
      { status: 404 }
    );
  }
  return selectedService;
}