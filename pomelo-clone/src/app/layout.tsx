import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  // Pass standard system fallbacks here
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"], 
});
export const metadata: Metadata = {
  title: "Pomelo Clone",
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={geistSans.className}>
        {children}
      </body>
    </html>
  );
}