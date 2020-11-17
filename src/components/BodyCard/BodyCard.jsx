import React from "react";
import { Redirect } from "react-router-dom";

import { temp } from "../Card/CardInfo/CardInfo";
import stl from "./BodyCard.module.css";

export const BodyCard = (props) => {
  const { weather, main, name, wind } = props;
  return (
    <>
      {!weather ? (
        <Redirect to={"/"} />
      ) : (
        <div className={stl.cardWrapper}>
          <div className={stl.card}>
            <div>
              <div className={stl.cardHeader}>
                <h2>{name}</h2>
                <p>Temp: {temp(main.temp)}</p>
              </div>

              {weather.map((w) => (
                <div key={w.id} className={stl.imgInfo}>
                  <img
                    src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`}
                    alt="img"
                  />
                  <p>
                    {w.description.charAt(0).toUpperCase() +
                      w.description.substr(1).toLowerCase()}
                  </p>
                </div>
              ))}
            </div>
            <div className={stl.info}>
              <div className={stl.cardInfo}>
                <h4>Feels like:</h4> <p>{temp(main.feels_like)}</p>
              </div>
              <div className={stl.cardInfo}>
                <h4>Wind:</h4>
                <p> {wind.speed} m / s, V</p>
              </div>
              <div className={stl.cardInfo}>
                <h4>Pressure: </h4> <p>{main.pressure} mmHg Art.</p>
              </div>
              <div className={stl.cardInfo}>
                <h4>Humidity: </h4>
                <p>{main.humidity} %</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
