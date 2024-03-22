import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValiddate } from "../utils/validate.jsx";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValiddate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    //sign in sign up logic
    if (!isSignInForm) {
      //sign-up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign-in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
      navigate("/browse-page");
    }
  };
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="../../src/assets/background.jpg" alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" font-serif absolute p-12 w-3/12 bg-orange-500 bg-opacity-70	 my-36 mx-auto right-0 left-0 text-white"
      >
        <h1 className="font-bold text-3xl py-4 font-serif ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 text-gray-950 my-4 w-full bg-slate-300 "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 text-gray-950	 my-4 w-full bg-slate-300"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 text-gray-950	 my-4 w-full bg-slate-300 "
        />
        <p className="text-white-500 font-bold ">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-lime-600	w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignIn} className="py-4 cursor-pointer">
          {isSignInForm
            ? "New to BigBull? Please Sign Up here."
            : "Already registered? Sign-In now."}
        </p>
      </form>
    </div>
  );
}

export default Login;
