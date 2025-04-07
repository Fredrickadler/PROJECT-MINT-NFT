import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "NFT Mint Mini App",
  description: "Mint the Eternal Gateway NFT on Farcaster!",
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://nft-mint-mini-app.vercel.app/images/frame_image.png", // URL تصویر فریم
    "fc:frame:button:1": "Enter Mini App",
    "fc:frame:button:1:action": "post_redirect",
    "fc:frame:button:1:target": "https://nft-mint-mini-app.vercel.app", // URL مینی اپ
    "fc:frame:splash_image": "https://nft-mint-mini-app.vercel.app/images/splash_image.png", // URL تصویر اسپلش
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
