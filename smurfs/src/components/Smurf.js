import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const Smurf = props => {
  return (
    <>
      <div>
        <p>Name: {props.villager.name}</p>
        <p>Age: {props.villager.age}</p>
        <p>Height: {props.villager.height}</p>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height
  };
};

export default connect(mapStateToProps, { getSmurfs })(Smurf);
