import { createContext, useContext, ReactNode } from "react";

// Context 생성
const StackContext = createContext<"HStack" | "VStack" | null>(null);

interface StackProps {
  children: ReactNode;
}

// HStack 컴포넌트
export function HStack({ children }: StackProps) {
  return (
    <StackContext.Provider value="HStack">
      <div style={{ display: "flex", flexDirection: "row" }}>{children}</div>
    </StackContext.Provider>
  );
}

// VStack 컴포넌트
export function VStack({ children }: StackProps) {
  return (
    <StackContext.Provider value="VStack">
      <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
    </StackContext.Provider>
  );
}

// Spacer 컴포넌트
export function Spacer() {
  const context = useContext(StackContext);

  if (!context) {
    throw new Error("Spacer must be used within an HStack or VStack.");
  }

  return <div style={{ flex: 1 }} />;
}
