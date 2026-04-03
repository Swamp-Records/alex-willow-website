"use client";
import Image from "next/image";

export default function BioSection() {
  return (
    <section className="bio-section">
      <div className="bio-inner">
        {/* LEFT: Text */}
        <div className="bio-text">
          <h2 className="bio-title">Alex Willow.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sed pulvinar ipsum faucibus
            convallis amet ullamcorper mi lacus. Pulvinar a integer est purus
            massa. Justo suspendisse lacinia dignissim a quisque ultrices
            ridiculus. Sit ut at mauris proin facilisi consequat euismod id
            est.
          </p>
          <p>
            Feugiat in leo eget nunc consectetur nullam ultrices vel. Mi tortor
            hac convallis sit commodo faucibus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className="bio-icons">
            <a href="#" aria-label="Spotify">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
            </a>
            <a href="#" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
            </a>
          </div>
        </div>

        {/* RIGHT: Photo */}
        <div className="bio-image-wrap">
          <div className="bio-image-frame">
            {/* Replace src with your actual artist photo */}
            <div className="bio-image-placeholder" />
            <span className="bio-image-caption">Alex Willow</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bio-section {
          background-color: #6b7a9a;
          padding: 4rem 1.5rem 4.5rem;
          position: relative;
        }

        .bio-inner {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        /* TEXT SIDE */
        .bio-text {
          color: #f0ece4;
        }

        .bio-title {
          font-family: 'Brush Script MT', 'Dancing Script', cursive;
          font-size: clamp(2.2rem, 6vw, 3.2rem);
          font-weight: 400;
          margin: 0 0 1.25rem;
          color: #f5f0e8;
          letter-spacing: 0.02em;
        }

        .bio-text p {
          font-family: 'Georgia', serif;
          font-size: 0.88rem;
          line-height: 1.75;
          color: rgba(240, 236, 228, 0.88);
          margin: 0 0 1rem;
        }

        .bio-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .bio-icons a {
          color: rgba(240, 236, 228, 0.75);
          display: flex;
          align-items: center;
          transition: color 0.2s, transform 0.2s;
        }

        .bio-icons a:hover {
          color: #fff;
          transform: translateY(-2px);
        }

        /* IMAGE SIDE */
        .bio-image-wrap {
          display: flex;
          justify-content: center;
        }

        .bio-image-frame {
          position: relative;
          background: #f5f0e8;
          padding: 10px 10px 36px;
          box-shadow: 4px 6px 24px rgba(0,0,0,0.25);
          transform: rotate(1.5deg);
          transition: transform 0.35s ease;
          max-width: 260px;
          width: 100%;
        }

        .bio-image-frame:hover {
          transform: rotate(0deg) scale(1.02);
        }

        .bio-image-placeholder {
          width: 100%;
          aspect-ratio: 3/4;
          background: linear-gradient(160deg, #9fa8b8 0%, #6b7a9a 100%);
          display: block;
        }

        /* Swap placeholder for real image:
           <Image src="/alex-willow.jpg" alt="Alex Willow" fill style={{objectFit:'cover'}} />
        */

        .bio-image-caption {
          display: block;
          text-align: right;
          font-family: 'Brush Script MT', cursive;
          font-size: 1.1rem;
          color: #7a7068;
          padding-top: 6px;
          letter-spacing: 0.03em;
        }

        /* RESPONSIVE */
        @media (max-width: 640px) {
          .bio-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .bio-image-frame {
            max-width: 200px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}