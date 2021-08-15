import { UPDATE_CURRENT_STUDENT } from "./actions";

const initialState = {
  currentStudent: "",
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_CURRENT_STUDENT:
      return {
        ...state,
        currentStudent: action.currentStudent,
      };
    default:
      return state;
  }
};

export default reducer;
