    import Image from "next/image";

    import ShowsHero from "../../../public/ShowsHero.png"
    import ShinyHeadshot from "../../../public/ShinyHeadshot.png"
    import LyricsBox from "../components/LyricsBox";
    import { shows } from "../data/showData";
    import ShowsBox from "../components/ShowsBox";

    export default function Shows(){
        return (
            <div className="relative min-h-screen">
                <div className="absolute inset-0 lined-background z-0" />
                
                <div className="relative z-10 flex flex-col items-center min-h-screen">
                    <div className="relative w-full flex items-center justify-center" style={{minHeight:"460px"}}>
                        <Image
                            src={ShowsHero}
                            alt="Dreamy image of Alex Willow"
                            fill
                            className="object-cover z-0"
                        />
                        <div className="relative z-20">
                            <h1 className="text-white text-9xl" style={{fontSize:"6rem"}}>Upcoming</h1>
                        </div>
                    </div>
                        <div >
                        {shows.map((show, i)=>(
                            <ShowsBox title={show.title} ticketLink={show.ticketLink} location={show.location} date={show.date}/>
                        ))}
                        </div>
                </div>
            </div>
        )
    }