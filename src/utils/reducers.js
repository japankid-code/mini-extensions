import { UPDATE_CURRENT_STUDENT } from "./actions";

const initialState = {
  currentStudent: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_STUDENT:
      return {
        ...state,
        currentBook: { ...action.currentBook },
      };
    default:
      return state;
  }
};

export default reducer;
