import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <>
      <div className="container m-auto max-w-2xl py-24 text-neutral-300">
        <div className="m-4 mb-4 rounded-lg border border-solid border-neutral-800 bg-neutral-950 px-6 py-24 shadow-md md:m-0">
          <div className="flex justify-center">
            <FaExclamationTriangle className="fas fa-exclamation-triangle fa-5x text-6xl text-yellow-400"></FaExclamationTriangle>
          </div>
          <div className="text-center">
            <h1 className="mb-2 mt-4 text-2xl font-bold">Page Not Found</h1>
            <p className="mb-10 text-lg">
              The page you are looking for does not exist.
            </p>
            <Link
              href="/"
              className="mb-6 w-full rounded border-neutral-300 bg-red-500 px-4 py-2 font-bold transition-all duration-300 hover:bg-red-700 hover:shadow-button hover:shadow-red-700"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </>
  );
};
export default NotFoundPage;
