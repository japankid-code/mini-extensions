import env from "react-dotenv";
import React from "react";

import Airtable from "airtable";
const API_KEY = env.API_KEY;
const BASE_KEY = env.BASE_KEY;
console.log(BASE_KEY);

const base = new Airtable({ apiKey: API_KEY }).base(BASE_KEY);

export default function SearchStudents(name: string): object {
  let student: object = {};
  console.log("searching students...");
  base("Students")
    .select({
      // Selecting the first 3 records in Grid view:
      filterByFormula: `{Name} = ${name}`,
      view: "Grid view",
    })
    .firstPage(function page(err: any, records: any) {
      if (err) {
        console.error(err);
        return;
      }
      // This function (`page`) will get called for each page of records.
      records.forEach(function (record: any) {
        student = {
          id: record.id,
          name: record.get("Name"),
          classes: record.get("Classes"),
        };

        console.log(
          "Retrieved student",
          record.id,
          record.get("Name"),
          record.get("Classes")
        );
      });
    });

  return student;
}
