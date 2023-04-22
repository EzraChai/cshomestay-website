import { GraphQLClient } from "graphql-request";

const END_POINT = process.env.END_POINT;
const HYGRAPH_PERMANENT_TOKEN = process.env.HYGRAPH_PERMANENT_TOKEN;

export const client = new GraphQLClient(END_POINT, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_PERMANENT_TOKEN}`,
  },
});
