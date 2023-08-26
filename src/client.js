import { GraphQLClient } from "graphql-request";

const apiToken = process.env.DATOCMS_API_TOKEN;
const endpoint = `https://graphql.datocms.com`;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "Bearer " + apiToken,
};
const client = new GraphQLClient(endpoint, { headers });
export default client;
