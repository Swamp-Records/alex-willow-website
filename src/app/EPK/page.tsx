"use client";
import Image from "next/image";
import Link from "next/link";

import InstagramSVG from "../../../public/Instagram.svg";
import MailSVG from "../../../public/Mail.svg";
import SpotifySVG from "../../../public/Spotify.svg";
import YoutubeSVG from "../../../public/Youtube.svg";
import SpotifyBlueSVG from "../../../public/Spotify-blue.svg";
import YoutubeBlueSVG from "../../../public/Youtube-blue.svg";

const ARTIST_PHOTO_L  = "/flower-image2.svg";
const COLLAGE_IMG     = "/flower-image.png";

export default function EPK() {
  return (
    <main className="epk-root">

      {/*hero*/}
      <section className="epk-hero">
        <div className="hero-bg" />
        <div className="hero-overlay">
          <span className="hero-title">About</span>
        </div>
      </section>

      {/*bio*/}
      <section className="epk-bio">
        <div className="lined-bg" />

        <div className="bio-row">
          {/*flower*/}
          <div className="bio-photo-left">
            <Image
              src={ARTIST_PHOTO_L}
              alt="Alex Willow"
              unoptimized
              width={242}
              height={650}
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div
            className="bio-text-box"
          >
            <p className="bio-body">
              When Alex Willow began to sing, he crossed over into a world he knew he&apos;d never leave.
              With a mystical readiness, the blue-ink secrets etched in his leatherbound journal turned to
              sonic histories begging to be told. At 20-years old, this Floridian singer-songwriter houses
              a wisdom rarely found, imbued with the urgency and vitality characteristic of youth. Delicate
              melodies and commanding vocals evoke the artistry of Ryan Beatty and Conan Gray, with an
              intimate lyricism uniquely his own. The debut single &ldquo;Shin Splints&rdquo; follows Alex
              as he balances his future and the past, the real and the unreal. Willow, the forthcoming EP,
              will capture the strenuous emotion of an adolescence marked by shame, loss, forgiveness and
              love. Crossing the boundary from musician to storyteller, Alex Willow&apos;s words will
              remain in your mind, his voice in your heart, and his songs forever a part of you.
            </p>
          </div>

          {/*artist photo + emblem */}
          <div className="bio-deco-col">
            <div className="bio-emblem">
              <Image
                src="/AlexWillowLogo.png"
                alt="Willow Emblem"
                width={253}
                height={241}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>

        {/*polaroids */}
        <div className="bio-deco-row">
          <div className="bio-blue-bar" />
          <div className="deco-collage">
            <Image
              src={COLLAGE_IMG}
              alt=""
              unoptimized
              aria-hidden
              width={422}
              height={470}
              style={{ width: "100%", height: "auto", transform: "rotate(-0.86deg)" }}
            />
          </div>
          <div className="deco-polaroid deco-polaroid--neg">
            <div className="polaroid-inner">
              <div className="polaroid-photo" style={{ backgroundImage: "url('/coop-and-alex.jpg')" }} />
            </div>
          </div>
          <div className="deco-polaroid deco-polaroid--pos">
            <div className="polaroid-inner">
              <div className="polaroid-photo" style={{ backgroundImage: "url('/alex-headshot.jpg')" }} />
            </div>
          </div>
        </div>
      </section>

      {/*gallery*/}
      <section className="epk-gallery">
        <div className="lined-bg" />

        <span className="section-title gallery-title">Gallery</span>

        <div className="gallery-row">
          {[
            { src: "/candid.jpg",        rot: -2.97 },
            { src: "/alex-headshot.jpg", rot:  4.54 },
            { src: "/coop-and-alex.jpg", rot: -1.22 },
            { src: "/AW18.jpg",          rot: -1.22 },
          ].map(({ src, rot }, i) => (
            <div
              key={i}
              className="gallery-polaroid"
              style={{ transform: `rotate(${rot}deg)` }}
            >
              <div className="gallery-photo" style={{ backgroundImage: `url('${src}')` }} />
            </div>
          ))}
        </div>

        <div className="gallery-divider" />
      </section>

      {/* music */}
      <section className="epk-music">
        <div className="lined-bg" />

        <span className="section-title music-title">Music</span>

        <div className="music-row">
          <div className="latest-single">
            <div className="ipod-wrap">
              <Link href="https://open.spotify.com/track/57i8vNUy8JVA5QTo0UuMXf?si=59804a98e1854796" target="_blank">
                <Image
                  src="/iPod.png"
                  alt="iPod Classic — Shin Splints"
                  width={327}
                  height={510}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </Link>
            </div>
            <div className="single-card">
              <div className="single-icons">
                <Link href="https://open.spotify.com/artist/73etH0gcHNOnWLXD0Rbamb" target="_blank">
                  <Image src={SpotifyBlueSVG} height={45} width={45} alt="Spotify" />
                </Link>
                <Link href="https://www.youtube.com/@alex.willow" target="_blank">
                  <Image src={YoutubeBlueSVG} height={45} width={45} alt="Youtube" />
                </Link>
              </div>
              <h2 className="stream-label">Stream &ldquo;Shin Splints&rdquo;</h2>
            </div>
          </div>

          <div className="other-songs">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="song-card">
                <div className="song-icons">
                  <Link href="https://open.spotify.com/artist/73etH0gcHNOnWLXD0Rbamb" target="_blank">
                    <Image src={SpotifyBlueSVG} height={40} width={40} alt="Spotify" />
                  </Link>
                  <Link href="https://www.youtube.com/@alex.willow" target="_blank">
                    <Image src={YoutubeBlueSVG} height={40} width={40} alt="Youtube" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="epk-socials">
          <Link href="https://open.spotify.com/artist/73etH0gcHNOnWLXD0Rbamb" target="_blank">
            <Image src={SpotifySVG} height={40} width={40} alt="Spotify" />
          </Link>
          <Link href="mailto:alexwillowmusic@gmail.com">
            <Image src={MailSVG} height={40} width={40} alt="Mail" />
          </Link>
          <Link href="https://www.instagram.com/alexwillowmusic/" target="_blank">
            <Image src={InstagramSVG} height={40} width={40} alt="Instagram" />
          </Link>
          <Link href="https://www.youtube.com/@alex.willow" target="_blank">
            <Image src={YoutubeSVG} height={40} width={40} alt="Youtube" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        /* ── SHARED ───────────────────────────────────── */
        .epk-root {
          width: 100%;
          overflow-x: hidden;
        }

        .lined-bg {
          position: absolute;
          inset: 0;
          background-color: #D8D1C8;
          background-image: repeating-linear-gradient(
            transparent,
            transparent 27px,
            #909090 27px,
            #D8D1C8 28px
          );
          z-index: 0;
        }

        .section-title {
          display: block;
          position: relative;
          z-index: 1;
          font-family: 'Lavishly Yours', cursive;
          font-weight: 400;
          text-align: center;
          background: linear-gradient(to bottom, #111, #444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          padding: 0;
          margin: 0;
        }

        /* ── HERO ─────────────────────────────────────── */
        .epk-hero {
          position: relative;
          width: 100%;
          min-height: 100svh;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('/paws.png');
          background-size: cover;
          background-position: center top;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
        }

        .hero-title {
          font-family: 'Lavishly Yours', cursive;
          font-size: clamp(80px, 12vw, 150px);
          font-weight: 400;
          background: linear-gradient(to right, #fff 0%, #999 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        /* ── BIO ──────────────────────────────────────── */
        .epk-bio {
          position: relative;
          width: 100%;
          background: #D8D1C8;
          padding: 4rem 2rem 2rem;
          overflow: hidden;
        }

        .bio-row {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
          padding-bottom: 3rem;
        }

        .bio-photo-left {
          flex-shrink: 0;
          width: 200px;
          transform: rotate(6.7deg);
          margin-top: 4rem;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
        }

        .bio-text-box {
          flex: 1;
          max-width: 860px;
          background-size: cover;
          background-color: #c9b5a0;
          border-radius: 2px;
          padding: 2.5rem 3rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        }

        .bio-body {
          font-family: 'Kurale', serif;
          font-size: clamp(16px, 1.8vw, 28px);
          line-height: 1.78;
          color: #111;
        }

        .bio-deco-col {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          width: 200px;
        }

        .bio-photo-right {
          transform: rotate(-19.09deg);
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
        }

        .bio-emblem {
          width: 130px;
        }

        .bio-deco-row {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
          padding-bottom: 4rem;
        }

        .bio-blue-bar {
          position: absolute;
          bottom: 4rem;
          left: 0;
          right: 0;
          height: 282px;
          background: #4f6a89;
          z-index: -1;
        }

        .deco-collage {
          width: 360px;
          flex-shrink: 0;
        }

        .deco-polaroid {
          flex-shrink: 0;
        }

        .deco-polaroid--neg .polaroid-inner {
          transform: rotate(-23.5deg);
          background: #f5efe0;
          padding: 8px 8px 36px;
          box-shadow: 3px 5px 18px rgba(0,0,0,0.4);
          width: 260px;
        }

        .deco-polaroid--pos .polaroid-inner {
          transform: rotate(16.1deg);
          background: #f5efe0;
          padding: 8px 8px 36px;
          box-shadow: 3px 5px 18px rgba(0,0,0,0.4);
          width: 260px;
        }

        .polaroid-photo {
          width: 100%;
          aspect-ratio: 1 / 1.3;
          background-size: cover;
          background-position: center;
        }

        /* ── GALLERY ──────────────────────────────────── */
        .epk-gallery {
          position: relative;
          width: 100%;
          background: #D8D1C8;
          padding: 2rem 2rem 0;
        }

        .gallery-title {
          font-size: clamp(60px, 10vw, 128px);
          margin-bottom: 2.5rem;
        }

        .gallery-row {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
          padding-bottom: 0;
          flex-wrap: wrap;
        }

        .gallery-polaroid {
          background: #f5efe0;
          padding: 8px 8px 40px;
          box-shadow: 0 4px 4px 5px rgba(0,0,0,0.25);
          width: 280px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .gallery-polaroid:hover {
          transform: rotate(0deg) scale(1.06) !important;
          z-index: 10;
          position: relative;
        }

        .gallery-photo {
          width: 100%;
          aspect-ratio: 1 / 1.2;
          background-size: cover;
          background-position: center;
        }

        .gallery-divider {
          position: relative;
          z-index: 1;
          height: 282px;
          background: #a77d5c;
          margin: -120px -2rem 0;
        }

        /* ── MUSIC ────────────────────────────────────── */
        .epk-music {
          position: relative;
          width: 100%;
          background: #D8D1C8;
          padding: 5rem 2rem 4rem;
          overflow: hidden;
        }

        .music-title {
          font-size: clamp(60px, 10vw, 128px);
          margin-bottom: 3rem;
        }

        .music-row {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 5rem;
          max-width: 1300px;
          margin: 0 auto;
          padding-bottom: 4rem;
        }

        .latest-single {
          position: relative;
          flex-shrink: 0;
        }

        .ipod-wrap {
          position: absolute;
          top: -5%;
          left: -5%;
          width: 260px;
          z-index: 2;
          transform: rotate(12.34deg);
          transition: transform 0.3s ease;
        }

        .ipod-wrap:hover {
          transform: rotate(15deg) scale(1.05);
        }

        .single-card {
          position: relative;
          border: 3px solid #50749F;
          width: 420px;
          height: 400px;
          background: transparent;
          margin-top: 60px;
          margin-left: 60px;
        }

        .single-icons {
          position: absolute;
          top: 14px;
          right: 14px;
          display: flex;
          gap: 16px;
          align-items: center;
          z-index: 3;
        }

        .stream-label {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          font-family: 'Licorice', cursive;
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          color: #50749F;
          margin: 0;
        }

        .other-songs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          align-self: flex-end;
          margin-top: 60px;
        }

        .song-card {
          background: #676767;
          border: 3px solid #50749F;
          width: 240px;
          height: 190px;
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 12px;
        }

        .song-icons {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .epk-socials {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6rem;
          background: #4f6a89;
          border: 1px solid white;
          border-radius: 50px;
          padding: 1rem 5rem;
          width: fit-content;
          margin: 1rem auto 2rem;
          box-shadow: 0 4px 4px 2px #D8D1C8;
        }

        /* ── RESPONSIVE ───────────────────────────────── */
        @media (max-width: 1100px) {
          .bio-photo-left,
          .bio-deco-col {
            display: none;
          }
          .bio-text-box {
            max-width: 100%;
          }
        }

        @media (max-width: 900px) {
          .epk-hero {
            height: 500px;
          }
          .bio-deco-row {
            flex-wrap: wrap;
            justify-content: center;
          }
          .deco-collage {
            width: 240px;
          }
          .gallery-polaroid {
            width: 180px;
          }
          .music-row {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }
          .latest-single {
            width: 100%;
            max-width: 480px;
          }
          .single-card {
            width: 100%;
            max-width: 400px;
          }
          .other-songs {
            margin-top: 0;
          }
          .epk-socials {
            gap: 2.5rem;
            padding: 1rem 2.5rem;
          }
        }

        @media (max-width: 600px) {
          .gallery-polaroid {
            width: 130px;
            padding: 5px 5px 25px;
          }
          .bio-deco-row {
            display: none;
          }
          .song-card {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>
    </main>
  );
}
