"use client";
import { useState } from "react";
import { validateFields } from "@/lib/validateFields";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loader from "../loaders/Loader";

export default function RegisterForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  // Password requirments
  const capitalRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;
  const specialCharRegex = /[^A-Za-z0-9]/;
  const minLength = 6;

  // Password requirement checks
  const hasCapital = capitalRegex.test(password);
  const hasNumber = numberRegex.test(password);
  const hasSpecial = specialCharRegex.test(password);
  const hasMinLength = password.length >= minLength;
  const validPassword = hasCapital && hasNumber && hasSpecial && hasMinLength;
  const matchedPassword = password === confirmPassword && validPassword;

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Extract data
    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;

    // Validate
    const newErrors = validateFields({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    // Submit logic...
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      setLoading(false);
      if (res.status === 201) router.push("/login");
    } catch (err) {
      console.log(`Error creating user - ${err}`);
      setLoading(false);
      return;
    }
  };

  return (
    <form
      className="flex flex-col lg:flex-row gap-3 lg:gap-20 border rounded-xl border-gray-400 lg:border-none p-5 lg:p-0 w-full"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Loader */}
      {loading && <Loader />}
      {/* Personal Information */}
      <div className="flex flex-col gap-3 flex-1">
        <h2 className="text-lg hidden lg:block text-left w-full font-semibold">
          Personal Information
        </h2>
        {/* First Name */}
        <label htmlFor="firstNameInput" className="text-[#555555]">
          First Name<span className="text-orange">*</span>
        </label>
        <input
          id="firstNameInput"
          name="firstName"
          type="text"
          placeholder="John, Mike"
          className="bg-white border border-[#D6D6D6] rounded-md px-3 py-1"
          required
        />
        {errors.firstName && (
          <span className="text-xs text-red-600">{errors.firstName}</span>
        )}

        {/* Last Name */}
        <label htmlFor="lastNameInput" className="text-[#555555]">
          Last Name<span className="text-orange">*</span>
        </label>
        <input
          id="lastNameInput"
          name="lastName"
          type="text"
          placeholder="Geller, Green"
          className="bg-white border border-[#D6D6D6] rounded-md px-3 py-1"
          required
        />
        {errors.lastName && (
          <span className="text-xs text-red-600">{errors.lastName}</span>
        )}
      </div>

      {/* Login Information */}
      <div className="flex flex-col gap-3 flex-1">
        <h2 className="text-lg hidden lg:block text-left w-full font-semibold">
          Login Information
        </h2>
        {/* Email */}
        <label htmlFor="emailInput" className="text-[#555555]">
          Email<span className="text-orange">*</span>
        </label>
        <input
          id="emailInput"
          name="email"
          type="email"
          placeholder="Type your email"
          className="bg-white border border-[#D6D6D6] rounded-md px-3 py-1"
          required
        />
        {errors.email && (
          <span className="text-xs text-red-600">{errors.email}</span>
        )}

        {/* Password */}
        <label htmlFor="passwordInput" className="text-[#555555]">
          Password<span className="text-orange">*</span>
        </label>
        <div className="relative">
          <input
            id="passwordInput"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Type your password"
            className="bg-white border border-[#D6D6D6] rounded-md px-3 py-1 w-full"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 right-3 aspect-square w-4 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="#99a1af"
              >
                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="#99a1af"
              >
                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
              </svg>
            )}
          </div>
        </div>
        <ul className="text-xs mb-2">
          <li className={hasCapital ? "text-green-600" : "text-gray-500"}>
            • At least one capital letter
          </li>
          <li className={hasNumber ? "text-green-600" : "text-gray-500"}>
            • At least one number
          </li>
          <li className={hasSpecial ? "text-green-600" : "text-gray-500"}>
            • At least one special character
          </li>
          <li className={hasMinLength ? "text-green-600" : "text-gray-500"}>
            • At least 6 characters
          </li>
        </ul>
        {errors.password && (
          <span className="text-xs text-red-600">{errors.password}</span>
        )}

        {/* Confirm password */}
        <label htmlFor="confirmPasswordInput" className="text-[#555555]">
          Re-enter The Password<span className="text-orange">*</span>
        </label>
        <div className="relative">
          <input
            id="confirmPasswordInput"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className="bg-white border border-[#D6D6D6] rounded-md px-3 py-1 w-full"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 right-3 aspect-square w-4 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="#99a1af"
              >
                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="#99a1af"
              >
                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
              </svg>
            )}
          </div>
        </div>
        <ul className="text-xs mb-2">
          <li className={matchedPassword ? "text-green-600" : "text-gray-500"}>
            • Your password matches
          </li>
        </ul>
        {errors.confirmPassword && (
          <span className="text-xs text-red-600">{errors.confirmPassword}</span>
        )}

        <button
          type="submit"
          className={`rounded-md bg-orange text-white py-2 px-4 font-semibold w-full mt-2 cursor-pointer`}
        >
          Create An Account
        </button>
        <p className="text-xs text-orange">*Required Fields</p>
      </div>
    </form>
  );
}
