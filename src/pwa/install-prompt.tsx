"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

type NavigatorWithStandalone = Navigator & {
  standalone?: boolean;
};

const DISMISS_KEY = "techincglobal-pwa-dismissed";

function isIosDevice() {
  return /iPad|iPhone|iPod/.test(window.navigator.userAgent);
}

function isStandaloneMode() {
  const navigatorWithStandalone = window.navigator as NavigatorWithStandalone;

  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    navigatorWithStandalone.standalone === true
  );
}

export function InstallPrompt() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIos] = useState(() => (typeof window === "undefined" ? false : isIosDevice()));
  const [isStandalone, setIsStandalone] = useState(() =>
    typeof window === "undefined" ? true : isStandaloneMode(),
  );
  const [isDismissed, setIsDismissed] = useState(() =>
    typeof window === "undefined" ? true : window.localStorage.getItem(DISMISS_KEY) === "true",
  );

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setInstallEvent(null);
      setIsStandalone(true);
      window.localStorage.removeItem(DISMISS_KEY);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const canShowPrompt = !isStandalone && !isDismissed && (Boolean(installEvent) || isIos);

  if (!canShowPrompt) {
    return null;
  }

  const handleDismiss = () => {
    window.localStorage.setItem(DISMISS_KEY, "true");
    setIsDismissed(true);
  };

  const handleInstall = async () => {
    if (!installEvent) {
      return;
    }

    await installEvent.prompt();
    const result = await installEvent.userChoice;

    if (result.outcome !== "accepted") {
      return;
    }

    setInstallEvent(null);
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[90] px-4 sm:bottom-6">
      <div className="pointer-events-auto mx-auto flex w-full max-w-xl items-start gap-4 rounded-3xl border border-slate-200/80 bg-white/95 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.16)] backdrop-blur-xl">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-sm font-extrabold tracking-tight text-white shadow-lg shadow-blue-600/30">
          TG
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-950">Install TECHINCGLOBAL</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {isIos
              ? 'Open Safari share menu and choose "Add to Home Screen" for the full app experience.'
              : "Add this site to your device for faster launch, a standalone window, and offline fallback."}
          </p>
          {!isIos ? (
            <button
              type="button"
              onClick={() => void handleInstall()}
              className="mt-3 inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Install app
            </button>
          ) : null}
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          aria-label="Dismiss install prompt"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
