import { fetchWithAuth } from "@/lib/fetch-with-auth";

export async function getExpsSummary() {
  return fetchWithAuth("/api/exps-summary");
}
