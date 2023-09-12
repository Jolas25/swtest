import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error__page">
      <div className="error__img">
        <img
          src="https://teeturtle-s3-web.s3.amazonaws.com/accounts/1/products/1986199881364/Its-Over-Anakin_800x800_SEPS1-1000x1000.jpg"
          alt="error"
        />
      </div>
      <h1>{error.status}</h1>
      <h2>{error.statusText || "Something goes wrong!"}</h2>
      <Link to={"/"}>Go to Main page</Link>
    </div>
  );
}
