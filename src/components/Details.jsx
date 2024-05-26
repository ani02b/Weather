import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureThreeQuarters,
  faDroplet,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

function Details({
  weather: {
    details,
    icon,
    temp,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
  },
  units,
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-5 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={icon} className=" w-20 my-1" alt="" />
        <p className="text-4xl font-medium ml-10">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FontAwesomeIcon
              icon={faTemperatureThreeQuarters}
              className="mr-1 size-4"
            />
            Feels Like:{" "}
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <FontAwesomeIcon icon={faDroplet} className="mr-1 size-4" />
            Humidity:{" "}
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <FontAwesomeIcon icon={faWind} className="mr-1 size-4" />
            Wind:{" "}
            <span className="font-medium ml-1">{`${speed.toFixed()} ${
              units === "metric" ? "m/s" : "mi/h"
            }`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <p className="font-light">
          Sunrise: <span className="font-medium ml-1">{sunrise}</span>
        </p>
        <p className="font-light">|</p>
        <p className="font-light">
          Sunset: <span className="font-medium ml-1">{sunset}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
