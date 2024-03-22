import React from "react";

import ShowCards from "./ShowCards";

const StocksListComponent = ({ category, stocks }) => {
  console.log("stocks in list", stocks);
  const stockConst = stocks?.allStocks;
  const gainedStocks = stockConst?.slice(0, 4);
  const trendingStocks = stockConst?.slice(4, 8);
  const topStocks = stockConst?.slice(9, 13);
  const newsStocks = stockConst?.slice(13, 17);

  console.log("sliced stocks", gainedStocks);

  return (
    <div>
      <div>
        <div>
          <h1>{category[0]}</h1>
        </div>
        <div>
          <ShowCards stocks={gainedStocks} />
        </div>
      </div>
      <div>
        <div>
          <h1>{category[1]}</h1>
        </div>
        <div>
          <ShowCards stocks={trendingStocks} />
        </div>
      </div>
      <div>
        <div>
          <h1>{category[2]}</h1>
        </div>
        <div>
          <ShowCards stocks={topStocks} />
        </div>
      </div>
      <div>
        <div>
          <h1>{category[3]}</h1>
        </div>
        <div>
          <ShowCards stocks={newsStocks} />
        </div>
      </div>
    </div>
  );
};

export default StocksListComponent;
