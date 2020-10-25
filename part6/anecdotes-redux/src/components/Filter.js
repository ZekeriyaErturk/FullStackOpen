import React from "react";
import { connect } from "react-redux";
import { filtered } from "../reducers/filterReducer";

const Filter = ({ filtered }) => {
  const handleChange = (e) => {
    const filter = e.target.value;
    filtered(filter);
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default connect(null, { filtered })(Filter);
