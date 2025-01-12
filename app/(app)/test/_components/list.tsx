"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={cn("flex w-full min-w-0 flex-col gap-1", className)}>
      {children}
    </ul>
  );
}

export function Section({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative flex w-full min-w-0 flex-col p-2", className)}>
      {title && (
        <h2 className="flex h-8 shrink-0 items-center rounded-md px-3 text-xs font-semibold text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0">
          {title}
        </h2>
      )}
      <div className="w-full text-sm">{children}</div>
    </div>
  );
}

export function Row({
  label,
  href,
  onClick,
  icon,
  className,
}: {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}) {
  const content = (
    <div
      className={cn(
        "flex w-full items-center justify-between gap-2 rounded-md p-3 text-left text-sm outline-none transition hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 active:bg-gray-200",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="h-5 w-5 text-zinc-400">{icon}</span>}
        <span className="text-sm">{label}</span>
      </div>
      {href && <ChevronRight className="stroke-zinc-400 stroke-1" />}
    </div>
  );

  if (href) {
    return (
      <Link href={href} passHref>
        <li>{content}</li>
      </Link>
    );
  }

  return (
    <li>
      <button onClick={onClick} className="w-full text-left">
        {content}
      </button>
    </li>
  );
}
