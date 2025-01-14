import { fetchWithAuth } from "@/lib/fetch";

export async function getExpsSummary() {
  return fetchWithAuth("/api/exps-summary");
}
