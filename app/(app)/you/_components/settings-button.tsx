import Link from "next/link";
import { Settings } from "lucide-react";

export function SettingsButton() {
  return (
    <Link href="/you/settings">
      <Settings className="h-5 w-5" />
    </Link>
  );
}
