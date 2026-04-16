import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroSection from "./home/HeroSection";
import BioSection from "./home/BioSection";
import MusicSection from "./home/MusicSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <NavBar />
        <HeroSection />
        <MusicSection />
        <BioSection />
        <Footer />
    </main>
  );
}