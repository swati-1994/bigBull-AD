import { API_KEY } from "./constants";
import { currentDate } from "./constants";
import { polyGonConst } from "./constants";

export const groupedDailyApi =
  polyGonConst +
  "v2/aggs/grouped/locale/us/market/stocks/" +
  currentDate +
  "?adjusted=true&apiKey=" +
  API_KEY;

export const getParticularStockData =
  polyGonConst +
  "v2/aggs/ticker/AAPL/range/1/day/2023-01-09/" +
  currentDate +
  "?adjusted=true&sort=asc&limit=120&apiKey=" +
  API_KEY;
