"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const TRACK_SRC = "/music.mp3";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  const stopMusic = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const tryAutoplay = async () => {
      const audio = audioRef.current;
      if (!audio) return;
      try {
        await audio.play();
        if (!cancelled) {
          setIsPlaying(true);
        }
      } catch {
        // Browser blocked autoplay — wait for first user interaction
        const handleInteraction = () => {
          startMusic();
        };
        window.addEventListener("click", handleInteraction, { once: true });
        window.addEventListener("touchstart", handleInteraction, { once: true });
        window.addEventListener("keydown", handleInteraction, { once: true });
        window.addEventListener("scroll", handleInteraction, { once: true, passive: true });
      }
    };

    tryAutoplay();

    return () => {
      cancelled = true;
    };
  }, [startMusic]);

  const toggle = () => {
    if (isPlaying) stopMusic();
    else startMusic();
  };

  return (
    <>
      <style>{`
        @keyframes music-pulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes sound-bar {
          0%, 100% { height: 3px; }
          50% { height: var(--bar-max); }
        }
      `}</style>

      <audio ref={audioRef} src={TRACK_SRC} loop preload="auto" />

      <button
        onClick={toggle}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
          isPlaying
            ? "bg-gradient-to-br from-sky-400 to-sky-600 shadow-glow-sky"
            : "glass-strong shadow-3d"
        }`}
        aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        {isPlaying && (
          <div
            className="absolute inset-0 rounded-2xl bg-sky-400/20"
            style={{ animation: "music-pulse 1.2s ease-out infinite" }}
          />
        )}

        <div className="relative">
          <svg
            className={`w-6 h-6 ${isPlaying ? "text-white" : "text-sky-500"}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            {!isPlaying && (
              <line
                x1="4"
                y1="4"
                x2="20"
                y2="20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>

          {isPlaying && (
            <div className="absolute -top-1.5 -right-1.5 flex gap-[2px] items-end">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-[3px] bg-white rounded-full"
                  style={
                    {
                      height: 3,
                      "--bar-max": `${8 + i * 2}px`,
                      animation: "sound-bar 0.5s ease-in-out infinite",
                      animationDelay: `${i * 0.12}s`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
          )}
        </div>
      </button>
    </>
  );
}
