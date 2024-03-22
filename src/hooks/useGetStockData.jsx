import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getParticularStock } from "../utils/getOneStockSlice";

const useGetStockData = () => {
  const dispatch = useDispatch();
  const getDataApi =
    "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-03-05/2024-03-15?adjusted=true&sort=asc&limit=120&apiKey=xfpR2Q0CgP9qUcg41GienUnvPxzRoLYE";
  const getData = async () => {
    const data = await fetch(getDataApi);
    const json = await data.json();
    console.log("json from one stock", json.results);
    dispatch(getParticularStock(json?.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useGetStockData;
