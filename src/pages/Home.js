import env from "react-dotenv";

const API_KEY = env.API_KEY;

export default function Home() {
  async function data() {
    return await fetch(
      "https://api.airtable.com/v0/meta/bases/app8ZbcPx7dkpOnP0/tables"
    ).then((response) => response.json());
  }
  console.log(API_KEY);
  console.log(data());
  return <div className="home">My Home Page</div>;
}
