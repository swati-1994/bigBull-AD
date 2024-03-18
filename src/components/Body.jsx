import React from "react";
import Login from "./Login";
import BrowseStocks from "./BrowseStocks";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

function Body() {
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
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
