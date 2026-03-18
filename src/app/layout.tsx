import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { LanguageProvider } from "../contexts/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ian's Blog",
  description: "Personal blog of Ian Xie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <LanguageProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </LanguageProvider>
    </ClerkProvider>
  );
}
