import React from "react";

export default function Layout({
  children,
  drawer,
}: {
  children: React.ReactNode;
  drawer: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-full grow flex-col items-center">{children}</div>
      <div>{drawer}</div>
    </>
  );
}
