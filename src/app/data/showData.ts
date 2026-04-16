import { title } from "process";

export type Show = {
    title: string;
    ticketLink: string;
    date: string;
    location: string;
}


export const shows: Show[] = [
    {
        title: "Here is the title",
        ticketLink: "https://www.google.com",
        date: "1/2/3",
        location:"The Backyard"
    }
]