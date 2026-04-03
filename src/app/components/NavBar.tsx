import Image from "next/image"
import Link from "next/link"
import Instagram from "../../../public/Instagram.png"
import Mail from "../../../public/Mail.png"
import Spotify from "../../../public/Spotify.png"
import Youtube from "../../../public/Youtube.png"
import Logo from "../../../public/AlexWillowLogo.png"

export default function NavBar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-3">

      {/* LEFT: Logo */}
      <Link href="/">
        <Image
          src={Logo}
          height={75}
          width={75}
          alt="Alex Willow Logo"
          className="transition-transform duration-300 hover:scale-110 hover:rotate-3"
        />
      </Link>

      {/* CENTER: Nav links */}
      <ul className="flex gap-8 list-none m-0 p-0">
        <li><Link className="text-white/80 hover:text-white text-sm font-serif tracking-wide transition-colors hover:underline" href="/">Home</Link></li>
        <li><Link className="text-white/80 hover:text-white text-sm font-serif tracking-wide transition-colors hover:underline" href="/EPK">EPK</Link></li>
        <li><Link className="text-white/80 hover:text-white text-sm font-serif tracking-wide transition-colors hover:underline" href="/shows">Show Dates</Link></li>
        <li><Link className="text-white/80 hover:text-white text-sm font-serif tracking-wide transition-colors hover:underline" href="/contact">Contact</Link></li>
      </ul>

      {/* RIGHT: Social icons */}
      <div className="flex items-center gap-4">
        <Link href="https://open.spotify.com/artist/73etH0gcHNOnWLXD0Rbamb" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-all hover:-translate-y-0.5 duration-200">
          <Image src={Spotify} height={24} width={24} alt="Spotify" />
        </Link>
        <Image src={Mail} height={24} width={24} alt="Mail" className="opacity-80 hover:opacity-100 transition-all cursor-pointer hover:-translate-y-0.5 duration-200" />
        <Link href="https://www.instagram.com/alexwillowmusic/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-all hover:-translate-y-0.5 duration-200">
          <Image src={Instagram} height={24} width={24} alt="Instagram" />
        </Link>
        <Link href="https://www.youtube.com/@alex.willow" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-all hover:-translate-y-0.5 duration-200">
          <Image src={Youtube} height={24} width={24} alt="YouTube" />
        </Link>
      </div>

    </nav>
  )
}