"use client";

import Script from "next/script";

export function AnalyticsScripts() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const fathomId = process.env.NEXT_PUBLIC_FATHOM_ID;

  return (
    <>
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-setup" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      ) : null}
      {fathomId ? (
        <Script
          src="https://cdn.usefathom.com/script.js"
          strategy="afterInteractive"
          data-site={fathomId}
        />
      ) : null}
    </>
  );
}
