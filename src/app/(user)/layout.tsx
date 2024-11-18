import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Head from "next/head";
import Navbar from "./Components/navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Ipas",
  description: "Landing Page to Show Our Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" sizes="32" />
      </Head>
      <body className={inter.className}>
      <Navbar/>
        {children}
        <Script
          src="https://app.midtrans.com/snap/v1/transactions"
          data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
          strategy="afterInteractive"
        />
        </body>
    </html>
  );
}
