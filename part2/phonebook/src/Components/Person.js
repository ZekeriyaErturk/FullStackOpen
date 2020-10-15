import React from "react";

const Person = ({ filtered, deletePerson }) => {
  return (
    <div>
      {filtered.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => deletePerson(person)}>delete</button>
        </p>
      ))}
    </div>
  );
};

export default Person;
