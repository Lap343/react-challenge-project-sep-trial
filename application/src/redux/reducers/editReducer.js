import { EDIT } from "../actions/types";

const INITIAL_STATE = { id: null};

const editReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT:
      return { ...state, id: action.payload.id }
    default:
      return state;
  }

}

export default editReducer;