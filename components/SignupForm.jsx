"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginhtmlForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;

    if (!username || username.length < 4) {
      toast.error("Username must be at least 4 characters long.");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Email is invalid.");
      return;
    }

    if (!password || password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords doesn't match.");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (res.status === 400) {
        const data = await res.json();
        toast.error(data.message);
      }

      if (res.status === 200) {
        setError("");
        router.push("/user/login");
        toast.success("User successfully registered.");
      }
    } catch (error) {
      setError("Something went wrong. Try again!");
      console.log(error);
    }
  };

  return (
    <div className="flex h-fit flex-col items-center gap-3 tracking-wide text-neutral-300">
      <h1 className="text-xl font-bold underline underline-offset-8">SignUp</h1>
      <div className="m-auto w-full max-w-xs rounded-lg border border-solid border-neutral-800 bg-neutral-950 p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block" htmlFor="username">
              Username
            </label>
            <input
              className="red-indigo-700 mb-6 w-full rounded-md border-b-2 border-neutral-300 p-2 text-neutral-950 outline-none focus:bg-neutral-500"
              type="text"
              id="username"
              required
            />
          </div>
          <div>
            <label className="mb-2 block" htmlFor="email">
              Email
            </label>
            <input
              className="red-indigo-700 mb-6 w-full rounded-md border-b-2 border-neutral-300 p-2 text-neutral-950 outline-none focus:bg-neutral-500"
              // type="email"
              id="email"
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
          <div>
            <label className="mb-2 block" htmlFor="password2">
              Confirm Password
            </label>
            <input
              className="mb-6 w-full rounded-md border-b-2 border-neutral-300 p-2 text-neutral-950 outline-none focus:bg-neutral-500"
              type="password"
              id="password2"
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

        <div>
          <div className="flex justify-center">
            <Link
              className="hover:red-pink-700 float-right text-sm text-red-500 hover:text-red-700"
              href="/user/login"
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginhtmlForm;
