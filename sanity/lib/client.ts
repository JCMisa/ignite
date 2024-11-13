import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // when set to true, it will wait for 60 seconds after a data changed from the database before rendering it. Meaning it will fetch data from cache first and right after 60 seconds, it will revalidate the data and fetch new data from server
  // when set to false, it will retrieve data in real-time imediately from the server
  useCdn: false,
});
