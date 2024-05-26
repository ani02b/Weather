import React from "react";

function Forecast({ data }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">daily forecast</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {data.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{d.title}</p>
            <img src={d.icon} className="w-12 my-1" alt="" />
            <p className="font-medium">{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
