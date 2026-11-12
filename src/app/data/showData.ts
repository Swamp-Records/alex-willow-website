export type Show = {
  title: string;
  ticketLink: string;
  date: string;
  location: string;
};

type BandsintownEvent = {
  datetime: string;
  title: string;
  url: string;
  venue: { name: string; city: string; region: string };
  offers: { url: string }[];
};

function formatDate(datetime: string) {
  const date = new Date(datetime.slice(0, 10) + "T12:00:00");
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export async function getShows(): Promise<Show[]> {
  const appId = process.env.BANDSINTOWN_APP_ID;

  // no key yet, show no shows
  if (!appId) {
    return [];
  }

  const url = `https://rest.bandsintown.com/artists/Alex%20Willow/events?app_id=${appId}&date=upcoming`;
  const response = await fetch(url, { next: { revalidate: 3600 } }); // checks for new shows every hour

  if (!response.ok) {
    return [];
  }

  const events: BandsintownEvent[] = await response.json();

  return events.map((event) => {
    let ticketLink = event.url;
    if (event.offers.length > 0) {
      ticketLink = event.offers[0].url;
    }

    return {
      title: event.title || event.venue.name,
      ticketLink: ticketLink,
      date: formatDate(event.datetime),
      location: event.venue.name + ", " + event.venue.city + ", " + event.venue.region,
    };
  });
}