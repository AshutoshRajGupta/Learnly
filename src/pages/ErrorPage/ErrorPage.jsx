import { Link } from "react-router-dom";
import page404 from "../../assets/404.jpg";

export const ErrorPage = () => {
  return (
    <div className="m-auto  flex flex-col justify-center items-center gap-2 p-6">
      <img src={page404} alt="" className="max-h-[calc(100vh-13rem)] w-auto" />
      <h2 className="text-lg">
        The requested URL was not found on this server.
      </h2>
      <Link to="/" className="bg-sky-500 px-4 py-2 font-semibold rounded-1 ">
        Go to Home
      </Link>
    </div>
  );
};
