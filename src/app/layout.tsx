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
  title: "Alex Willow",
  description: "Alex Willow's personal website - showcasing projects, bio, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lavishlyYours} antialiased`}
      >
        <NavBar/>

        {children}

        <Footer/>
      </body>
   
    </html>
  );
}
