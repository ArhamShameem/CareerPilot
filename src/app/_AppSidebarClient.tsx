"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { ReactNode } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppSidebarClient({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col w-full">
        <div className="p-2 border-b flex items-center gap-1">
          <SidebarTrigger aria-label="Open sidebar" />
          <span className="text-xl">CareerPilot</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {children}
    </>
  );
}
