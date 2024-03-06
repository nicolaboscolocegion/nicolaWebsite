import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Newnavbar from "./components/navbar";
import { WavyBackground } from "./ui/wavy-background"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Newnavbar />
        
        <WavyBackground className="max-w-4xl fixed z-0" />
          <div className="mt-20 z-50">


            {children}

          </div>
        
      </body>
    </html>
  );
}
