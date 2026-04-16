import HeroSection from "./home/HeroSection";
import BioSection from "./home/BioSection";
import MusicSection from "./home/MusicSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <HeroSection />
        <MusicSection />
        <BioSection />
    </main>
  );
}