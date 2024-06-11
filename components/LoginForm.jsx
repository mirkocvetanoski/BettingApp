import Link from "next/link";

const LoginhtmlForm = () => {
  return (
    <div className="flex h-fit">
      <div className="m-auto w-full max-w-xs rounded-lg border border-solid border-neutral-800 bg-neutral-950 p-5">
        <form>
          <div>
            <label className="mb-2 block text-neutral-300" htmlFor="username">
              Username or Email
            </label>
            <input
              className="red-indigo-700 mb-6 w-full rounded-md border-b-2 border-neutral-300 p-2 outline-none focus:bg-neutral-500"
              type="text"
              id="username"
            />
          </div>
          <div>
            <label className="mb-2 block text-neutral-300" htmlFor="password">
              Password
            </label>
            <input
              className="mb-6 w-full rounded-md border-b-2 border-neutral-300 p-2 text-neutral-300 outline-none focus:bg-neutral-500"
              type="password"
              id="password"
            />
          </div>
          <button
            className="mb-6 w-full rounded border-neutral-300 bg-red-500 px-4 py-2 font-bold text-neutral-300 transition-all duration-300 hover:bg-red-700 hover:shadow-button hover:shadow-red-700"
            type="submit"
          >
            Submit
          </button>
        </form>
        <footer>
          <div className="flex justify-between gap-4">
            <Link
              className="hover:red-pink-700 float-left text-sm text-neutral-300"
              href="/"
            >
              Forgot Password?
            </Link>
            <Link
              className="hover:red-pink-700 float-right text-sm text-red-500 hover:text-red-700"
              href="/user/signup"
            >
              Create Account
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginhtmlForm;
