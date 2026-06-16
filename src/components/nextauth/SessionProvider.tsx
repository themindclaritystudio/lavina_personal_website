"use client";
<<<<<<< HEAD
import { SessionProvider } from "next-auth/react";
=======
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
import React from "react";

export default function SessionProviderComp({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <>
<<<<<<< HEAD
      <SessionProvider session={session}>{children}</SessionProvider>
=======
      {children}
>>>>>>> faabffe153b159d74b76e869432523adeb5bc3ab
    </>
  );
}
