import { useEffect } from "react";
import env from "react-dotenv";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_SEARCHED_STUDENT } from "../../utils/actions";

const API_KEY = env.API_KEY;
const BASE_KEY = env.BASE_KEY;

export default function ClassCards() {
  const searchedStudent = useSelector((state: any) => state.searchedStudent);
  console.log(searchedStudent);
  let dispatch = useDispatch();

  // useEffect(() => {
  //   const userData = getData();
  //   console.log(userData);
  // }, [dispatch]);

  async function getData() {
    const get_options = {
      method: "get",
      headers: {
        Authorization: "Bearer " + API_KEY,
      },
    };

    let name = searchedStudent.Name;

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
  // let student: object = getData();
  return (
    <>
      <div>Student: {searchedStudent.Name}</div>
      <div>Classes: {searchedStudent.Classes}</div>
    </>
  );
}
