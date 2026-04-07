import Image from "next/image";
import Hero from "../../public/HeroBackground.png"
import Lines from "../../public/NotebookLines.png";
import Collage from "../../public/Collage.png"


export default function HeroHomepage(){
    return(
    <div className="relative h-screen">
        <Image src={Hero} className="object-cover z-10" alt="Alex Willow hero"/>
        <Image src={Collage} className="absolute -traslate-y-1/2 translate-x-1/2 top-1/2 right-1/2 z-20" alt="Alex Willow Polaroids"/>
    </div>)
}