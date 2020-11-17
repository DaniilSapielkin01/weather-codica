import * as axios from "axios";

const baseUrl = `https://api.openweathermap.org/data/2.5/`;
const urlParams = `&units=metric`;

const apiKey = `&appid=96af99685838b4a635f75c52dd72d75f`;

export const cityAPI = {
  getCity(city) {
    return axios.get(`${baseUrl}weather?${urlParams}&q=${city}${apiKey}`);
  },
  getCityId(id) {
    return axios.get(`${baseUrl}weather?id=${id}${urlParams}${apiKey}`);
  },
};
