"use server";

import { fetchWithAuth } from "@/lib/fetch";

export async function fetchJobQuests() {
  return fetchWithAuth("/api/job-quests/list?frequency=WEEK");
}
ƒ;
