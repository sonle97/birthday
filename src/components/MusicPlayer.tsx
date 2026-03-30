"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/**
 * Happy Birthday melody — synthesized via Web Audio API.
 * No external files needed. The traditional melody is public domain.
 *
 * Each note: [frequency Hz, duration seconds]
 * Frequency 0 = rest
 */
const NOTE_C4 = 261.63, NOTE_D4 = 293.66, NOTE_E4 = 329.63, NOTE_F4 = 349.23;
const NOTE_G4 = 392.00, NOTE_A4 = 440.00, NOTE_Bb4 = 466.16, NOTE_C5 = 523.25;

const MELODY: [number, number][] = [
  // "Hap-py birth-day to you"
  [NOTE_C4, 0.3], [NOTE_C4, 0.15], [NOTE_D4, 0.5], [NOTE_C4, 0.5], [NOTE_F4, 0.5], [NOTE_E4, 0.9],
  // "Hap-py birth-day to you"
  [NOTE_C4, 0.3], [NOTE_C4, 0.15], [NOTE_D4, 0.5], [NOTE_C4, 0.5], [NOTE_G4, 0.5], [NOTE_F4, 0.9],
  // "Hap-py birth-day dear ..."
  [NOTE_C4, 0.3], [NOTE_C4, 0.15], [NOTE_C5, 0.5], [NOTE_A4, 0.5], [NOTE_F4, 0.4], [NOTE_E4, 0.4], [NOTE_D4, 0.8],
  // "Hap-py birth-day to you"
  [NOTE_Bb4, 0.3], [NOTE_Bb4, 0.15], [NOTE_A4, 0.5], [NOTE_F4, 0.5], [NOTE_G4, 0.5], [NOTE_F4, 0.9],
  // Short rest before loop
  [0, 0.8],
];

function createMelodyPlayer(ctx: AudioContext) {
  let timeoutIds: ReturnType<typeof setTimeout>[] = [];
  let stopped = false;

  function playOnce(onDone: () => void) {
    let time = ctx.currentTime + 0.05;

    MELODY.forEach(([freq, dur]) => {
      if (freq === 0 || stopped) {
        time += dur;
        return;
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;

      // Soft envelope
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.18, time + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, time + dur * 0.95);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(time);
      osc.stop(time + dur);

      time += dur;
    });

    // Schedule onDone after full melody
    const totalDur = MELODY.reduce((s, [, d]) => s + d, 0);
    const id = setTimeout(() => { if (!stopped) onDone(); }, totalDur * 1000);
    timeoutIds.push(id);
  }

  function loop() {
    if (stopped) return;
    playOnce(() => loop());
  }

  return {
    start: () => { stopped = false; loop(); },
    stop: () => {
      stopped = true;
      timeoutIds.forEach(clearTimeout);
      timeoutIds = [];
    },
  };
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const playerRef = useRef<ReturnType<typeof createMelodyPlayer> | null>(null);

  const startMusic = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new AudioContext();
    }
    if (ctxRef.current.state === "suspended") {
      ctxRef.current.resume();
    }
    if (!playerRef.current) {
      playerRef.current = createMelodyPlayer(ctxRef.current);
    }
    playerRef.current.start();
    setIsPlaying(true);
  }, []);

  const stopMusic = useCallback(() => {
    playerRef.current?.stop();
    playerRef.current = null;
    setIsPlaying(false);
  }, []);

  // Autoplay on first user interaction (click/touch anywhere)
  useEffect(() => {
    if (hasInteracted) return;

    const handleInteraction = () => {
      setHasInteracted(true);
      startMusic();
    };

    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [hasInteracted, startMusic]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      playerRef.current?.stop();
      ctxRef.current?.close();
    };
  }, []);

  const toggle = () => {
    setHasInteracted(true);
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
      <button
        onClick={toggle}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl flex items-center justify-center ${
          isPlaying
            ? "bg-gradient-to-br from-sky-400 to-sky-600 shadow-glow-sky"
            : "glass-strong shadow-3d"
        }`}
        aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        {/* Pulse ring */}
        {isPlaying && (
          <div
            className="absolute inset-0 rounded-2xl bg-sky-400/20"
            style={{
              animation: "music-pulse 1.2s ease-out infinite",
            }}
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
                x1="4" y1="4" x2="20" y2="20"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              />
            )}
          </svg>

          {/* Sound wave bars */}
          {isPlaying && (
            <div className="absolute -top-1.5 -right-1.5 flex gap-[2px] items-end">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-[3px] bg-white rounded-full"
                  style={{
                    height: 3,
                    "--bar-max": `${8 + i * 2}px`,
                    animation: `sound-bar 0.5s ease-in-out infinite`,
                    animationDelay: `${i * 0.12}s`,
                  } as React.CSSProperties}
                />
              ))}
            </div>
          )}
        </div>
      </button>
    </>
  );
}
