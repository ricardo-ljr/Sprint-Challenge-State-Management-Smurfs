import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const AddSmurfForm = props => {
  const [villager, setVillager] = useState({
    name: "",
    age: "",
    height: ""
  });

  const onChange = e => {
    setVillager({
      ...villager,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.addSmurf(villager);
        setVillager("");
      }}
    >
      <label>Name</label>
      <input
        name="name"
        value={villager.name}
        placeholder="name"
        onChange={onChange}
      />
      <label>Age</label>
      <input
        name="age"
        value={villager.age}
        placeholder="age"
        onChange={onChange}
      />
      <label>Height</label>
      <input
        name="height"
        value={villager.height}
        placeholder="height"
        onChange={onChange}
      />
      <button type="submit">Add a new Smurf</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    addSmurf: state.addSmurf
  };
};

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm);
