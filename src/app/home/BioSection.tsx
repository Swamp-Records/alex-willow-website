"use client";
import Image from "next/image";
import Link from "next/link";

import Instagram from "../../../public/Instagram.svg";
import Mail from "../../../public/Mail.svg";
import Spotify from "../../../public/Spotify.svg";
import Youtube from "../../../public/Youtube.svg";

export default function BioSection() {
  return (
    <section className="bio-section">
      {/* SOCIAL LINKS */}
      <div className="social-links">
        <Link href="https://open.spotify.com/artist/73etH0gcHNOnWLXD0Rbamb" target="_blank">
          <Image src={Spotify} height={35} width={35} alt="Spotify"/>
        </Link>
        <Link href="mailto:alexwillowmusic@gmail.com">
          <Image src={Mail} height={35} width={35} alt="Mail"/>
        </Link>
        <Link href="https://www.instagram.com/alexwillowmusic/" target="_blank">            
          <Image src={Instagram} height={35} width={35} alt="Instagram"/>
        </Link>
        <Link href="https://www.youtube.com/@alex.willow" target="_blank">            
          <Image src={Youtube} height={35} width={35} alt="Youtube"/>
        </Link>
      </div>

      <div className="bio-inner">
        {/* BIO CONTENT */}
        <div className="bio-text">
          <h1 className="bio-title">About Alex</h1>
          <p>
            When Alex Willow began to sing, he crossed over into a world he knew he’d never leave. With a mystical readiness, 
            the blue-ink secrets etched in his leatherbound journal turned to sonic histories begging to be told. At 20-years old, 
            this Floridian singer-songwriter houses a wisdom rarely found, imbued with the urgency and vitality characteristic of youth. 
            Delicate melodies and commanding vocals evoke the artistry of Ryan Beatty and Conan Gray, with an intimate lyricism uniquely his own. 
            The debut single “Shin Splints” follows Alex as he balances the future and the past, the real and the unreal. Willow, the forthcoming 
            EP, will capture the strenuous emotions of an adolescence marked by shame, loss, forgiveness, and love. Crossing the boundary from 
            musician to storyteller, Alex Willow’s words will remain in your mind, his voice in your heart, and his songs forever a part of you.
          </p>
        </div>
        <div className="bio-image-container">
          <div className="bio-image" />
        </div>
      </div>

      <style jsx>{`
        .bio-section {
          position: relative;
          width: 100%;
          background: #4F6A89;
          padding: 4rem 2rem 5rem;
          overflow: hidden;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          align-items: center;
          width: fit-content;
          margin: 0 auto; 
          gap: 4rem;
          padding: 0.5rem 4rem;
          background-color: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
          border: 1px solid #B3B3B3;
          border-radius: 9999px;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
        }

        .bio-inner {
          display: grid;
          grid-template-columns:  2fr 1fr;
          gap: 4rem;
          max-width: 1000px;
          padding-top: 2rem;
          margin: 3rem auto 0; 
          align-items: start; 
          justify-content: center; 
        }

        .bio-text {
          color: #fff;
          text-shadow: 1px 3px 10px rgba(0,0,0,0.4);
        }

        .bio-title {
          font-size: 5rem;
          margin-top: -5rem;
          margin-bottom: 1rem;
        }

        .bio-image-container {
          background: #f5efe0;
          padding: 5px 5px 5px;
          box-shadow: 3px 5px 18px rgba(0,0,0,0.4);
          width: 18rem;
          position: relative;
        }

        .bio-image {
          width: 100%;
          aspect-ratio: 1 / 1.5;
          background: url('blur-portrait.jpg');
          background-size: cover;
          background-position: center;
          display: block; 
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .bio-inner {
            display: block;
            text-align: center;
          }
          
          .bio-image-container {
            margin: 3rem auto;
          }

          .bio-title {
            font-size: 4rem;
          }

          .social-links {
            gap: 2rem;
            padding: 0.5rem 3rem;
          }
        }
      `}</style>
    </section>
  );
}