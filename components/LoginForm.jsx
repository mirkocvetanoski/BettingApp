"use client";

import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { signIn, getProviders, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProviders();
  }, []);

  return (
    <div className="flex h-fit flex-col items-center gap-3 tracking-wide text-neutral-300">
      <h1 className="text-xl font-bold underline underline-offset-8">Login</h1>
      <div className="m-auto w-full max-w-xs rounded-lg border border-solid border-neutral-800 bg-neutral-950 p-5">
        <form>
          <div>
            <label className="mb-2 block" htmlFor="username">
              Username or Email
            </label>
            <input
              className="red-indigo-700 mb-6 w-full rounded-md border-b-2 border-neutral-300 p-2 text-neutral-950 outline-none focus:bg-neutral-500"
              type="text"
              id="username"
              required
            />
          </div>
          <div>
            <label className="mb-2 block" htmlFor="password">
              Password
            </label>
            <input
              className="mb-6 w-full rounded-md border-b-2 border-neutral-300 p-2 text-neutral-950 outline-none focus:bg-neutral-500"
              type="password"
              id="password"
              required
            />
          </div>
          <button
            className="mb-6 w-full rounded border-neutral-300 bg-red-500 px-4 py-2 font-bold transition-all duration-300 hover:bg-red-700 hover:shadow-button hover:shadow-red-700"
            type="submit"
          >
            Submit
          </button>
        </form>

        {providers &&
          Object.values(providers).map((provider, index) => (
            <button
              key={index}
              onClick={() =>
                signIn(provider.id, {
                  callbackUrl: "/",
                })
              }
              className="mb-6 flex w-full justify-center rounded border-neutral-300 bg-slate-500 px-4 py-2 font-bold transition-all duration-300 hover:bg-slate-700 hover:shadow-button hover:shadow-slate-700"
              type="submit"
            >
              <span className="flex items-center gap-3">
                <FaGoogle />
                Login with Google
              </span>
            </button>
          ))}

        <div>
          <div className="flex justify-between gap-4">
            <Link className="hover:red-pink-700 float-left text-sm" href="/">
              Forgot Password?
            </Link>
            <Link
              className="hover:red-pink-700 float-right text-sm text-red-500 hover:text-red-700"
              href="/user/signup"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;