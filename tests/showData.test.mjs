import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import { readFileSync } from "node:fs";
import ts from "typescript";

// Use the project's compiler so tests work without a TS loader or runtime flag.
const source = readFileSync(new URL("../src/app/data/showData.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { getShows } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const originalFetch = globalThis.fetch;
const originalKey = process.env.BANDSINTOWN_APP_ID;
const originalWarn = console.warn;
const event = {
  datetime: "2026-12-12T23:00:00", title: "Winter Show",
  url: "https://www.bandsintown.com/e/123",
  venue: { name: "Heartwood", city: "Gainesville", region: "FL" },
  offers: [{ url: "https://tickets.example.com/show" }],
};
beforeEach(() => { process.env.BANDSINTOWN_APP_ID = "test & key"; console.warn = () => {}; });
afterEach(() => {
  globalThis.fetch = originalFetch;
  console.warn = originalWarn;
  if (originalKey === undefined) delete process.env.BANDSINTOWN_APP_ID;
  else process.env.BANDSINTOWN_APP_ID = originalKey;
});
function respond(payload) {
  globalThis.fetch = async () => Response.json(payload);
}

test("missing configuration is unavailable and makes no request", async () => {
  delete process.env.BANDSINTOWN_APP_ID;
  let requests = 0;
  globalThis.fetch = async () => { requests++; return Response.json([]); };
  assert.equal(await getShows(), null);
  assert.equal(requests, 0);
});
test("maps events, encodes the app ID, and bounds an uncached request", async () => {
  globalThis.fetch = async (url, options) => {
    assert.equal(url.searchParams.get("app_id"), "test & key");
    assert.equal(url.searchParams.get("date"), "upcoming");
    assert.equal(options.cache, "no-store");
    assert.ok(options.signal instanceof AbortSignal);
    return Response.json([event]);
  };
  assert.deepEqual(await getShows(), [{
    title: "Winter Show", ticketLink: "https://tickets.example.com/show",
    date: "December 12, 2026", location: "Heartwood, Gainesville, FL",
  }]);
});
test("a valid empty response is distinct from an outage", async () => {
  respond([]); assert.deepEqual(await getShows(), []);
});
test("missing offers/title/region use event URL, venue name and country", async () => {
  respond([{ ...event, title: "", offers: undefined,
    venue: { name: "Venue", city: "London", country: "UK" } }]);
  assert.deepEqual(await getShows(), [{ title: "Venue", ticketLink: event.url,
    date: "December 12, 2026", location: "Venue, London, UK" }]);
});
test("unsafe ticket offers fall back to the event URL", async () => {
  respond([{ ...event, offers: [{ url: "javascript:alert(1)" }] }]);
  assert.equal((await getShows())[0].ticketLink, event.url);
});
test("malformed entries are omitted without dropping valid events", async () => {
  respond([null, {}, { ...event, datetime: "2026-02-31T12:00:00" }, event]);
  assert.equal((await getShows()).length, 1);
});
test("an entirely malformed event list is unavailable, not no upcoming shows", async () => {
  respond([{}, null]); assert.equal(await getShows(), null);
});
for (const [name, fetch] of [
  ["network rejection", async () => { throw new Error("offline"); }],
  ["timeout", async () => { throw new DOMException("timeout", "TimeoutError"); }],
  ["HTTP error", async () => new Response("unavailable", { status: 503 })],
  ["invalid JSON", async () => new Response("not json")],
  ["error object", async () => Response.json({ error: "unknown artist" })],
]) {
  test(`${name} is contained and does not expose the key in logs`, async () => {
    const logs = [];
    console.warn = (...args) => logs.push(args.join(" "));
    globalThis.fetch = fetch;
    assert.equal(await getShows(), null);
    assert.equal(logs.length, 1);
    assert.ok(!logs[0].includes(process.env.BANDSINTOWN_APP_ID));
  });
}
