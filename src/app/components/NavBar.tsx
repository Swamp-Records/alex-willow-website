"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import Instagram from "../../../public/Instagram.svg"
import Mail from "../../../public/Mail.svg"
import Spotify from "../../../public/Spotify.svg"
import Youtube from "../../../public/Youtube.svg"
import Logo from "../../../public/AlexWillowLogo.png"

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-10 py-6 text-white">
      
      <div className="flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-6 md:gap-12">
          <Image 
            src={Logo} 
            height={60} 
            width={60} 
            alt="Logo"
            className="transition-transform duration-300 hover:scale-110 hover:rotate-3"
          />

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-lg nav-links">
            <Link href="/">Home</Link>
            <Link href="/EPK">EPK</Link>
            <Link href="/shows">Show Dates</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-6 px-5 py-2 bg-black/30 backdrop-blur-md border border-[#B3B3B3] rounded-full shadow-2xl">
          <Link href="https://open.spotify.com/artist/73etH0gcHNOnWLXD0Rbamb" target="_blank">
            <Image src={Spotify} height={26} width={26} alt="Spotify"/>
          </Link>
          <Link href="mailto:your@email.com">
            <Image src={Mail} height={26} width={26} alt="Mail"/>
          </Link>
          <Link href="https://www.instagram.com/alexwillowmusic/" target="_blank">            
            <Image src={Instagram} height={26} width={26} alt="Instagram"/>
          </Link>
          <Link href="https://www.youtube.com/@alex.willow" target="_blank">            
            <Image src={Youtube} height={26} width={26} alt="Youtube"/>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-black/80 backdrop-blur-md p-6 rounded-xl nav-links">
          <Link href="/">Home</Link>
          <Link href="/EPK">EPK</Link>
          <Link href="/shows">Show Dates</Link>
          <Link href="/contact">Contact</Link>

          <div className="flex gap-4 pt-4">
            <Image src={Spotify} height={24} width={24} alt="Spotify"/>
            <Image src={Mail} height={24} width={24} alt="Mail"/>
            <Image src={Instagram} height={24} width={24} alt="Instagram"/>
            <Image src={Youtube} height={24} width={24} alt="Youtube"/>
          </div>
        </div>
      )}
    </nav>
  )
}