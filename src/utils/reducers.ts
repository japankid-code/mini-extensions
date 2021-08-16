import { UPDATE_CURRENT_STUDENT, UPDATE_SEARCHED_STUDENT } from "./actions";

const initialState = {
  currentStudent: "Joe",
  searchedStudent: { Name: "" },
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_CURRENT_STUDENT:
      return {
        ...state,
        currentStudent: action.currentStudent,
      };
    case UPDATE_SEARCHED_STUDENT:
      return {
        ...state,
        searchedStudent: { ...action.searchedStudent },
      };
    default:
      return state;
  }
};

export default reducer;
