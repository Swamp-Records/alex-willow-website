import Image from "next/image";
import Lines from "../../public/NotebookLines.png"
import Hero from '../../public/Hero.png'

export default function Home() {
  return (
    <div className="flex flex-col h-full font-sans">
        <Image src={Hero} alt="Alex willow Hero" className="z-10 object-cover"/>
        <div className="h-96 z-20 relative">hellow</div>
    </div>
  );
}
