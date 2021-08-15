import env from "react-dotenv";
const API_KEY = env.API_KEY;

const Airtable = require("airtable");

const base = new Airtable({ apiKey: API_KEY }).base("app8ZbcPx7dkpOnP0");

base("Classes")
  .select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 20,
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        console.log("Retrieved", record.get("Name"));
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );

export default base;
