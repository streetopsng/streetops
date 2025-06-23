import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/components/ClientProvider";
import SubLinksComponent from "@/components/SubLinksComponent";
import ReactQueryProvider from "@/components/ReactQueryProvider";


export const metadata: Metadata = {
  title: "Paige",
  description: "Paige",
  icons:{
    icon:"/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientProvider>
      <body
        className={`bg-bgcolor  font-lato`}
        >
          <ReactQueryProvider>
          <SubLinksComponent/>
        {children}
          </ReactQueryProvider>
      </body>
        </ClientProvider>
    </html>
  );
}
