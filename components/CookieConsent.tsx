"use client";

import { useEffect, useState } from "react";
import { Check, Cookie, Settings, X } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import {
  defaultConsent,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsent as CookieConsentState,
} from "@/lib/cookie-consent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import GaRouteTracker from "@/components/GaRouteTracker";
import VisitNotifier from "@/components/VisitNotifier";

export default function CookieConsent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [consent, setConsent] = useState<CookieConsentState | null>(null);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const storedConsent = readCookieConsent();
    setConsent(storedConsent);
    setAnalyticsEnabled(storedConsent?.analytics ?? false);

    const openPreferences = () => setIsPreferencesOpen(true);
    window.addEventListener("open-cookie-preferences", openPreferences);
    return () => window.removeEventListener("open-cookie-preferences", openPreferences);
  }, []);

  function saveConsent(nextConsent: CookieConsentState) {
    writeCookieConsent(nextConsent);
    setConsent(nextConsent);
    setAnalyticsEnabled(nextConsent.analytics);
    setIsPreferencesOpen(false);
  }

  return (
    <>
      {children}

      {consent !== null && (
        <ConsentInstrumentation analyticsEnabled={consent.analytics} />
      )}

      {consent === null || isPreferencesOpen ? (
        <section
          aria-label="Cookie preferences"
          aria-modal={isPreferencesOpen ? "true" : undefined}
          aria-labelledby="cookie-preferences-title"
          className="fixed bottom-3 left-1/2 z-[100] max-h-[calc(100svh-1.5rem)] w-[calc(100vw-1.5rem)] -translate-x-1/2 overflow-y-auto rounded-2xl border border-white/15 bg-slate-950/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:bottom-6 sm:left-auto sm:right-6 sm:w-[calc(100vw-3rem)] sm:max-w-lg sm:translate-x-0 sm:p-6"
          role={isPreferencesOpen ? "dialog" : undefined}
        >
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-cyan/20 bg-accent-cyan/10 text-accent-cyan">
              <Cookie className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-cyan">
                Privacy controls
              </p>
              <h2 id="cookie-preferences-title" className="font-display text-lg font-semibold text-text-primary">
                Your privacy choices
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                We use essential storage to remember this choice. Optional
                analytics helps us understand how the site is used.
              </p>
            </div>
            {isPreferencesOpen && (
              <button
                type="button"
                onClick={() => setIsPreferencesOpen(false)}
                aria-label="Close cookie preferences"
                className="rounded-lg p-1.5 text-text-secondary transition hover:bg-white/[0.06] hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan/40"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
          </div>

          {isPreferencesOpen && (
            <div className="mt-5 space-y-3 border-t border-white/[0.08] pt-4">
              <PreferenceRow
                title="Essential"
                description="Required for the website and your preference to work."
                checked
                disabled
              />
              <PreferenceRow
                title="Analytics"
                description="Anonymous usage measurement, session insights, and visit notifications."
                checked={analyticsEnabled}
                onChange={setAnalyticsEnabled}
              />
            </div>
          )}

          <div className="mt-5 grid gap-2 sm:flex sm:flex-row sm:justify-end">
            {isPreferencesOpen ? (
              <>
                <button
                  type="button"
                  onClick={() => saveConsent({ analytics: false })}
                  className="btn-secondary min-h-11 px-4 py-2.5"
                >
                  Reject optional
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent({ analytics: analyticsEnabled })}
                  className="btn-primary min-h-11 px-4 py-2.5"
                >
                  Save preferences
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => saveConsent(defaultConsent)}
                  className="btn-secondary min-h-11 px-4 py-2.5"
                >
                  Reject optional
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent({ analytics: true })}
                  className="btn-primary min-h-11 gap-2 px-4 py-2.5"
                >
                  <Check className="h-4 w-4" aria-hidden="true" />
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={() => setIsPreferencesOpen(true)}
                  className="btn-outline min-h-11 gap-2 px-4 py-2.5"
                >
                  <Settings className="h-4 w-4" aria-hidden="true" />
                  Preferences
                </button>
              </>
            )}
          </div>
        </section>
      ) : null}
    </>
  );
}

function PreferenceRow({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <label className="flex min-h-[4.5rem] cursor-pointer items-start justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3.5 transition-colors has-[:focus-visible]:border-accent-cyan/50 has-[:checked]:border-accent-cyan/30 has-[:checked]:bg-accent-cyan/[0.06]">
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-text-primary">{title}</span>
        <span className="mt-1 block text-xs leading-relaxed text-text-secondary">
          {description}
        </span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        className="mt-1 h-5 w-5 shrink-0 accent-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/40 focus:ring-offset-2 focus:ring-offset-slate-950"
      />
    </label>
  );
}

function ConsentInstrumentation({ analyticsEnabled }: { analyticsEnabled: boolean }) {
  if (!analyticsEnabled) return null;

  return (
    <>
      <GoogleAnalytics />
      <MicrosoftClarity />
      <GaRouteTracker />
      <VisitNotifier analyticsEnabled />
      <Analytics />
    </>
  );
}