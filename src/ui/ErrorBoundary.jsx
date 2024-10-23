import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function ErrorBoundary() {
  const error = useRouteError();

  console.log(error);

  let jsx = (
    <div>
      <p>An Error Occured</p>;
    </div>
  );
  if (isRouteErrorResponse(error) && error.status === 404) {
    jsx = (
      <div>
        <NavBar />
        <div className="flex h-[50vh] flex-col items-center justify-center text-3xl font-extrabold">
          <h1>Error {error.status}</h1>
          <p>This page does not exist.. Use the navigation to find your way</p>
        </div>
        <Footer />
      </div>
    );
  }

  return jsx;
}

export default ErrorBoundary;
