export const CHANGE_SERACH_FIELD = "CHANGE_SERACH_FIELD";

const initialState = {
  searchField: ""
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SERACH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
