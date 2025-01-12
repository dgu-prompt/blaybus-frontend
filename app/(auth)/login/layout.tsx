export default function Page({ children }: { children: React.ReactNode }) {
  return <div className="flex h-screen flex-col items-center">{children}</div>;
}
