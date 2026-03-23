"use client";

import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";
import { StatusBar, Style } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";

export function CapacitorProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      // Add a class to body so we can target native app specific styling
      document.body.classList.add("capacitor-app");

      // Initialize native plugins
      const initNative = async () => {
        try {
          // Set status bar style
          await StatusBar.setStyle({ style: Style.Light });
          if (Capacitor.getPlatform() === 'android') {
             await StatusBar.setBackgroundColor({ color: '#ffffff' });
          }
          
          // Hide splash screen after a short delay to ensure UI is ready
          setTimeout(async () => {
            await SplashScreen.hide();
          }, 500);
        } catch (e) {
          console.warn("Capacitor plugins failed to initialize", e);
        }
      };

      initNative();
    }
  }, []);

  return <>{children}</>;
}
