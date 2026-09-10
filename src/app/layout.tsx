import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ezechukwu Emereuwaonu | Software Engineer",
  description: "High Agency Software Engineer with 8 years of experience building dynamic web applications and high-impact systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        style={{ backgroundColor: "#090909", color: "#ffffff", fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        <main className="relative z-0 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
