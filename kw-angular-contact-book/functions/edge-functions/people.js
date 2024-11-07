// import people from "..people.json";
// export default async (request, context) => {
//   return Response.json(people);
// };
import * as fs from "fs";
// /Users/kayliemckee/Documents/GitHub/kw-angular-contact-book/kw-angular-contact-book/functions/people.json
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync("functions/people.json", {
  encoding: "utf8",
  flag: "r",
});

export default async (request, context) => {
  console.log(data);
  return Response.json(data);
};

export const config = {
  path: "/api/people",
};
