"use client"
import { useState } from "react";
import { shows, Show } from "../data/showData";


export default function ShowsBox({title, ticketLink, location, date}: Show){

    const [open, setOpen] = useState(false);
    const [buttonState, setButtonState] = useState("+")

    const handleClick = () =>{
        setOpen(!open);
        if (open){
            setButtonState("-")
        } else{
            setButtonState("+")
        }
    }

    return(<>
    <div className="flex flex-col border-black border rounded-lg p-4 w-4xl m-3">
        <div className="flex flex-row justify-between items-end">
            <div className="flex flex-col">
                <div className="text-2xl text-black font-bold">{title}</div>
                <p className="text-black">{date}</p>
            </div>

            <p className="text-black text-xl">{location}</p>
            <a
            className="px-6 py-2 rounded-lg text-2xl text-black border border-black font-bold"
            onClick={handleClick}
            href={ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            >TICKETS</a>
        </div>
        
    </div>
    </>)
}