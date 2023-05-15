import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import React from 'react'

export default function Document() {
  return (
    <Html>
      <Head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" />
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C5ENDYTTDW', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}