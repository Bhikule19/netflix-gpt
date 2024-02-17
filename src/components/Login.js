import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInButton = () => {
    return setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
          className="opacity-50"
        />
      </div>
      <div>
        <form className="w-3/12 absolute p-12 bg-[#000000bf] my-36 mx-auto right-0 left-0 text-white rounded-[4px]">
          <h1 className="font-bold text-3xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {isSignIn ? null : (
            <input
              type="text"
              placeholder="Firt Name"
              className="p-4 my-2 w-full bg-[#333] text-[#8c8c8c] rounded-[4px]"
            />
          )}
          {!isSignIn && (
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 my-2 w-full bg-[#333] text-[#8c8c8c] rounded-[4px]"
            />
          )}

          <input
            type="text"
            placeholder="Email Address or Phone Number"
            className="p-4 my-2 w-full bg-[#333] text-[#8c8c8c] rounded-[4px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-[#333] text-[#8c8c8c] rounded-[4px]"
          />
          <button className="p-4 my-4 bg-[#e50914] w-full rounded-[4px] font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex">
            <p className="mr-1">
              {isSignIn ? "New to Netflix?" : "Already a user?"}
            </p>
            <Link className="font-bold" onClick={toggleSignInButton}>
              {isSignIn ? "Sign Up Now" : "Sign In Now"}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
