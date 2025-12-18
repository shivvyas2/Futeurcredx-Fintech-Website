import { DM_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Futeurcredx - For Enterprise",
    template: "%s | Futeurcredx",
  },
  description:
    "The Infrastructure Layer for SMB Readiness. Credit Visibility and Progression — Before Revenue, Before Approval, Before Competitors.",
  keywords: [
    "Fintech",
    "SMB",
    "Credit",
    "Enterprise",
    "Banking",
    "Lending",
    "Infrastructure",
    "Financial Services",
  ],
  authors: [{ name: "Futeurcredx Team" }],
  creator: "Futeurcredx Team",
  publisher: "Futeurcredx",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: "Futeurcredx - For Enterprise",
    description:
      "The Infrastructure Layer for SMB Readiness. Credit Visibility and Progression — Before Revenue, Before Approval, Before Competitors.",
    siteName: "Futeurcredx",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Futeurcredx - For Enterprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futeurcredx - For Enterprise",
    description:
      "The Infrastructure Layer for SMB Readiness. Credit Visibility and Progression — Before Revenue, Before Approval, Before Competitors.",
    images: ["/og-image.jpg"],
    creator: "@futeurcredx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`h-screen ${dmSans.variable} ${dmMono.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
