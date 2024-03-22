import React from "react";

import ShowCards from "./ShowCards";

const StocksListComponent = ({ category, stocks }) => {
  const stockConst = stocks?.allStocks;
  const gainedStocks = stockConst?.slice(0, 4);
  const trendingStocks = stockConst?.slice(4, 8);
  const topStocks = stockConst?.slice(9, 13);
  const newsStocks = stockConst?.slice(13, 17);

  return (
    <div>
      <div className="mb-5">
        <div className="font-bold text-xl text-gray-800">
          <h1 className="ml-3">{category[0]}</h1>
        </div>
        <div>
          <ShowCards stocks={gainedStocks} />
        </div>
      </div>
      <div className="mb-5">
        <div className="font-bold text-xl text-gray-800">
          <h1 className="ml-3">{category[1]}</h1>
        </div>
        <div>
          <ShowCards stocks={trendingStocks} />
        </div>
      </div>
      <div className="mb-5">
        <div className="font-bold text-xl text-gray-800">
          <h1 className="ml-3">{category[2]}</h1>
        </div>
        <div>
          <ShowCards stocks={topStocks} />
        </div>
      </div>
      <div className="mb-5">
        <div className="font-bold text-xl text-gray-800">
          <h1 className="ml-3">{category[3]}</h1>
        </div>
        <div>
          <ShowCards stocks={newsStocks} />
        </div>
      </div>
    </div>
  );
};

export default StocksListComponent;
