import HeroSection from "./home/HeroSection";
import PresaveSection from "./home/PresaveSection";
import MusicSection from "./home/MusicSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <HeroSection />
        <MusicSection />
        <PresaveSection />
    </main>
  );
}