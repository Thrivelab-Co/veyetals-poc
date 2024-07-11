'use client';
import Veyetals from "@/components/veyetals";
import { useState } from "react";

export default function Home() {
  const [shouldStartScanning, setShouldStartScanning] = useState(false);
  const [shouldShowResults, setShouldShowResults] = useState(false);
  const [jsonData, setJsonData] = useState({});

  const handleClick = () => {
    setShouldStartScanning(true);
  }

  const handleComplete = (data: any) => {
    setJsonData(data);
    setShouldShowResults(true);
  };

  const WelcomeComponent = () => {
    return (
      <view className="flex flex-col p-24 justify-between min-h-screen">
        <h1 className="text-3xl font-bold text-center">
          Welcome to Thrivelabs POC
        </h1>
        <button className="p-4 rounded bg-indigo-400 cursor-pointer" onClick={handleClick}>
          Start by clicking here
        </button>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg text-center">
            This is a proof of concept for Thrivelab.
          </p>
          <pre>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "@veyetals/react-veyetals-view": "^1.4.2"
          </pre>
        </div>
      </view>
    );
  }

  const ResultsComponent = () => {
    return (
      <view className="flex flex-col p-24 gap-6 min-h-screen">
        <h1 className="text-3xl font-bold text-center">
          Results
        </h1>
        <div className="flex flex-col items-center space-y-4">
          <pre className="mt-4 p-4 rounded text-left overflow-auto">
            <code>
              {JSON.stringify(jsonData, null, 2)}
            </code>
          </pre>
        </div>
      </view>
    );
  }

  const VeyetalsComponent = () => {
    return shouldShowResults ? <ResultsComponent/> : <Veyetals onComplete={handleComplete}/>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {shouldStartScanning ? <VeyetalsComponent /> : <WelcomeComponent />}
    </main>
  );
}
