import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Header";

export const metadata = {
  title: "TV2 NEWS",
  description: "Breaking News ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-gray-100 dark:bg-zinc-900 transition-all duration-700">
        <Header />
        <div className=" max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
