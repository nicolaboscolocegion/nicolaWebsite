import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Newnavbar from "./components/navbar";
import { WavyBackground } from "./ui/wavy-background"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import theme from "./theme";
import { ThemeProvider } from '@mui/material/styles';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicola Boscolo",
  description: "Portfolio of Nicola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="all" />
        <title>Nicola Boscolo Cegion portfolio</title>
        <meta name="description" content="Nicola Boscolo Cegion protfolio with general information about contats, education, jobs and projecs" />
      </head>
      <body className={inter.className}>
        <AppRouterCacheProvider >
          <ThemeProvider theme={theme}>
            <Newnavbar />
            <WavyBackground >
              <div className=" inset-0 overscroll-contain z-50 ">

                {children}

              </div>
            </WavyBackground>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
