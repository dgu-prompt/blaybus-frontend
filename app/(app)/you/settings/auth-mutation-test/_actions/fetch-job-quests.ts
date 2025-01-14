"use server";

import { fetchData } from "./fetch-data";

export async function fetchJobQuests() {
  return fetchData({
    apiEndpoint: "/api/job-quests/list?frequency=WEEK",
    apiMethod: "GET",
    errorMessage: "Failed to fetch job quests.",
  });
}
