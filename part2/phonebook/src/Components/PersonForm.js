import React from "react";

function PersonForm({ name, nameHandler, number, numberHandler, handleClick }) {
  return (
    <form>
      <div>
        name: <input value={name} onChange={nameHandler} />
      </div>
      <div>
        number: <input value={number} onChange={numberHandler} />
      </div>
      <div>
        <button onClick={handleClick} type="submit">
          add
        </button>
      </div>
    </form>
  );
}

export default PersonForm;
