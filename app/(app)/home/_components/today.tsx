"use client";

export function formatDate() {
  const date = new Date();
  return new Intl.DateTimeFormat("ko-KR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function Today() {
  return formatDate();
}
