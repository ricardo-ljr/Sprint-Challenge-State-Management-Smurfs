import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL
} from "../actions";

const initialState = {
  smurfs: [],
  erro: "",
  isFetching: false,
  addSmurf: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: true
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case ADD_SMURF_START:
      return {
        ...state,
        addSmurf: true
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addSmurf: false,
        smurfs: action.payload
      };
    case ADD_SMURF_FAIL:
      return {
        ...state,
        addSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
