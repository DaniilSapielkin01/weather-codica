import React from "react";

import stl from "./CardInfo.module.css";

export const temp = (temp) => {
  if (temp > 0) {
    return "+" + Math.ceil(temp);
  }
  if (temp <= 0) {
    return Math.floor(temp);
  }
};

export const CardInfo = (props) => {
  const { main, name, weather } = props.city;
  return (
    <>
      <div className={stl.card}>
        <h3>{name}</h3>
        <p>Temp: {temp(main.temp)}</p>
        {weather.map((w) => (
          <div key={w.id}>
            <img
              src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`}
              alt="img"
            />
            <p className={stl.description}>
              {w.description.charAt(0).toUpperCase() +
                w.description.substr(1).toLowerCase()}
            </p>
          </div>
        ))}
        <div className={stl.smallTemp}>
          <p>Max: {temp(main.temp_max)}</p>
          <p>Min: {temp(main.temp_min)}</p>
        </div>
      </div>
    </>
  );
};
