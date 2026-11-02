import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, ArrowRight } from 'lucide-react';

export default function VideoIntro({ onComplete }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Attempt to autoplay on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if browser requires muted autoplay
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, []);

  const handleFinish = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 500);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(pct);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[9998] bg-black flex items-center justify-center overflow-hidden transition-opacity duration-500 ease-out select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Cinematic Video Player */}
      <video
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        playsInline
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleFinish}
        className="w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Floating Header Controls */}
      <div className="absolute top-6 sm:top-8 left-6 sm:left-8 right-6 sm:right-8 flex items-center justify-between z-20 pointer-events-auto">
        {/* Subtle Brand Tag */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium text-white/80">
          <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
          <span>GAMA Introduction</span>
        </div>

        {/* Action Controls: Mute + Skip */}
        <div className="flex items-center gap-3">
          {/* Mute / Unmute Button */}
          <button
            onClick={toggleMute}
            type="button"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-all text-xs sm:text-sm font-medium cursor-pointer shadow-lg active:scale-95"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-slate-300 group-hover:text-white" />
                <span>Unmute</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#38BDF8] group-hover:text-white" />
                <span>Mute</span>
              </>
            )}
          </button>

          {/* Skip Video Button */}
          <button
            onClick={handleFinish}
            type="button"
            className="group flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white text-[#0F172A] hover:bg-[#38BDF8] hover:text-[#0F172A] transition-all text-xs sm:text-sm font-semibold cursor-pointer shadow-xl active:scale-95"
          >
            <span>Skip Video</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Bottom Sleek Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/15 z-20">
        <div
          className="h-full bg-gradient-to-r from-[#0457DF] via-[#00D4FF] to-[#34D399] transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
