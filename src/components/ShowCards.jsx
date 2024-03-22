import React from "react";

const ShowCards = ({ stocks }) => {
  console.log("give stocksss", stocks);
  return (
    <div className="flex flex-wrap">
      {stocks?.map((x) => (
        <div class="max-w-xs mx-3 my-2 bg-orange-50 rounded-xl overflow-hidden shadow-md">
          <div class="px-4 py-2">
            <h2 class="font-bold text-xl text-gray-800">{x.T}</h2>
          </div>
          <div class="px-2 py-4">
            <div class="text-gray-800 font-bold">{x.T} </div>
            <div class="text-gray-800 ">{x.v} stocks sold today</div>
            <div class="text-gray-800">
              {x.h * 100} was the highest price today
            </div>
            <div class="text-gray-800 font-bold">{x.vh}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowCards;
