import { title } from "process";

export type Show = {
    title: string;
    ticketLink: string;
    date: string;
    location: string;
}


export const shows: Show[] = [
    {
        title: "Swamp Showcase",
        ticketLink: "https://app.opendate.io/e/swamp-showcase-april-19-2026-643309?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
        date: "April 19, 2026",
        location:"Heartwood Soundstage, Gainesville, FL"
    }
]