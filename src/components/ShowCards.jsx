import React from "react";
import { useNavigate } from "react-router-dom";

const ShowCards = ({ stocks }) => {
  //showing the cards and then navigating it to details page
  const navigate = useNavigate();
  const showDetail = () => {
    navigate("/stock-detail");
  };
  return (
    <div className="flex flex-wrap">
      {stocks?.map((x) => (
        <div
          key={x.T}
          onClick={showDetail}
          className="max-w-xs mx-3 my-2 cursor-pointer bg-gradient-to-r from-purple-200 rounded-xl overflow-hidden shadow-md"
        >
          <div className="px-4 py-2">
            <h2 className="font-bold text-xl text-gray-800">{x.T}</h2>
          </div>
          <div className="px-2 py-4">
            <div className="text-gray-800 font-bold">{x.T} </div>
            <div className="text-gray-800 ">{x.v} stocks sold today</div>
            <div className="text-gray-800">
              {Math.round(x.h * 100)} was the highest price today
            </div>
            <div className="text-gray-800 font-bold">{x.vh}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowCards;
