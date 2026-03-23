"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Sidebar } from "@/components/layout/sidebar";
import { LayoutProvider, useLayoutMode } from "@/components/layout/layout-provider";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Capacitor } from "@capacitor/core";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { viewMode } = useLayoutMode();
  const isSidebar = viewMode === "sidebar";
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      setIsNative(true);
    }
  }, []);

  return (
    <>
      {!isNative && !isSidebar && <Header />}
      {!isNative && isSidebar && <Sidebar />}
      <main 
        id="main-content" 
        className={cn(
          "min-h-screen", 
          !isNative && isSidebar && "lg:pl-16",
          isNative && "safe-pt"
        )}
      >
        {children}
      </main>
      {!isNative && <Footer />}
    </>
  );
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutProvider>
      <LayoutContent>{children}</LayoutContent>
    </LayoutProvider>
  );
}
