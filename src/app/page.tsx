import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import BioSection from "./components/BioSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-50 font-sans dark:bg-black">
        <NavBar />
        <HeroSection />
        
        <BioSection />
    </div>
  );
}