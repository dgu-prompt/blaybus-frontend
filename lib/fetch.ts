"use server";

import { cookies } from "next/headers";

export async function fetchWithAuth(apiEndpoint: string) {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token")?.value;

  if (!authToken) {
    throw new Error("Authorization token is missing. Please log in.");
  }

  const baseUrl = process.env.API_BASE_URL;
  const apiUrl = `${baseUrl}${apiEndpoint}`;

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  });

  return response;
}

export async function mutateWithAuth(
  apiEndpoint: string,
  apiMethod: "POST" | "PUT" | "DEL",
) {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token")?.value;

  if (!authToken) {
    throw new Error("Authorization token is missing. Please log in.");
  }

  const baseUrl = process.env.API_BASE_URL;
  const apiUrl = `${baseUrl}${apiEndpoint}`;

  const response = await fetch(apiUrl, {
    method: apiMethod,
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.text();
}
