import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto px-6 py-4" style={{backgroundColor: "#D8D1C8"}}>
      <p className="text-black font-kurale text-sm">© 2026 Alex Willow. All rights reserved.</p>
      <p className="text-black font-kurale text-sm">
        Made by <Link href="https://swamprecords.com" target="_blank" className="underline hover:text-darkblue">
        Swamp Records
        </Link>
      </p>
    </footer>
  )
}

