import Image from "next/image";

import LyricsHero from "../../../public/LyricsHero.png"
import ShinyHeadshot from "../../../public/ShinyHeadshot.png"
import LyricsBox from "../components/LyricsBox";
import { songs } from "../data/songData";

export default function Lyrics(){
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 lined-background z-0" />
            
            <div className="relative z-10 flex flex-col items-center min-h-screen">
                <div className="relative w-full flex items-center justify-center" style={{minHeight:"460px"}}>
                    <Image
                        src={LyricsHero}
                        alt="Dreamy image of Alex Willow"
                        fill
                        className="object-cover z-0"
                    />
                    <div className="absolute inset-0 bg-black opacity-40" style={{zIndex: 1}} />
                    <div className="relative z-20">
                        <h1 className="text-white text-4xl">Lyrics</h1>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-start w-full p-6" style={{zIndex:2}}>
                    <div className="flex flex-col">
                        <Image
                            src = {ShinyHeadshot}
                            alt="A shiny headshot!"
                            width={486}
                            height={486}
                            className="object-cover z-20 m-3 -mt-64"
                            />
                            <iframe data-testid="embed-iframe" 
                            className="rounded-xl m-3" 
                            src="https://open.spotify.com/embed/artist/73etH0gcHNOnWLXD0Rbamb?utm_source=generator" 
                            width="486px" 
                            height="300px"
                            frameBorder="0" 
                            allowFullScreen 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"/>
                    </div>
                    <div>
                        {songs.map((song, i)=>(
                            <LyricsBox title={song.title} album={song.album} verses={song.verses}/>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}