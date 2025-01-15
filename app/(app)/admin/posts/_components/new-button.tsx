import Link from "next/link";
import { Plus } from "lucide-react";

export function NewButton() {
  return (
    <Link href="/admin/posts/new">
      <Plus className="h-5 w-5" />
    </Link>
  );
}
