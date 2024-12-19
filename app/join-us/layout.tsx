import React from "react";
import { SessionProvider } from "next-auth/react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}
