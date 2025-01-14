"use client";

import { useState } from "react";
import { fetchJobQuests } from "../_actions/fetch-job-quests";
import { toast } from "sonner";

export function JobQuestsButton() {
  const [loading, setLoading] = useState(false);
  const [jobQuests, setJobQuests] = useState<any[]>([]);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const data = await fetchJobQuests();
      console.log(data);
      setJobQuests(data);
      toast.success("Job quests successfully fetched!");
    } catch (error: any) {
      console.error("Fetch failed:", error.message);
      toast.error(error.message || "Failed to fetch job quests.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleFetch}
        disabled={loading}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Loading..." : "Fetch Job Quests"}
      </button>
      {jobQuests.length > 0 && (
        <ul className="mt-6 w-full max-w-2xl rounded-lg bg-white p-4 shadow-md">
          {jobQuests.map((quest: any) => (
            <li
              key={quest.id}
              className="border-b p-4 text-gray-700 last:border-none"
            >
              <div className="font-bold">{quest.title}</div>
              <div className="text-sm text-gray-500">{quest.description}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
