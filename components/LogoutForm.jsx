"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

const LogoutForm = () => {
  return (
    <div className="flex h-fit flex-col items-center gap-3 tracking-wide text-neutral-300">
      <h1 className="text-xl font-bold underline underline-offset-8">Logout</h1>
      <div className="m-auto w-full max-w-xs rounded-lg border border-solid border-neutral-800 bg-neutral-950 p-5">
        <Link
          href="/"
          className="mb-6 block w-full rounded border-neutral-300 bg-teal-500 px-4 py-2 text-center font-bold transition-all duration-300 hover:bg-teal-700 hover:shadow-button hover:shadow-teal-700"
        >
          Go back
        </Link>
        <button
          onClick={() => {
            signOut({ callbackUrl: "/" });
          }}
          className="w-full rounded border-neutral-300 bg-red-500 px-4 py-2 font-bold transition-all duration-300 hover:bg-red-700 hover:shadow-button hover:shadow-red-700"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default LogoutForm;
