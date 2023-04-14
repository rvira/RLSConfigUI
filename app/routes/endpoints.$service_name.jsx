import { json } from "react-router";
import FormGenerator from "../components/FormGenerator";
import { Link, useCatch } from "@remix-run/react";
import { getAccessRole } from "../../function/helper";

import style from './../../styles/index.css'

export default function DisplayPage() {
  return (
    <main>
      <link rel="stylesheet" type="text/css" href={style} />
      <FormGenerator />
    </main>
  );
}

export async function loader({ params }) {
  const accessRole = await getAccessRole(params.service_name);
  if (!accessRole) {
    throw json(
      { message: 'You cannot access the page' },
      {
        status: 404,
        statusText: 'No access found',
      }
    );
  }
  return params;
}

export function CatchBoundary() {
  const caughtResponse = useCatch();

  const message = caughtResponse.data?.message || 'Data not found.';

  return (
    <main className="info-message">
    <h1>An error occurred!</h1>
    <p>{message}</p>
    <p>
      Back to <Link to="/">safety</Link>!
    </p>
  </main>
  );
}

export function ErrorBoundary({ error }) {
  console.log(error)
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>{error.message}</p>
      <p>
        Back to <Link to="/">safety</Link>!
      </p>
    </main>
  );
}