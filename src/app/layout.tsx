import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Eternal Gateway NFT",
  description: "Mint the Eternal Gateway NFT on Farcaster!",
  openGraph: {
    title: "Eternal Gateway NFT",
    description: "Mint the Eternal Gateway NFT on Farcaster!",
    images: [
      {
        url: "https://nft-mint-mini-app.vercel.app/images/frame_image.png",
        width: 1200,
        height: 800,
        alt: "Eternal Gateway NFT",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const frameEmbed = JSON.stringify({
    version: "next",
    imageUrl: "https://nft-mint-mini-app.vercel.app/images/frame_image.png",
    button: {
      title: "Mint Now",
      action: {
        type: "launch_frame",
        url: "https://nft-mint-mini-app.vercel.app",
        name: "Eternal Gateway",
        splashImageUrl: "https://nft-mint-mini-app.vercel.app/images/nft_image.png",
        splashBackgroundColor: "#1a1a2e",
      },
    },
  });

  return (
    <html lang="en">
      <head>
        <meta name="fc:frame" content={frameEmbed} />
      </head>
      <body>{children}</body>
    </html>
  );
}