import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("error", error);
      });
  };
  return (
    <div>
      <div className="absolute bg-gradient-to-b from-black z-10">
        {" "}
        <img
          className="w-55 h-40 p-5"
          src="../../src/assets/bull.png"
          alt="logo"
        />
      </div>
      <div className="absolute z-50 w-20 right-0 bg-gradient-to-b from-black p-5">
        <img src="../../src/assets/switch.png" onClick={handleSignOut} />
        <p className="text-neutral-50">sign out</p>
      </div>
    </div>
  );
}

export default Header;
