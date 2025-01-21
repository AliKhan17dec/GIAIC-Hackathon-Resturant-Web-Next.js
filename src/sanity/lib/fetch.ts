import { createClient } from "@sanity/client";
import { dataset } from "../env";

const client = createClient({
  projectId: "s6kd891d",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01", // Replace with your desired API version
});

export async function sanityFetch({ query }: { query: string }) {
  return await client.fetch(query);
}
