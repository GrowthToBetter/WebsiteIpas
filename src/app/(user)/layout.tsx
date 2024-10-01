import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Head from "next/head";
import Navbar from "./Components/navbar";

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
        {children}</body>
    </html>
  );
}
