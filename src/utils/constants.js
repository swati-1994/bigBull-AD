export const assetsPath = "../../src/assets/";
export const API_KEY = "xfpR2Q0CgP9qUcg41GienUnvPxzRoLYE";

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

export const currentDate = `${year}-${month}-${day}`;
export const polyGonConst = "https://api.polygon.io/";
