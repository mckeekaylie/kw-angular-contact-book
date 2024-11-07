import * as fs from "fs";

const data = await fs.readFileSync("functions/people.json", {
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
