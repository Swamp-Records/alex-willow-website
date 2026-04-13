"use client";
import Image from "next/image";
import Link from "next/link";
import Spotify from "../../../public/Spotify-blue.svg";
import Youtube from "../../../public/Youtube-blue.svg";

export default function MusicSection() {
  return (
    <section className="music-section">

        <div className="lined-paper" />

        <div className="flower-right">
            <Image
                src="/flower-image.png"
                alt="Flower graphic"
                aria-hidden="true"
                width={400}
                height={400}
                style={{ width: "auto", height: "auto" }}
                priority
            />
        </div>
 

        <div className="music-inner">
            
            <div className="folder">
                <Link href="/lyrics">
                    <Image
                        src="/portfolio-graphic.svg"
                        alt="Willow promo card"
                        width={800}
                        height={600}
                        style={{ width: "100%", height: "auto" }}
                        priority
                    />
                </Link>
            </div>

            <div className="stream-section">
                <div className="stream-card">

                    <div className="ipod-wrapper">
                        <Link href="https://open.spotify.com/track/57i8vNUy8JVA5QTo0UuMXf?si=59804a98e1854796" target="_blank">
                            <Image
                                src="/iPod.png"
                                alt="iPod Classic"
                                width={300}
                                height={400}
                                style={{ width: "100%", height: "auto" }}
                                priority
                            />
                        </Link>
                    </div>

                    <div className="stream-icons">
                        <Link href="https://open.spotify.com/artist/73etH0gcHNOnWLXD0Rbamb" target="_blank">
                            <Image src={Spotify} height={45} width={45} alt="Spotify"/>
                        </Link>
                        <Link href="https://www.youtube.com/@alex.willow" target="_blank">
                            <Image src={Youtube} height={45} width={45} alt="Youtube"/>
                        </Link>
                    </div>

                    <h2 className="stream-text">Stream &ldquo;Shin Splints&rdquo;</h2>
                </div>
            </div>
        </div>

        <style jsx>{`
            .music-section {
                position: relative;
                width: 100%;
                background: #D8D1C8;
                padding: 5rem 2rem 7rem;
                overflow: hidden;
            } 

            .lined-paper {
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

            .flower-right {
                position: absolute;
                bottom: 0;
                right: 0;
                z-index: 0;
                pointer-events: none;
                user-select: none;
                opacity: 0.9;
            }

            .music-inner {
                position: relative;
                z-index: 1;
                max-width: 1000px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 1fr 1.5fr;
                gap: 12rem;
                align-items: center;
            }

            .folder {
                transition: transform 0.3s ease-in-out; 
                scale: 1.2;
                filter: drop-shadow(0 4px 4px rgba(0,0,0,.8));
            }

            .folder:hover {
                z-index: 20 !important;
                transform: scale(1.1) rotate(3deg);
            }

            .stream-card {
                position: relative;
                border: 2px solid #50749F;
                border-radius: 6px;
                min-height: 320px;
                background: transparent;
            }

            .ipod-wrapper {
                position: absolute;
                top: -5%;
                left: -5%;
                width: 65%;
                max-width: 300px;
                z-index: 2;
            }

            .ipod-wrapper:hover {
                transform: scale(1.05) rotate(3deg);
                transition: transform 0.3s ease-in-out;
            }

            .stream-icons {
                position: absolute;
                top: 14px;
                right: 14px;
                display: flex;
                gap: 16px;
                align-items: center;
                z-index: 3;
            }

            .stream-text {
                position: absolute;
                bottom: 10px;
                right: 10px;
                text-align: right;
                margin: 0;
                font-size: 2rem;
                font-weight: bold;
                color: #50749F;
                }

            /* Mobile adjustments */
            @media (max-width: 710px) {
                .flower-right {
                    width: 100px;
                    bottom: 0;
                    right: 0;
                }
                .music-inner {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }

                .folder {
                    scale: 0.67;
                    margin-top: -3rem;
                }
                
                .stream-card {
                    min-height: 350px;
                    min-width:350px;
                }

                .ipod-wrapper {
                    position: relative;
                    top: -10px;
                    bottom: 30px;
                }
                
            }
        `}</style>
    </section>
  );
}