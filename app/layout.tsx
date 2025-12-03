import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./ui/footer";
import TopBar from "./ui/topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jay Log",
  description: "Personal Blog inspired by IG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 flex flex-col h-screen justify-center items-center`}
      >
        <div className="bg-white shadow-lg relative h-screen md:h-[728px] w-full max-w-md">
          <TopBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
