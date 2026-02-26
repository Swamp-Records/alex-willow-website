import Link from "next/link"

export default function NavBar(){
    return <>
    <div className="top-0 absolute min-w-full bg-white text-black flex justify-start gap-10 p-2">        
        <Link className="hover:underline" href="/">Home</Link>
        <Link className="hover:underline" href="/about">About</Link>
        <Link className="hover:underline" href="/EPK">EPK</Link>
        <Link className="hover:underline" href="/shows">Shows</Link>
    </div>
    </>

}