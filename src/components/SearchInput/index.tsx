import { useSelector, useDispatch } from "react-redux";

import { UPDATE_CURRENT_STUDENT } from "../../utils/actions";

export default function SearchInput() {
  const currentStudent = useSelector((state: any) => state.currentStudent);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    dispatch({
      type: UPDATE_CURRENT_STUDENT,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(currentStudent);
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
    </div>
  );
}
