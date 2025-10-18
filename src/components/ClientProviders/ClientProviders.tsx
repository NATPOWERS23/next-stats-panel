"use client";

import { type ReactNode } from "react";
import dynamic from "next/dynamic";

const TwitchProvider = dynamic(() => import("@/contexts/useTwitch"), {
  ssr: false,
});

const Modal = dynamic(() => import("@/components/Modal/Modal"), {
  ssr: false,
});

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <TwitchProvider>
      {children}
      <Modal />
    </TwitchProvider>
  );
}