import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");

  const getPasswordStrength = (pwd) => {
    if (!pwd) return 0;

    let strength = 0;

    if (pwd.length >= 8) strength++;
    if (pwd.length >= 12) strength++;

    if (/[a-z]/.test(pwd)) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++;

    if (strength <= 2) return 1;
    if (strength <= 4) return 2;
    return 3;
  };

  const passwordStrength = getPasswordStrength(password);

  return (
    <div className="w-full max-w-sm h-fit flex flex-col items-center gap-8">
      <div className="w-full h-fit flex flex-col pb-4">
        <p className="text-center text-neutral-400">Welcome to ReactBlocks</p>
        <h3 className="text-2xl font-semibold text-center">
          Create a new Account
        </h3>
      </div>
      <div className="w-full h-fit flex flex-col gap-5">
        <div className="w-full h-fit flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            spellCheck="false"
            placeholder="Enter your Name..."
            className="w-full h-12 px-6 rounded-full bg-neutral-200/50 dark:bg-neutral-800/60"
          />
        </div>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="w-9 flex items-center justify-center shrink-0 aspect-square rounded-full cursor-pointer text-lg text-neutral-500 bg-neutral-200 dark:bg-neutral-800"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="w-full flex items-center gap-1.5">
            <div
              className={`w-full h-1.5 flex-1 rounded-full transition-colors ${
                passwordStrength === 1
                  ? "bg-rose-200 dark:bg-rose-500/60"
                  : passwordStrength === 2
                  ? "bg-orange-200 dark:bg-orange-500/60"
                  : passwordStrength === 3
                  ? "bg-emerald-200 dark:bg-emerald-500/60"
                  : "bg-neutral-200/50 dark:bg-neutral-800/60"
              }`}
            ></div>
            <div
              className={`w-full h-1.5 flex-1 rounded-full transition-colors ${
                passwordStrength === 2
                  ? "bg-orange-200 dark:bg-orange-500/60"
                  : passwordStrength === 3
                  ? "bg-emerald-200 dark:bg-emerald-500/60"
                  : "bg-neutral-200/50 dark:bg-neutral-800/60"
              }`}
            ></div>
            <div
              className={`w-full h-1.5 flex-1 rounded-full transition-colors ${
                passwordStrength === 3
                  ? "bg-emerald-200 dark:bg-emerald-500/60"
                  : "bg-neutral-200/50 dark:bg-neutral-800/60"
              }`}
            ></div>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col gap-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="w-full h-12 pe-1.5 rounded-full flex items-center bg-neutral-200/50 dark:bg-neutral-800/60">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              spellCheck="false"
              placeholder="Enter your Password..."
              className="w-full px-6"
            />
            <button
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="w-9 flex items-center justify-center shrink-0 aspect-square rounded-full cursor-pointer text-lg text-neutral-500 bg-neutral-200 dark:bg-neutral-800"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col gap-3">
        <button className="w-full h-fit px-6 py-3 rounded-full cursor-pointer bg-neutral-200 dark:bg-neutral-800">
          Create Account
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
        <span className="text-neutral-500">Already have an Account?</span>{" "}
        <Link
          href={"#"}
          className="w-full text-center underline underline-offset-2"
        >
          Login here
        </Link>
      </p>
    </div>
  );
}
