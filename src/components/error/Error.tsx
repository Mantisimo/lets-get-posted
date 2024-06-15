import { useRouteError } from "react-router-dom";
import { isRouteError } from ".";

export const ErrorPage = () => {
  const error = useRouteError();

  const unexpectedError = "An unexpected error has occurred.";

  const errorMessage = isRouteError(error) 
    ? error.message || error.statusText || unexpectedError
    : "An unexpected error has occurred.";

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
