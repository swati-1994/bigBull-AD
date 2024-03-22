import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { assetsPath } from "../utils/constants";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("navigation kar ke dekho", navigate("/"));
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("error", error);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        console.log("browse page", navigate("/browse-page"));
        navigate("/browse-page");
      } else {
        // User is signed out
        console.log("user signed out");
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when components unmount
    return () => unsubscribe();
  }, []);
  return (
    <div className=" h-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
      <div className="absolute ">
        {" "}
        <img className="w-20  p-2" src={assetsPath + "bull.png"} alt="logo" />
      </div>
      {user && (
        <div className="absolute z-50 w-20 right-0">
          <img
            className="p-2"
            src={assetsPath + "switch.png"}
            onClick={handleSignOut}
          />
          <p className="text-neutral-50">sign out</p>
        </div>
      )}
    </div>
  );
}

export default Header;
