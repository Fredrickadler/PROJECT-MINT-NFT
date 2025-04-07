"use client";

import { useEffect, useState } from "react";
import { sdk } from "@farcaster/frame-sdk";

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initializeSdk = async () => {
      try {
        await sdk.actions.ready(); // منتظر آماده شدن SDK
        console.log("SDK is ready!");
        setIsReady(true);
      } catch (error) {
        console.error("SDK initialization failed:", error);
      }
    };
    initializeSdk();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a2e] text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Eternal Gateway NFT</h1>
      <p className="text-lg mb-4">
        {isReady ? "Debug: SDK is ready!" : "Debug: Loading SDK..."}
      </p>
      <img
        src="https://nft-mint-mini-app.vercel.app/images/nft_image.png"
        alt="Eternal Gateway NFT"
        className="w-64 h-64 object-cover rounded-lg mb-4"
        onError={(e) => console.log("Image load error:", e)}
      />
      <p className="text-center mb-4">
        In ancient sunsets, this stone gateway led to 44 lost realms—Each realm
        holding an untold secret! Only 44 guardians can claim the key to this
        gate. Do you dare to become one and unveil its mysteries?
      </p>
      <p className="text-lg mb-4">Price: 0.0004 ETH ($0.68)</p>
      <a
        href="https://opensea.io/assets/base/0xe2ba182898141f19b4a7d739c715cd162d31766c/1/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        Mint Now on OpenSea
      </a>
    </div>
  );
}