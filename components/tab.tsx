import Link from "next/link";
import { cn } from "@/lib/utils";

export function Tab({
  title,
  href,
  icon: Icon,
  active,
}: {
  title: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  active: boolean;
}) {
  return (
    <Link href={href} className="flex-1">
      <div
        className={cn(
          `flex flex-col items-center gap-1 text-muted-foreground ${active && "text-foreground"}`,
        )}
      >
        <Icon className="h-5 w-5" />
        <span className="text-xs">{title}</span>
      </div>
    </Link>
  );
}
