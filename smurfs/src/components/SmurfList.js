import React from "react";
import Smurf from "./Smurf";

import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfList = props => {
  return (
    <>
      {props.villagers.map(smurf => (
        <Smurf key={smurf.id} villager={smurf} />
      ))}
      <button onClick={props.getSmurfs}>Show me the Smurfs!</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    villagers: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurfs })(SmurfList);
