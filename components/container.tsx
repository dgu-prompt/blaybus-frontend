import { cn } from "@/lib/utils";

export function Container({
  as: Component = "div",
  children,
  className,
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Component className={cn("flex w-full flex-col items-center", className)}>
      {children}
    </Component>
  );
}

export function Wrapper({
  as: Component = "div",
  children,
  className,
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Component
      className={cn("px-safe flex w-full max-w-screen-sm flex-col", className)}
    >
      {children}
    </Component>
  );
}
