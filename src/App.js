import { useEffect, useState } from "react";
import "./App.css";
import Details from "./components/Details";
import Forecast from "./components/Forecast";
import TimeLoc from "./components/TimeLoc";
import TopCities from "./components/TopCities";
import WeatherForm from "./components/WeatherForm";
import getFormattedWeather from "./functionalities/Weather";

function App() {
  const [query, setQ] = useState({ q: "kolkata" });
  const [units, setU] = useState("metric");
  const [weather, setW] = useState(null);

  const getW = async () => {
    await getFormattedWeather({ ...query, units }).then((data) => {
      setW(data);
    });
  };

  useEffect(() => {
    getW();
  }, [query, units]);

  const formatBG = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const thres = units === "metric" ? 30 : 86;
    if (weather.temp <= thres) return "from-cyan-700 to-blue-700";
    return "from-yellow-700 to-red-800";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 rounded-lg ${formatBG()}`}
    >
      <TopCities setQ={setQ} />
      <WeatherForm setQ={setQ} setU={setU} />

      {weather && (
        <>
          <TimeLoc weather={weather} />
          <Details weather={weather} units={units} />

          <Forecast data={weather.daily} />
        </>
      )}
    </div>
  );
}

export default App;
