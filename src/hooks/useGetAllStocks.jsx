import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { groupedDailyApi } from "../utils/apiList";
import { getAllStocks } from "../utils/getAllstocksSlice";

const useGetAllStocks = () => {
  const dispatch = useDispatch();
  const apiGetdata = groupedDailyApi;
  const getAllData = async () => {
    const data = await fetch(apiGetdata);
    const json = await data.json();
    dispatch(getAllStocks(json?.results?.slice(0, 20)));
  };

  useEffect(() => {
    getAllData();
  }, []);
};

export default useGetAllStocks;
