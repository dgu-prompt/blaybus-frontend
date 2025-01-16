"use client";

import { ListButton } from "@/components/grouped-list";
import { syncGoogleSheets } from "../_actions/sync-google-sheets";
import { toast } from "sonner";

export function SyncGoogleSheetsButton() {
  const handleClick = async () => {
    toast.promise(syncGoogleSheets, {
      loading: "Google Sheets 동기화 중...",
      success: "Google Sheets가 데이터베이스와 동기화 되었습니다.",
      error: "Google Sheets 동기화 실패",
    });
  };

  return <ListButton title="Google Sheet 지금 동기화" onClick={handleClick} />;
}
