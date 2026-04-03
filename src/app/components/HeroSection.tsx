"use client";
import Image from "next/image";
import NavBar from "./NavBar";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background */}
      <div className="hero-bg" />

      <NavBar />

      {/* Hero content */}
      <div className="hero-content">
        <h1 className="hero-title">Alex Willow.</h1>

        {/* Polaroid cluster with overlapping + floating logo */}
        <div className="polaroid-cluster">

          {/* Left polaroid */}
          <div className="polaroid polaroid-left">
            <div className="polaroid-photo" />
            <span className="polaroid-caption">Willow</span>
          </div>

          {/* Center polaroid */}
          <div className="polaroid polaroid-center">
            <div className="polaroid-photo" />
            <span className="polaroid-caption">Willow</span>
          </div>

          {/* Right polaroid */}
          <div className="polaroid polaroid-right">
            <div className="polaroid-photo" />
            <span className="polaroid-caption">Willow</span>
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
          font-size: 160px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
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
          width: 130px;
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

        .polaroid-photo {
          width: 100%;
          aspect-ratio: 1 / 1.05;
          background: linear-gradient(160deg, #8a9aaa 0%, #4a5a6a 60%, #2a3a4a 100%);
          display: block;
        }

        .polaroid-caption {
          display: block;
          text-align: center;
          font-family: 'Brush Script MT', cursive;
          font-size: 1.05rem;
          color: #7a8aaa;
          padding-top: 4px;
          letter-spacing: 0.02em;
        }

        /* FLOATING LOGO MEDALLION */
        .logo-medallion {
          position: absolute;
          /* sits between center and right polaroid, slightly lower */
          bottom: -18px;
          left: 50%;
          transform: translateX(10px);
          z-index: 10;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #e8dfd0;
          border: 2px solid #c8b89a;
          box-shadow: 0 3px 12px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .logo-medallion:hover {
          transform: translateX(10px) scale(1.08);
        }

        .logo-inner {
          font-family: 'Georgia', serif;
          font-size: 1.1rem;
          color: #7a6a58;
          letter-spacing: 0.08em;
          font-style: italic;
        }

        /* TORN DIVIDER */
        .torn-divider {
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          z-index: 8;
          line-height: 0;
        }

        .torn-divider svg {
          width: 100%;
          height: 80px;
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
          .logo-medallion {
            width: 56px;
            height: 56px;
          }
          .logo-inner {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}