import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MultiMind SDK – Your Open Source Multi-AI Integration SDK",
  description:
    "Build AI agents with any LLM, fine-tune easily, and integrate across your stack.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>
        {children}
        <Script
          src="https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js"
          strategy="afterInteractive"
        />
        <Script
          id="cookie-consent-init"
          strategy="afterInteractive"
        >
          {`
            function initCookieConsent() {
              if (typeof cookieconsent === 'undefined') {
                console.warn('Cookie consent library not loaded yet, retrying in 1s...');
                setTimeout(initCookieConsent, 1000);
                return;
              }

              try {
                cookieconsent.run({
                  "notice_banner_type": "simple",
                  "consent_type": "express",
                  "palette": "dark",
                  "language": "en",
                  "page_load_consent_levels": ["strictly-necessary"],
                  "notice_banner_reject_button_hide": false,
                  "preferences_center_close_button_hide": false,
                  "page_refresh_confirmation_buttons": false,
                  "website_name": "https://www.multimind.dev/"
                });
              } catch (error) {
                console.error('Error initializing cookie consent:', error);
              }
            }

            // Try to initialize immediately
            initCookieConsent();

            // Also try on DOMContentLoaded as a backup
            document.addEventListener('DOMContentLoaded', initCookieConsent);
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
