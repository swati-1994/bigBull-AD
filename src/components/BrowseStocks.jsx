import React, { useEffect } from "react";
import Header from "./Header";
import useGetAllStocks from "../hooks/useGetAllStocks";
import StocksListComponent from "./StocksListComponent";
import { useSelector } from "react-redux";

const BrowseStocks = () => {
  const allStocks = useSelector((store) => store.stocks);
  const categories = [
    "Gainers",
    "Trending Stocks",
    "Most Baught Stocks",
    "Stocks in News",
  ];

  return (
    <div>
      <Header />

      <StocksListComponent category={categories} stocks={allStocks} />
    </div>
  );
};

export default BrowseStocks;
