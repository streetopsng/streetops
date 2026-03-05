import type { Metadata } from "next";
import "./globals.css";
import "../components/StreetopsLandingPage/StreetopsLandingPage.css";
import ClientProvider from "@/components/ClientProvider";
import SubLinksComponent from "@/components/SubLinksComponent";

import Head from "next/head";
import Script from "next/script";
import PersistBlogPosts from "@/components/PersistBlogPosts";
import Modal from "@/components/modal";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import { MobileMenu } from "@/components/mobile-menu";
import { Toaster } from "react-hot-toast";
import FormModal from "@/components/StreetopsLandingPage/form-modal";

export const metadata: Metadata = {
  title: "StreetOps",
  description: "StreetOps",
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
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
        {/* google analytics */}

        {/*  */}
        {/* <Script id="gtm-init" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M6843CTP');
          `}
          </Script> */}
      </head>
      <body className={`bg-bgcolor  font-roboto`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GQRFH2B3NG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-GQRFH2B3NG');
    `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6843CTP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ReactQueryProvider>
          <ClientProvider>
            {/* <SubLinksComponent/> */}
            {/* <PersistBlogPosts/> */}
            <Toaster
              position="top-center"
              toastOptions={{
                duration: 3000,
                style: {
                  background: "#0a363c",
                  color: "#fff",
                  fontWeight: "semibold",
                },
              }}
            />
            <Modal />
            <MobileMenu />
            <FormModal />
            {children}
          </ClientProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
