import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { groupedDailyApi } from "../utils/apiList";
import { getAllStocks } from "../utils/getAllstocksSlice";

const useGetAllStocks = () => {
  const dispatch = useDispatch();

  const apiGetdata =
    "https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=xfpR2Q0CgP9qUcg41GienUnvPxzRoLYE";

  console.log("gapi list", groupedDailyApi);

  const getAllData = async () => {
    const data = await fetch(apiGetdata);
    const json = await data.json();
    console.log("json", json?.results?.slice(0, 20));
    dispatch(getAllStocks(json?.results?.slice(0, 20)));
  };

  useEffect(() => {
    getAllData();
  }, []);
};

export default useGetAllStocks;
