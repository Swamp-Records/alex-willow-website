"use client";
import Image from "next/image";

const PRESAVE_URL = "https://distrokid.com/hyperfollow/alexwillow/adolescence";
const RELEASE_DATE = new Date(2026, 10, 4); // months count from 0, so 10 = November

// Works out how many days are left until release.
function daysUntilRelease(): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((RELEASE_DATE.getTime() - today.getTime()) / 86_400_000);
}

export default function PresaveSection() {
  const days = daysUntilRelease();
  const isOut = days <= 0;
  const countdown = isOut ? "Out now" : days === 1 ? "Out tomorrow" : `Out in ${days} days`;

  return (
    <section className="presave-section">
      <div className="presave-inner">
        <div className="cover-polaroid">
          <Image
            src="/adolescence-cover.jpg"
            alt="Adolescence cover art"
            width={600}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="presave-text">
          <p className="presave-eyebrow">New single</p>
          <h2 className="presave-title">Adolescence</h2>
          <p className="presave-date" suppressHydrationWarning>
            {countdown} · November 4
          </p>

          <div className="presave-buttons">
            <a className="presave-btn" href={PRESAVE_URL} target="_blank" rel="noopener noreferrer" suppressHydrationWarning>
              {isOut ? "Listen now" : "Pre-save now"}
            </a>
            <p className="presave-platforms">
              Spotify · Apple Music · YouTube · TikTok · Instagram
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .presave-section {
          position: relative;
          width: 100%;
          background: #4F6A89;
          padding: 5rem 2rem;
          overflow: hidden;
        }

        .presave-inner {
          max-width: 1150px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .cover-polaroid {
          background: #f5efe0;
          padding: 10px 10px 48px;
          box-shadow: 3px 5px 18px rgba(0, 0, 0, 0.4);
          max-width: 480px;
          justify-self: center;
          transform: rotate(-3deg);
          transition: transform 0.3s ease;
        }

        .cover-polaroid:hover {
          transform: rotate(0deg) scale(1.03);
        }

        .presave-eyebrow {
          font-family: 'Kurale', serif;
          font-size:1.1rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #D8D1C8;
          margin: 0;
        }

        .presave-title {
          font-family: 'Lavishly Yours', cursive;
          font-size: clamp(5rem, 11vw, 9rem);
          color: #fff;
          line-height: 1;
          padding-bottom: 0.2em;
          margin: 0;
          text-shadow: 1px 3px 10px rgba(0, 0, 0, 0.4);
        }

        .presave-date {
          color: #d2e6ff;
          font-size: 1.5rem;
          margin: 0.25rem 0 2rem;
        }

        .presave-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 360px;
        }

        .presave-btn {
          display: block;
          text-align: center;
          font-size: 1.15rem;
          padding: 0.9rem 1.5rem;
          border-radius: 9999px;
          background: #fff;
          color: #4F6A89;
          font-weight: bold;
          text-decoration: none;
          border: 2px solid #fff;
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }

        .presave-btn:hover {
          transform: translateY(-2px);
        }

        .presave-platforms {
          color: #D8D1C8;
          font-size: clamp(0.65rem, 2.8vw, 0.95rem);
          white-space: nowrap;
          text-align: center;
          margin: 0;
        } 

        .presave-btn.secondary {
          background: transparent;
          color: #fff;
        }

        .presave-btn.secondary:hover {
          background: #fff;
          color: #4F6A89;
        }

        @media (max-width: 768px) {
          .presave-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .cover-polaroid {
            max-width: 320px;
          }
          .presave-buttons {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}