import { DateTime } from "luxon";

const api_key = "3beeccea6a08dea4676aedd618420cc3";
const base_url = "https://api.openweathermap.org/data/2.5";

const getWeather = (info, params) => {
  const url = new URL(base_url + "/" + info);
  url.search = new URLSearchParams({ ...params, appid: api_key });

  return fetch(url).then((res) => res.json());
};
const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy' | 'hh:mm a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const flt = formatToLocalTime(dt, timezone);

  return {
    lat,
    lon,
    temp,
    feels_like,
    humidity,
    name,
    dt,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    details,
    icon: iconUrlFromCode(icon),
    speed,
    flt,
    timezone,
  };
};
const formatForecastWeather = (secs, offset, data) => {
  const daily = data
    .filter((f) => f.dt_txt.slice(-8) === "00:00:00")
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "ccc"),
      icon: iconUrlFromCode(f.weather[0].icon),
      date: f.dt_txt,
    }));

  return { daily };
};

const getFormattedWeather = async (params) => {
  const fcw = await getWeather("weather", params).then(formatCurrentWeather);
  const { dt, lat, lon, timezone } = fcw;
  const ffw = await getWeather("forecast", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: params.units,
  }).then((d) => formatForecastWeather(dt, timezone, d.list));

  return { ...fcw, ...ffw };
};

export default getFormattedWeather;
