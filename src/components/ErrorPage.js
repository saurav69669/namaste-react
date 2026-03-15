import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <h2>Oops! something went wrong.</h2>
      <h4>
        {err.status} - {err.statusText}
      </h4>
    </>
  );
};

export default ErrorPage;
