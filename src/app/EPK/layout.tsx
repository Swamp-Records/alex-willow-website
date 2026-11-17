import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & EPK",
  description:
    "Learn about Gainesville music artist Alex Willow: bio, photos, music, and press kit. Download the EPK or stream the latest single.",
};

export default function EPKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}