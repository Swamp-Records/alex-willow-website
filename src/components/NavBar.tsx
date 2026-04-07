import Link from "next/link"
import Image from "next/image"
import Instagram from "../../public/Instagram.svg"
import Mail from "../../public/Mail.svg"
import Spotify from "../../public/Spotify.svg"
import Youtube from "../../public/Youtube.svg"
import Logo from "../../public/AlexWillowLogo.png"

export default function NavBar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-transparent text-white">
            
            {/*Logo + Links*/}
            <div className="flex items-center gap-12">
                <Image 
                    src={Logo} 
                    height={60} 
                    width={60} 
                    alt="Logo" 
                    className="transition-transform duration-300 hover:scale-110 hover:rotate-3"
                />

                <div className="flex gap-8 text-lg font-medium">
                    <Link className="hover:underline decoration-1 underline-offset-8" href="/">Home</Link>
                    <Link className="hover:underline decoration-1 underline-offset-8" href="/EPK">EPK</Link>
                    <Link className="hover:underline decoration-1 underline-offset-8" href="/lyrics">Lyrics</Link>
                    <Link className="hover:underline decoration-1 underline-offset-8" href="/shows">Show Dates</Link>
                    <Link className="hover:underline decoration-1 underline-offset-8" href="/contact">Contact</Link>
                </div>
            </div>

            {/*Social Media Pill*/}
            <div className="flex items-center gap-6 px-5 py-2 bg-black/30 backdrop-blur-md border border-[#B3B3B3] rounded-full shadow-2xl">
                <Link href="https://open.spotify.com/artist/73etH0gcHNOnWLXD0Rbamb" target="_blank" rel="noopener noreferrer">
                    <Image src={Spotify} height={30} width={30} alt="Spotify" className="hover:opacity-70 transition-opacity"/>
                </Link>
                <Link href="mailto:your@email.com">
                    <Image src={Mail} height={30} width={30} alt="Mail" className="hover:opacity-70 transition-opacity"/>
                </Link>
                <Link href="https://www.instagram.com/alexwillowmusic/" target="_blank" rel="noopener noreferrer">            
                    <Image src={Instagram} height={30} width={30} alt="Instagram" className="hover:opacity-70 transition-opacity"/>
                </Link>
                <Link href="https://www.youtube.com/@alex.willow" target="_blank" rel="noopener noreferrer">            
                    <Image src={Youtube} height={30} width={30} alt="Youtube" className="hover:opacity-70 transition-opacity"/>
                </Link>
            </div>

        </nav>
    );
}