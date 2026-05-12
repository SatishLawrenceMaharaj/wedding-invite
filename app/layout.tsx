import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satish & Tyla | Wedding Invitation",
  description: "A cinematic wedding invitation for Satish Maharaj and Tyla Ready.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
