export type Show = {
  title: string;
  ticketLink: string;
  date: string;
  location: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function webUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

function toShow(event: unknown): Show | null {
  if (!isRecord(event) || !isRecord(event.venue)) return null;
  const venue = event.venue;
  if (typeof event.datetime !== "string" ||
      !/^\d{4}-\d{2}-\d{2}T/.test(event.datetime) ||
      typeof venue.name !== "string" || !venue.name.trim() ||
      typeof venue.city !== "string") return null;

  // Bandsintown supplies venue-local dates. UTC formatting preserves that day
  // regardless of the server's timezone.
  const day = event.datetime.slice(0, 10);
  const date = new Date(`${day}T12:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== day) return null;

  const offer = Array.isArray(event.offers)
    ? event.offers.find((offer) => isRecord(offer) && webUrl(offer.url))
    : undefined;
  const ticketLink = (isRecord(offer) ? webUrl(offer.url) : null) ?? webUrl(event.url);
  if (!ticketLink) return null;

  return {
    title: typeof event.title === "string" && event.title.trim() ? event.title : venue.name,
    ticketLink,
    date: date.toLocaleDateString("en-US", {
      month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
    }),
    location: [venue.name, venue.city, venue.region || venue.country]
      .filter((part) => typeof part === "string" && part.trim()).join(", "),
  };
}

/** [] means no upcoming shows; null means configuration or upstream failure. */
export async function getShows(): Promise<Show[] | null> {
  const appId = process.env.BANDSINTOWN_APP_ID?.trim();
  if (!appId) return null;

  const url = new URL("https://rest.bandsintown.com/artists/Alex%20Willow/events");
  url.search = new URLSearchParams({ app_id: appId, date: "upcoming" }).toString();

  try {
    const response = await fetch(url, {
      // Avoid freezing a missing build-time key or relying on an unconfigured
      // Cloudflare incremental cache. The shows route renders on demand.
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) throw new Error("Bandsintown request failed");
    const events: unknown = await response.json();
    if (!Array.isArray(events)) throw new Error("Unexpected Bandsintown response");
    const shows = events.map(toShow).filter((show): show is Show => show !== null);
    if (shows.length !== events.length) {
      console.warn("Bandsintown returned invalid event records; they were omitted.");
      if (shows.length === 0) return null;
    }
    return shows;
  } catch {
    // Do not log the request URL or exception: they can contain the app ID.
    console.warn("Unable to load Bandsintown show dates.");
    return null;
  }
}
