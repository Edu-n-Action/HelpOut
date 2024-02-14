import "./globals.css";
import Navbar from "@/components/homepage/navbar/Navbar";

import Head from "next/head";
export const metadata = {
  title: "Edunity",
  description: "Education opportunity for all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
