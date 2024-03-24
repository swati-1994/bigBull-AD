import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupedDailyApi } from "../utils/apiList";
import { getAllStocks } from "../utils/getAllstocksSlice";

const useGetAllStocks = () => {
  const dispatch = useDispatch();
  const apiGetdata = groupedDailyApi;
  const allStocksData = useSelector((store) => store.stocks.allStocks);
  console.log("logStockssss", allStocksData);
  const getAllData = async () => {
    const data = await fetch(apiGetdata);
    const json = await data.json();
    dispatch(getAllStocks(json?.results?.slice(0, 20)));
  };

  useEffect(() => {
    !allStocksData && getAllData();
  }, []);
};

export default useGetAllStocks;
