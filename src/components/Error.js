import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="errorpage">
      <h1>OOPS!!! </h1>
      <h2>Something went wrong !!!!!!</h2>
      <h3>{err.status}</h3>
      <h3>{err.statusText}</h3>
    </div>
  );
};

export default Error;
