import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sadda Pind | Experience the Soul of Punjab",
  template: "%s | Sadda Pind",
  description: "Experience authentic Punjabi culture, traditional food, village life, cultural performances, and Punjabi hospitality at Sadda Pind in Amritsar.",
  keywords: [
    "Sadda Pind",
    "Sadda Pind Amritsar",
    "Punjabi cultural village",
    "Punjabi culture in Amritsar",
    "traditional Punjabi food",
    "places to visit in Amritsar",
    "Punjabi village experience",
  ],
  authors: [{ name: "Sadda Pind" }],
  creator: "Sadda Pind",
  openGraph: {
    title: "Sadda Pind | Experience the Soul of Punjab",
    description:
      "Discover Punjabi culture, food, traditions, and hospitality at Sadda Pind, Amritsar.",
    url: "https://sadda-pind.vercel.app",
    siteName: "Sadda Pind",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sadda Pind - Experience the Soul of Punjab",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
   twitter: {
    card: "summary_large_image",
    title: "Sadda Pind | Experience the Soul of Punjab",
    description:
      "Experience authentic Punjabi culture and hospitality in Amritsar.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },


};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

      </body>
    </html>
  );
}
