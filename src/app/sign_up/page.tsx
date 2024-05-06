"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CLientServices } from "@/services/user";
import { useRouter } from "next/navigation";
import { SignupValidationSchema } from "@/validation/sign_up_validation";
import { ValidationError } from "yup";

const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true); // Start loading
      await SignupValidationSchema.validate(
        {
          firstName,
          lastName,
          phoneNumber,
          email,
          password,
          confirmPassword,
        },
        { abortEarly: false }
      );

      // If validation succeeds, proceed with signup
      const response = await CLientServices.signUp({
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
      });
      console.log(JSON.stringify(response) + "<<<<<Respnen");
      if (response.data) {
        console.log(response.data);
        router.push("/sign_in"); // Redirect to login page after successful signup
      } else {
        setError("Failed to sign up. Please try again.");
      }
      // Redirect to login page or dashboard after successful signup
    } catch (validationError) {
      if (validationError instanceof ValidationError) {
        const validationErrors = validationError.inner.map(
          (error) => error.message
        );
        setError(validationErrors.join(" \n"));
      } else {
        setError("Failed to sign up. Please try again.");
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="mt-48">
      <section className="bg-base-200">
        <div className="flex justify-center min-h-screen">
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
                Get your free account now.
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>
              <form onSubmit={handleSignUp}>
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Aria"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600   dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Stark"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Phone number
                    </label>
                    <input
                      type="text"
                      placeholder="XXX-XX-XXXX-XXX"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="ariastark@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 ">
                      Confirm password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <button
                    className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-black capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    disabled={loading}
                  >
                    <span>Sign Up </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 rtl:-scale-x-100"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6">
                  <div className="mt-6 text-center">
                    <Link
                      href="/sign_in"
                      className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                    >
                      Have an account? Sign In
                    </Link>
                  </div>
                </div>
              </form>
              {error && (
                <div className="text-red-500">
                  {error.split("\n").map((errorMessage, index) => (
                    <p key={index}>{errorMessage}</p>
                  ))}
                </div>
              )}{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
