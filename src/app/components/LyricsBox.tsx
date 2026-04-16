"use client"
import { useState } from "react"
import { Song } from "../data/songData";
import Footer from "./Footer";


export default function LyricsBox({title, album, verses}: Song){
    const [open, setOpen] = useState(false); // toggles if lyrics are opened or closed
    const [buttonState, setButtonState] = useState("+")
    const handleClick = () =>{
        setOpen(!open);
        if (open === true){
            setButtonState("+")
        } else{
            setButtonState("-")
        }

    }

    return (<>
    <div className="flex flex-col border-black border rounded-lg p-4 w-150 m-3">
        <div className="flex flex-row justify-between items-end ">
            <div className="text-2xl text-black font-extrabold">{title}</div>
            <button
            className="w-10 text-2xl text-black font-bold"
            onClick={handleClick}
            >{buttonState}</button>
        </div>
        {open && (
         <div>
            {verses.map((verse, i)=>(
                <div key={i}>
                    {verse.map((line, j)=>(
                        <p className="text-black" key={j}>{line}</p>
                    ))}
                </div>
            ))}
         </div>
        )}
    </div>
    
    </>)
}