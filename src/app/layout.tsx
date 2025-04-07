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
        url: "https://nft-mint-mini-app.vercel.app/images/frame_image.png", // تصویر فریم
        width: 1200,
        height: 800,
        alt: "Eternal Gateway NFT",
      },
    ],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://nft-mint-mini-app.vercel.app/images/frame_image.png", // تصویر فریم
    "fc:frame:button:1": "Mint Eternal Gateway", // عنوان دکمه
    "fc:frame:button:1:action": "link", // اکشن مستقیم برای هدایت
    "fc:frame:button:1:target": "https://nft-mint-mini-app.vercel.app", // URL مینی اپ
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