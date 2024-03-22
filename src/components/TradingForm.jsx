import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const TradingForm = () => {
  const navigate = useNavigate();
  const buyTheStock = () => {
    navigate("/stock-detail");
  };
  return (
    <div>
      <div className="m-10 max-w-md mx-auto">
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold mb-4">Buy Stocks</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="stock"
                className="block text-gray-700 font-semibold mb-2"
              >
                Stock
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter stock name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="quantity"
                className="block text-gray-700 font-semibold mb-2"
              >
                Quantity
              </label>
              <input
                type="number"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter quantity"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-semibold mb-2"
              >
                Price
              </label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter price"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-semibold mb-2"
              >
                Type
              </label>
              <select
                id="type"
                name="type"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="market">Market </option>
                <option value="limit">Limit </option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="duration"
                className="block text-gray-700 font-semibold mb-2"
              >
                Duration
              </label>
              <select
                id="duration"
                name="duration"
                className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="day">Day</option>
              </select>
            </div>
            <button
              onClick={buyTheStock}
              type="submit"
              className="w-full bg-lime-600 text-white font-semibold py-2 rounded-md hover:bg-lime-800 transition duration-300"
            >
              Buy
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TradingForm;
