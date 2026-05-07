import Script from "next/script";
import "../styles/globals.css";
// import "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-P0R59H6S82"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-P0R59H6S82');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
