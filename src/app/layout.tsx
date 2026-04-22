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
import WhatsAppWidget from "@/components/StreetopsLandingPage/WhatsAppWidget";
import { ThemeProvider } from "@/components/AnotherLandingPage/Components/ThemeProvider";
import Navbar from "@/components/AnotherLandingPage/Components/Navbar";
import ScrollToTop from "@/components/AnotherLandingPage/Components/ScrollToTop";
import SmartSupp from "@/components/SmartSupp";

export const metadata: Metadata = {
  title: "StreetOps",
  description:
    " StreetOps is a pan-African behavioral research and management consulting company that helps institutions optimize workforce performance for business growth",
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
            <SmartSupp />
            {/* <WhatsAppWidget /> */}
            <ThemeProvider>
              <Navbar />
              <main className="pt-15">{children}</main>
              <ScrollToTop />
            </ThemeProvider>
          </ClientProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

// app/layout.tsx
// import type { Metadata } from "next";
// import { Fraunces, DM_Sans } from "next/font/google";
// import "./globals.css";

// const fraunces = Fraunces({
//   subsets: ["latin"],
//   variable: "--font-fraunces",
// });

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   variable: "--font-dm-sans",
// });

// export const metadata: Metadata = {
//   title: "StreetOps — Social Productivity for African Teams",
//   description:
//     "Africa's team performance company. Built on behavioural science. Designed for the relational, high-context workplaces that actually exist here.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html
//       lang="en"
//       className={`${fraunces.variable} ${dmSans.variable}`}
//       suppressHydrationWarning
//     >
//       <body
//         className="font-sans antialiased"
//         style={{ backgroundColor: "#FFF8EE", color: "#1A0F00" }}
//       >
//         <ThemeProvider>
//           <Navbar />
//           <main className="pt-[60px]">{children}</main>
//           <ScrollToTop />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
