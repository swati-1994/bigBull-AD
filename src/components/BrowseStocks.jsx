import React from "react";
import Header from "./Header";
import useGetAllStocks from "../hooks/useGetAllStocks";
import StocksListComponent from "./StocksListComponent";
import { useSelector } from "react-redux";

const BrowseStocks = () => {
  useGetAllStocks();
  const allStocks = useSelector((store) => store.stocks);

  const categories = [
    "Gainers",
    "Trending Stocks",
    "Most Baught Stocks",
    "Stocks in News",
  ];

  return (
    <div>
      {/* listing all the apis from different categories */}
      <Header />
      <StocksListComponent category={categories} stocks={allStocks} />
    </div>
  );
};

export default BrowseStocks;
