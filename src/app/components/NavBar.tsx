import Link from "next/link"
import Image from "next/image"
import Instagram from "../../../public/Instagram.png"
import Mail from "../../../public/Mail.png"
import Spotify from "../../../public/Spotify.png"
import Youtube from "../../../public/Youtube.png"
import Logo from "../../../public/AlexWillowLogo.png"

export default function NavBar(){
    return <>
    <div className="top-0 absolute min-w-screen text-darkbrown flex-row p-2">
        <Image src={Logo} height={80} width={80} alt="Logo" className="absolute left-10 top-3 transition-transform duration-300 hover:scale-110 hover:rotate-3"/>

        <div className="flex text-l gap-8 justify-end">
            <Link className="hover:underline" href="/">Home</Link>
            <Link className="hover:underline" href="/about">About</Link>
            <Link className="hover:underline" href="/EPK">EPK</Link>
            <Link className="hover:underline" href="/shows">Shows</Link>
        </div>        
        <div className="flex gap-10 p-2 justify-end">
            <Link href="https://www.instagram.com/alexwillowmusic/" target="_blank" rel="noopener noreferrer">            
                <Image src={Instagram} height={30} width={30} alt="Instagram"/>
            </Link>
            <Image src={Mail} height={30} width={30} alt="Mail"/>
            <Link href="https://open.spotify.com/artist/73etH0gcHNOnWLXD0Rbamb" target="_blank" rel="noopener noreferrer">
                <Image src={Spotify}  height={30} width={30} alt="Spotify"/>
            </Link>
            <Link href="https://www.youtube.com/@alex.willow" target="_blank" rel="noopener noreferrer">            
                <Image src={Youtube} height={30} width={30} alt="Youtube"/>
            </Link>
        </div>
    </div>
    </>

}