import type { Metadata } from "next";
import { Geist, Geist_Mono, Lavishly_Yours, Licorice, Kurale
} from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Image from "next/image";
import Logo from "../../public/AlexWillowLogo.png"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lavishlyYours = Lavishly_Yours({
  variable: "--font-lavishly-yours",
  subsets: ["latin"],
  weight: "400",
});

const licorice = Licorice({
  variable: "--font-licorice",
  subsets: ["latin"],
  weight: "400",
});

const kurale = Kurale({
  variable: "--font-kurale",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexwillowmusic.com"),
  title: {
    default: "Alex Willow | Gainesville Music Artist",
    template: "%s | Alex Willow",
  },
  description:
    "Official website of Gainesville-based music artist Alex Willow. Stream new music, shop limited edition merch, and explore projects with Swamp Records.",
  keywords: [
    "Alex Willow",
    "Gainesville musician",
    "Swamp Records",
    "Alex Willow merch",
    "Alex Willow music",
  ],
  authors: [{ name: "Alex Willow" }],
  openGraph: {
    type: "website",
    siteName: "Alex Willow",
    title: "Alex Willow",
    description:
      "Official website of Gainesville-based music artist Alex Willow. Stream new music, shop limited edition merch, and explore projects with Swamp Records.",
    images: [
      {
        url: "/og-image.png", // add a 1200x630 image to /public, or remove until one exists
        width: 1200,
        height: 630,
        alt: "Alex Willow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Willow",
    description:
      "Official website of Gainesville-based music artist Alex Willow. Stream new music, shop limited edition merch, and explore projects with Swamp Records.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lavishlyYours.variable} antialiased`}
      >
        <NavBar/>

        {children}

        <Footer/>
      </body>
   
    </html>
  );
}
