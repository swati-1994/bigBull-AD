import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./Login";
import BrowseStocks from "./BrowseStocks";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

function Body() {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse-page",
      element: <BrowseStocks />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("yes, it's here", user);
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
      } else {
        // User is signed out
        console.log("no it's not here");
        dispatch(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
