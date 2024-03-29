import "./globals.css";
import Navbar from "@/components/homepage/navbar/Navbar";
import { FirebaseContextProvider } from "@/Context/GlobalContext";
import Head from "next/head";
export const metadata = {
  title: "HelpOut",
  description: "Help all volunteer all over Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <body>
        <FirebaseContextProvider>{children}</FirebaseContextProvider>
      </body>
    </html>
  );
}
