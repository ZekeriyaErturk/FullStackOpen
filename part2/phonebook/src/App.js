import React, { useEffect, useState } from "react";
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Person from "./Components/Person";
import Notification from "./Components/Notification";
import personService from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState([]);

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  // Add Person And Updateperson
  const handleAdd = (e) => {
    let index = -Infinity;
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName && persons.number !== newNumber) {
        index = i;
      }
    }

    if (index !== -Infinity) {
      const check = window.confirm(
        `${persons[index].name} is already added to phonebook replace the old number with new one?`
      );
      if (check) {
        personService
          .updatePerson({ ...persons[index], number: newNumber })
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !== response.data.id ? person : response.data
              )
            );

            setMessage([
              { message: `Updated ${persons[index].name}`, status: "success" },
            ]);
            setTimeout(() => setMessage(""), 2000);
          })
          .catch((err) => {
            setMessage([
              {
                message: `Information of ${persons[index].name} has already been removed from server`,
                status: "error",
              },
            ]);
            setTimeout(() => setMessage(""), 2000);
          });
      }
    } else {
      personService.createPerson(newPerson).then((response) => {
        setPersons([...persons, response.data]);
        setMessage([{ message: `Added ${newPerson.name}`, status: "success" }]);
        setTimeout(() => setMessage(""), 2000);
      });
    }

    setNewName("");
    setNewNumber("");
  };

  // Delete Person
  const handleDelete = (person) => {
    const result = window.confirm(`Delete ${person.name}`);

    if (result) {
      personService.deletePerson(person.id).then((res) => {
        setPersons(persons.filter((p) => p.id !== person.id));
        setMessage([{ message: `Deleted ${person.name}`, status: "success" }]);
        setTimeout(() => setMessage(""), 2000);
      });
    }
  };

  // Form handlers
  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearch = (e) => {
    setFilter(e.target.value);
  };

  // Search phonebook
  const filtered = persons.filter(
    (persons) =>
      persons.name.toLowerCase().includes(filter.toLowerCase()) ||
      persons.number.includes(filter)
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter onChange={handleSearch} value={filter} />
      <h2>add a new</h2>
      <PersonForm
        name={newName}
        nameHandler={handleName}
        number={newNumber}
        numberHandler={handleNumber}
        handleClick={handleAdd}
      />
      <h2>Numbers</h2>
      <Person filtered={filtered} deletePerson={handleDelete} />
    </div>
  );
}

export default App;
