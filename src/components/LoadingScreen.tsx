import React, { useState, useEffect } from 'react';
import { Droplets } from 'lucide-react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 z-[100] flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl mb-8 animate-pulse">
          <Droplets className="w-12 h-12 text-white" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl text-white mb-4">
          AI-Irrigatsiya
        </h1>

        {/* Subtitle */}
        <p className="text-green-100 text-lg mb-8">
          Yuklanmoqda...
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="text-white mt-4">
          {progress}%
        </div>
      </div>
    </div>
  );
}
