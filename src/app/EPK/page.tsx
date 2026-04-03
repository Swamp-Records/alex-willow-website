import Image from "next/image";

export default function EPK() {
    return (
        <div className="justify-center min-h-screen">
            <div className="Hero flex items-center gap-4">
                <Image 
                        src="/epk_hero.png"
                        alt="EPK Hero"
                        width={1920} 
                        height={1080} 
                        className="w-full h-auto"
                    />
            </div>
            
            <div className = "Main flex-1 w-full px-8 py-16 bg-gray-100">
                
            </div>
        </div>
    );
}