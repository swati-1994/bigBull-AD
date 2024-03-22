import React, { useEffect } from "react";

import Login from "./Login";
import BrowseStocks from "./BrowseStocks";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import StockDetail from "./StockDetail";
import TradingForm from "./TradingForm";

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
    {
      path: "/stock-detail",
      element: <StockDetail />,
    },
    {
      path: "/form",
      element: <TradingForm />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
