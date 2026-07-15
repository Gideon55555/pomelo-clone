import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/common/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  // Pass standard system fallbacks here
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"], 
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});
export const metadata: Metadata = {
  title: "Qua — Software Development Company",
  description: "Digital products and custom software built for ambitious teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${geistSans.className} ${jetbrainsMono.variable}`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}