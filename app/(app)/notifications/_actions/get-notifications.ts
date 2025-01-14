"use server";

import { fetchWithAuth } from "@/lib/fetch";

export async function getNotifications() {
  try {
    const response = await fetchWithAuth("/api/notifications");
    if (!response.ok) {
      throw new Error("Failed to fetch notifications.");
    }
    return await response.json();
  } catch (error: any) {
    console.error("Error fetching notifications:", error.message);
    throw new Error(error.message || "Failed to fetch notifications.");
  }
}
