import Script from "next/script";

export const Analytics = () => (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-PT245PRWVD`}
    />
    <Script
      id="analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PT245PRWVD', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
  </>
);
