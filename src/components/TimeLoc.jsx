import React from "react";

function TimeLoc({ weather: { flt, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">{flt}</p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-semibold">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
}

export default TimeLoc;
