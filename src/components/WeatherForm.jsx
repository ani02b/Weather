import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function WeatherForm({ setQ, setU }) {
  const [city, setC] = useState("");
  const handleSearch = () => {
    if (city !== "") setQ({ q: city });
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setC(e.currentTarget.value)}
          type="text"
          placeholder="search for place"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-white cursor-pointer transition ease-out hover:scale-125 size-5"
          onClick={handleSearch}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="cel"
          className="text-xl text-white font-light"
          onClick={() => setU("metric")}
        >
          °C
        </button>
        <p className="text-xl text-white mx-2">|</p>
        <button
          name="fah"
          className="text-xl text-white font-light"
          onClick={() => setU("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default WeatherForm;
