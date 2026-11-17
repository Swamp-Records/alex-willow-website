# Swamp Records x Alex Willow 
This is a Next.js project built for Gainesville-based music artist Alex Willow. Devloped in collabroation with Swamp Records, this platform is designed to serve as a central hub for advertising merch, promoing new music, EPKs, and engaging fans. 

## Project
The goal of this platform is to provide a professional digital space that reflects Alex Willow's artistic identity. Key sections of the site include:

Merch Display: A showcase for limited edition apparel and physical goods.

Music Portfolio: Integrated links to streaming services and latest tracks.

Artist Presence: Information about Alex's roots in Gainesville and ongoing projects with Swamp Records.

## Setup
```
npm install 

npm run dev
```
opens in http://localhost:3000 on a browser

## Tech Stack
 - Next.js

## Contributers:
See 'Branch Strategy' under Contribution tab.

## Contact
Spotify (Alex Willow): https://open.spotify.com/artist/73etH0gcHNOnWLXD0Rbamb?si=Uf_Gsml3Ry-m6xYeyZE5eQ

Instagram (Alex Willow): https://www.instagram.com/alexwillowmusic/?hl=en

Swamp Records Website: https://www.swamprecords.org/

## Developers

Jess Anderson, Kushagra Katiyar, Adela Mikes,  Angelina Wu, Kalina Triggs, and Giovana Mitsunaga


## Live show dates

Set `BANDSINTOWN_APP_ID` to your Bandsintown application ID in the Cloudflare
Worker runtime environment. For local development, put it in `.env.local`
(which is ignored by Git). No `NEXT_PUBLIC_` prefix is needed.

The `/shows` route fetches upcoming Alex Willow events on each request with a
five-second timeout. It intentionally uses no persistent fetch cache, so it
does not require an R2 incremental-cache binding or a key during static builds.
An empty valid response displays “No upcoming shows”; configuration or API
failures display “Show dates are temporarily unavailable.” Invalid event
records are omitted, with an unavailable state if none are usable.

Run `npm test` for the mocked API regression tests, `npm run build` for the
Next.js build, and `npx opennextjs-cloudflare build` for the Cloudflare bundle.
