"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background */}
      <div className="hero-bg" />

      {/* Hero content */}
      <div className="hero-content">
        <h1 className="hero-title">Alex Willow.</h1>

        {/* Polaroid cluster with overlapping + floating logo */}
        <div className="polaroid-cluster">

          {/* Left polaroid */}
          <div className="polaroid polaroid-left">
            <div className="polaroid-photo-left" />
          </div>

          {/* Center polaroid */}
          <div className="polaroid polaroid-center">
            <div className="polaroid-photo-center" />
          </div>

          {/* Right polaroid */}
          <div className="polaroid polaroid-right">
            <div className="polaroid-photo-right" />
          </div>

        </div>
      </div>

      
      <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100svh;
          overflow: hidden;
          background-color: #2c2a25;
          display: flex;
          flex-direction: column;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('homepage-background.jpg');
          background-size: cover;
          background-position: center 30%;
          filter: brightness(0.5) saturate(0.65);
          z-index: 0;
        }

        /* HERO CONTENT */
        .hero-content {
          position: relative;
          z-index: 5;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem 6rem;
          gap: 2.5rem;
        }

        /* TITLE */
        .hero-title {
          font-family: "Lavishly Yours";
          font-size: clamp(60px, 10vw, 160px);
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-align: center;
        }

        /* POLAROID CLUSTER */
        .polaroid-cluster {
          position: relative;
          display: flex;
          align-items: flex-end;
          /* negative margins create the overlap */
        }

        .polaroid {
          background: #f5efe0;
          padding: 8px 8px 32px;
          box-shadow: 3px 5px 18px rgba(0,0,0,0.4);
          width: 150px;
          position: relative;
          transition: transform 0.3s ease, z-index 0s;
          flex-shrink: 0;
        }

        .polaroid:hover {
          z-index: 20 !important;
          transform: scale(1.06) rotate(0deg) !important;
        }

        .polaroid-left {
          transform: rotate(-10deg) translateY(8px);
          z-index: 1;
          margin-right: -28px;
        }

        .polaroid-center {
          transform: rotate(-2deg);
          z-index: 3;
          margin-right: -28px;
        }

        .polaroid-right {
          transform: rotate(7deg) translateY(5px);
          z-index: 2;
        }

        .polaroid-photo-left {
          width: 100%;
          aspect-ratio: 1 / 1.05;
          background: url('candid.jpg');
          background-size: cover;
          background-position: center;
          display: block;
        }

        .polaroid-photo-center {
          width: 100%;
          aspect-ratio: 1 / 1.05;
          background: url('alex-headshot.jpg');
          background-size: cover;
          background-position: center;
          display: block;
        }

        .polaroid-photo-right {
          width: 100%;
          aspect-ratio: 1 / 1.05;
          background: url('coop-and-alex.jpg');
          background-size: cover;
          background-position: center;
          display: block;
        }

        /* RESPONSIVE */
        @media (max-width: 600px) {
          .polaroid {
            width: 95px;
          }
          .polaroid-left {
            margin-right: -20px;
          }
          .polaroid-center {
            margin-right: -20px;
          }
        }
      `}</style>
    </section>
  );
}