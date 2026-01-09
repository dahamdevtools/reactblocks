import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-sm h-fit flex flex-col items-center gap-8">
      <div className="w-full h-fit flex flex-col pb-4">
        <p className="text-center text-neutral-400">Welcome Back</p>
        <h3 className="text-2xl font-semibold text-center">
          Sign in to your Account
        </h3>
      </div>
      <div className="w-full h-fit flex flex-col gap-5">
        <div className="w-full h-fit flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            spellCheck="false"
            placeholder="Enter your Email..."
            className="w-full h-12 px-6 rounded-full bg-neutral-200/50 dark:bg-neutral-800/60"
          />
        </div>
        <div className="w-full h-fit flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <div className="w-full h-12 pe-1.5 rounded-full flex items-center bg-neutral-200/50 dark:bg-neutral-800/60">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              spellCheck="false"
              placeholder="Enter your Password..."
              className="w-full px-6"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="w-9 flex items-center justify-center shrink-0 aspect-square rounded-full cursor-pointer text-lg text-neutral-500 bg-neutral-200 dark:bg-neutral-800"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button className="w-full h-fit flex items-center justify-end cursor-pointer text-neutral-500">
            Forgot Password?
          </button>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col gap-3">
        <button className="w-full h-fit px-6 py-3 rounded-full cursor-pointer bg-neutral-200 dark:bg-neutral-800">
          Login
        </button>
        <div className="w-full h-fit flex items-center gap-3">
          <div className="w-full h-0.5 bg-neutral-200/50 dark:bg-neutral-800/60"></div>
          <span className="w-fit h-fit flex text-neutral-400 dark:text-neutral-600">
            OR
          </span>
          <div className="w-full h-0.5 bg-neutral-200/50 dark:bg-neutral-800/60"></div>
        </div>
        <button className="w-full h-fit px-6 py-3 rounded-full cursor-pointer bg-neutral-200 dark:bg-neutral-800">
          Continue with Google
        </button>
      </div>
      <p className="w-full text-center">
        <span className="text-neutral-500">Don't have an Account?</span>{" "}
        <Link
          href={"#"}
          className="w-full text-center underline underline-offset-2"
        >
          Sign Up here
        </Link>
      </p>
    </div>
  );
}
