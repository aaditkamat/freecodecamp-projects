import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piano App",
  description: "Created a piano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen">
        <div className="h-1/4 invisible" />
        <div className="flex flex-row">
          <div className="w-1/3 invisible" />
          {children}
          <div className="w-1/3 invisible" />
        </div>
        <div className="h-1/3 invisible" />
      </body>
    </html>
  );
}
