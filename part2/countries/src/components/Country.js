import React from "react";

const Country = ({ filtered, weatherData }) => {
  const {
    weather: [c],
    main: { temp },
    wind: { speed, deg },
  } = weatherData[0];

  return (
    <>
      <h2>{filtered[0].name}</h2>
      <p>capital: {filtered[0].capital}</p>
      <p>population: {filtered[0].population}</p>
      <h2>languages</h2>
      <ul>
        {filtered[0].languages.map((lang) => (
          <li key={lang.iso639_1}>{lang.name}</li>
        ))}
      </ul>
      <img
        style={{ width: "150px" }}
        src={filtered[0].flag}
        alt="country flag"
      />
      <h2>Weather in {filtered[0].capital}</h2>
      <p>temprature:{temp} Celcius</p>
      <img
        src={`http://openweathermap.org/img/wn/${c.icon}@2x.png`}
        alt="weather"
      />
      <p>
        wind: {speed} deg: {deg}
      </p>
    </>
  );
};

export default Country;
