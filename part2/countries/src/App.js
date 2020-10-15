import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Country from "./components/Country";
import CountryList from "./components/CountryList";

function App() {
  const api_key = process.env.REACT_APP_API_KEY;

  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState([]);
  const [weather, setWeather] = useState([]);

  // get countries data
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => setCountries(res.data));
  }, []);

  // form control
  const handleSearch = (e) => {
    setFilter(e.target.value);
  };

  // form filter
  useEffect(() => {
    const selectedCountry = countries.filter((c) =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
    setSelected(selectedCountry);
  }, [filter, countries]);

  // get weather data
  useEffect(() => {
    if (selected.length === 1) {
      const city = selected[0].name;
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
        )
        .then((res) => setWeather([res.data]));
    }
  }, [selected, api_key]);

  let rendered;
  if (selected.length === 1 && weather.length > 0) {
    rendered = <Country filtered={selected} weatherData={[...weather]} />;
  } else if (selected.length > 1 && selected.length <= 10) {
    rendered = <CountryList filtered={selected} setFilter={setFilter} />;
  } else {
    rendered = <p>Too many matches, specify another filter</p>;
  }

  return (
    <div>
      find countries <input value={filter} onChange={handleSearch} />
      {rendered}
    </div>
  );
}

export default App;
