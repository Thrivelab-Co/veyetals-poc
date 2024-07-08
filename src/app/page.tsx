'use client'

import Veyetals from "@/components/veyetals";
import { useState } from "react";

export default function Home() {
  const [showUI, setShowUI] = useState(false);

  const handleClick = () => {
    setShowUI(true);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold text-center">
        Welcome to Thrivelabs POC
      </h1>
      { showUI && <Veyetals showUI={showUI}/> }
      { !showUI && (
        <button className="p-4 rounded bg-indigo-400 cursor-pointer" onClick={handleClick}>
          Start by clicking here
        </button>
      )}
      <div className="flex flex-col items-center space-y-4">
        <p className="text-lg text-center">
          This is a proof of concept for Thrivelab.
        </p>
      </div>

    </main>
  );
}
