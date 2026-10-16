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
    <div className="flex flex-col border-black border rounded-lg p-4 py-[14px] w-150 m-3">
        <div className="flex flex-row justify-between items-end h-[28px]">
            <div className="text-2xl text-black font-extrabold leading-[28px]">{title}</div>
            <button
            className="w-10 text-2xl text-black font-bold leading-[28px]"
            onClick={handleClick}
            >{buttonState}</button>
        </div>
        {open && (
         <div className="mt-[29px]">
            {verses.map((verse, i)=>(
                <div key={i} className = "mb-[28px] last:mb-0">
                    {verse.map((line, j)=>(
                        <p className="text-black leading-[28px]" key={j}>{line}</p>
                    ))}
                </div>
            ))}
         </div>
        )}
    </div>
    
    </>)
}