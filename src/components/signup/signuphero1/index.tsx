import React from "react";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full border rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full border rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full border rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember me?
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-[#FF9F0D] text-white py-2 rounded-lg hover:bg-orange-600"
          >
            Sign Up
          </button>

          {/* Forgot Password */}
          <div className="text-center">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot password?
            </a>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Sign In Buttons */}
        <div className="space-y-4">
          <button
            type="button"
            className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-50"
          >
            <img
              src="/Google.png"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            Sign up with Google
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-50"
          >
            <img
              src="Apple.png"
              alt="Apple"
              className="h-5 w-5 mr-2"
            />
            Sign up with Apple
          </button>
        </div>

        {/* Already Have an Account */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="../signin" className="text-[#FF9F0D] font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
