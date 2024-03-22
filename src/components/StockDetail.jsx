import React from "react";
import MakeStocksChart from "./MakeStocksChart";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const StockDetail = () => {
  const navigate = useNavigate();
  function buyStocks() {
    navigate("/form");
  }
  return (
    <div>
      <Header />
      <MakeStocksChart />;
      <div className="mt-30 flex justify-center">
        <div>
          <button
            onClick={buyStocks}
            className="bg-lime-600 hover:bg-green-700 text-white font-bold py-2 px-10 mr-5 rounded"
          >
            Buy
          </button>
        </div>
        <div>
          <button className="bg-orange-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded">
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;
