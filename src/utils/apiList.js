import { API_KEY } from "./constants";
import { currentDate } from "./constants";
import { polyGonConst } from "./constants";

export const groupedDailyApi =
  polyGonConst +
  "v2/aggs/grouped/locale/us/market/stocks/" +
  currentDate +
  "?adjusted=true&apiKey=" +
  API_KEY;
