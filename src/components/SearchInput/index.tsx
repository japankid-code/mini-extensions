import { useSelector, useDispatch } from "react-redux";
import env from "react-dotenv";

import {
  UPDATE_CURRENT_STUDENT,
  UPDATE_SEARCHED_STUDENT,
} from "../../utils/actions";

const API_KEY = env.API_KEY;
const BASE_KEY = env.BASE_KEY;

export default function SearchInput() {
  const currentStudent = useSelector((state: any) => state.currentStudent);
  const searchedStudent = useSelector((state: any) => state.searchedStudent);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    dispatch({
      type: UPDATE_CURRENT_STUDENT,
      [name]: value,
    });
  };

  async function getData(name: string) {
    const get_options = {
      method: "get",
      headers: {
        Authorization: "Bearer " + API_KEY,
      },
    };
    const url =
      `https://api.airtable.com/v0/` +
      BASE_KEY +
      `/Students?filterByFormula=%7BName%7D%3D%22` +
      name +
      `%22`;
    let get_response = await fetch(url, get_options).then((response) =>
      response.json()
    );
    dispatch({
      type: UPDATE_SEARCHED_STUDENT,
      searchedStudent: { ...get_response.records[0].fields },
    });
    return get_response.records[0].fields;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    getData(currentStudent);
  };

  return (
    <div className="search-input">
      <form className="search-input-form">
        <label htmlFor="currentStudent">student name: </label>
        <input
          type="text"
          name="currentStudent"
          className="search-input-input"
          placeholder="student name"
          value={currentStudent}
          onChange={handleChange}
        />
        <button onClick={(e) => handleSubmit(e)}>search</button>
      </form>

      <div>
        <div>Student: {searchedStudent.Name}</div>
        <div>Classes: {searchedStudent.Classes}</div>
      </div>
    </div>
  );
}
