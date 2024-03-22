export const assetsPath = "../../src/assets/";
export const API_KEY = "xfpR2Q0CgP9qUcg41GienUnvPxzRoLYE";

const date = new Date();

let day = date.getDate().toString() - 2;
let month = (date.getMonth() + 1).toString();
let year = date.getFullYear();

if (month.length < 2) month = "0" + month;
if (day.length < 2) day = "0" + day;

// let newMonth = Number(month);
// let newDay = Number(day);

export const currentDate = `${year}-${month}-${day}`;
export const polyGonConst = "https://api.polygon.io/";
