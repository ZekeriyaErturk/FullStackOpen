import React from "react";

function CountryList({ filtered, setFilter }) {
  return (
    <>
      {filtered.map((country) => (
        <p key={country.numericCode}>
          {country.name}
          <button
            onClick={() => {
              setFilter(country.name);
            }}
          >
            show
          </button>
        </p>
      ))}
    </>
  );
}

export default CountryList;
