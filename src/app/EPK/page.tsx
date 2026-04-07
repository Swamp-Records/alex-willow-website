import Image from "next/image";

export default function EPK() {
    return (
        <div className="flex flex-col justify-center min-h-screen">
            <div className="Hero flex items-center gap-4">
                <Image 
                        src="/epk_hero.png"
                        alt="EPK Hero"
                        width={1920} 
                        height={1080} 
                        className="w-full h-auto"
                    />
            </div>
            
            <div className="flex justify-center items-center w-[70vw] mt-5 m-auto border-black border rounded-md">
                <p className="text-black text-center p-10 text-xl w-[60vw]">When Alex Willow began to sing, he crossed over into a world he knew he’d never leave. With a mystical readiness, the blue-ink secrets etched in his leatherbound journal turned to sonic histories begging to be told. At 20-years old, this Floridian singer-songwriter houses a wisdom rarely found, imbued with the urgency and vitality characteristic of youth. Delicate melodies and commanding vocals evoke the artistry of Ryan Beatty and Conan Gray, with an intimate lyricism uniquely his own. The debut single “Shin Splints” follows Alex as he balances his future and the past, the real and the unreal. Willow, the forthcoming EP, will capture the strenuous emotion of an adolescence marked by shame, loss, forgiveness and love. Crossing the boundary from musician to storyteller, Alex Willow’s words will remain in your mind, his voice in your hear, and his songs forever a part of you.</p>
            </div>
        </div>
    );
}