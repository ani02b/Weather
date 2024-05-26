import React from "react";

function TopCities({ setQ }) {
  const cities = [
    {
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "London",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Paris",
    },
    {
      id: 5,
      title: "Moscow",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium hover:bg-gray-700/25 px-2 rounded-md transition ease-in"
          onClick={() => setQ({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopCities;
