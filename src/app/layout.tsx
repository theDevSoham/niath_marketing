import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Niath Advisory | Real estate and investment",
  description: "The most go to real estate and investment helper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
        style={{ color: "#fff" }}
      >
        {children}
      </body>
    </html>
  );
}
