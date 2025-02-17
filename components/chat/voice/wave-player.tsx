"use client";

import { useRef, useState, useEffect, RefObject } from "react";

import WaveSurfer from "wavesurfer.js";

// WaveSurfer hook
interface useWavesurferProps {
  audioUrl: string;
  containerRef: RefObject<HTMLDivElement | null>;
}

const useWavesurfer = ({ containerRef, audioUrl }: useWavesurferProps) => {
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);

  useEffect(() => {
    if (!containerRef.current || !audioUrl) return;

    const props = { url: audioUrl };

    const ws = WaveSurfer.create({
      container: containerRef.current,
      cursorWidth: 0,
      barHeight: 2.5,
      height: "auto",
      waveColor: "#B2B2B2",
      progressColor: "#6750A4", //"#8B52F6",
      barWidth: 3,
      barGap: 6,
      barRadius: 16,
      ...props,
    });

    setWavesurfer(ws);

    return () => {
      ws.destroy();
      URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl, containerRef]);

  return wavesurfer;
};

type Props = {
  audioUrl: string;
  playbackState: "play" | "pause" | "default";
  setCurrentTime: (value: string) => void;
  setDuration: (value: string) => void;
  setIsPlaying: (value: boolean) => void;
};

const WaveSurferPlayer = ({
  audioUrl,
  playbackState,
  setCurrentTime,
  setDuration,
  setIsPlaying,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useWavesurfer({ containerRef, audioUrl });

  useEffect(() => {
    const x = async () => {
      try {
        if (!wavesurfer) return;

        await wavesurfer.playPause();
      } catch (e) {
        console.log(e);
      }
    };

    x();
  }, [playbackState]);

  //   const onPlayClick = useCallback(() => {
  //     if (!wavesurfer) return;

  //     wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play();
  //   }, [wavesurfer]);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!wavesurfer) return;

    const subscriptions = [
      wavesurfer.on("play", () => setIsPlaying(true)),
      wavesurfer.on("pause", () => setIsPlaying(false)),
      wavesurfer.on("decode", (duration) => setDuration(formatTime(duration))),
      wavesurfer.on("timeupdate", (currentTime) =>
        setCurrentTime(formatTime(currentTime))
      ),
    ];

    const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const secondsRemainder = Math.round(seconds) % 60;
      const paddedSeconds = `0${secondsRemainder}`.slice(-2);
      return `${minutes}:${paddedSeconds}`;
    };

    return () => {
      subscriptions.forEach((unsub) => unsub());
    };
  }, [wavesurfer, setCurrentTime, setIsPlaying, setDuration]);

  return <div ref={containerRef} className="h-full w-full" />;
};

export default WaveSurferPlayer;
