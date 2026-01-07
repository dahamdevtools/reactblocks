import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/utils/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://react-blocks.dev"),
  title: {
    default:
      "ReactBlocks - Ready-Made React Components for Modern Applications",
    template: "%s | ReactBlocks",
  },
  description:
    "Accelerate your development with fully responsive, production-ready React components. Built with Tailwind CSS. Free and open source.",
  keywords: [
    "react components",
    "tailwind css",
    "nextjs components",
    "ui components",
    "react library",
    "free components",
    "open source",
  ],
  authors: [{ name: "Daham Senarathne" }],
  creator: "Daham Senarathne",
  publisher: "Daham Senarathne",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://react-blocks.dev",
    siteName: "ReactBlocks",
    title: "ReactBlocks - Ready-Made React Components for Modern Applications",
    description:
      "Accelerate your development with fully responsive, production-ready React components. Built with Tailwind CSS. Free and open source.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReactBlocks - Ready-Made React Components for Modern Applications",
    description:
      "Accelerate your development with fully responsive, production-ready React components. Built with Tailwind CSS. Free and open source.",
    creator: "@daahaamm",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="google-site-verification"
          content="fHuzGsLgWpJbE5mOnE6YGmC64E_TFWNkWrWH88VX9vw"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen p-0 m-0 flex flex-col items-center bg-white`}
      >
        <Providers>
          <div className="w-full h-full bg-neutral-200/50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-200">
            {children}
            <Analytics />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
