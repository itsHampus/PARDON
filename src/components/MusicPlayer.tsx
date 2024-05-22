"use client";
import React, { useEffect, useRef, useState } from "react";
import Pussy_Galore from "../../public/music/Pussy_Galore_mix_10.mp3";
import { BText4 } from "./textComponents/BText4";

const MusicPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const analyserNodeRef = useRef<AnalyserNode | null>(null);
  const audioSourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [gain, setGain] = useState(0.5);
  const [duration, setDuration] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (audioRef.current && !audioContextRef.current) {
      const context = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      const source = context.createMediaElementSource(audioRef.current);
      const gainNode = context.createGain();
      const analyser = context.createAnalyser();

      source.connect(gainNode);
      gainNode.connect(analyser);
      analyser.connect(context.destination);

      audioContextRef.current = context;
      gainNodeRef.current = gainNode;
      audioSourceRef.current = source;
      analyserNodeRef.current = analyser;
    }
  }, []);

  useEffect(() => {
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = gain;
    }
  }, [gain]);

  const togglePlayPause = async () => {
    if (audioRef.current && audioContextRef.current) {
      if (audioContextRef.current.state === "suspended") {
        await audioContextRef.current.resume();
      }

      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const updateProgress = () => {
    if (audioRef.current) {
      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      );
      setDuration(audioRef.current.duration);
    }
  };

  const seekAudio = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const seekTime =
        (parseFloat(event.target.value) / 100) * audioRef.current.duration;
      audioRef.current.currentTime = seekTime;
      setProgress(parseFloat(event.target.value));
      console.log("progress: ", progress);
    }
  };

  useEffect(() => {
    const drawVisualizer = () => {
      if (canvasRef.current && analyserNodeRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          analyserNodeRef.current.fftSize = 2048;
          const bufferLength = analyserNodeRef.current.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);

          const draw = () => {
            analyserNodeRef.current!.getByteFrequencyData(dataArray);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgb(0, 50, 50, 1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const barWidth = 3;
            const barGap = 2;
            const barCount = bufferLength / (barWidth + barGap) - barGap;
            const bufferPercentage = 75;
            const bufferSize = (bufferLength * bufferPercentage) / 100;

            let x = 0;

            for (let i = 0; i < barCount; i++) {
              // get percentage of i value
              const iPerc = Math.round((i * 100) / barCount);
              // what the i percentage maps to in the frequency data
              const pos = Math.round((bufferSize * iPerc) / 100);
              const frequency = dataArray[pos];
              // frequency value in percentage
              const frequencyPerc = (frequency * 100) / 255;
              // frequency percentage value in pixel in relation to the canvas height
              const barHeight = (frequencyPerc * canvas.height) / 100;
              // flip the height so the bar is drawn from the bottom
              const y = canvas.height - barHeight;

              ctx.fillStyle = "rbga(0,0,0,1)";
              ctx.fillRect(x, 0, barWidth, 10);

              ctx.fillStyle = `rgba(${frequency}, 255, 100)`;
              ctx.fillRect(x, y, barWidth, barHeight);

              x += barWidth + barGap;
            }

            requestAnimationFrame(draw);
          };

          draw();
        }
      }
    };

    drawVisualizer();
  }, []);

  return (
    <div className="relative mb-[25px] flex w-full max-w-[180px] flex-col items-start rounded-md border-[10px] border-double border-[#dcd3e0] bg-[#B2B0B3] p-4 shadow-[inset_1px_1px_0px_#000000] outline outline-2 outline-white sm:max-w-[234px] md:max-w-[304px] lg:max-w-[400px]">
      <div className="flex w-full justify-start p-[0px_0px_10px_4px] lg:pl-4">
        <div className="w-fit border-[1px] border-black border-b-white border-r-white p-[2px] font-mono text-[10px]">
          <BText4 className="cursor-default text-[#f4f4f4]">
            Preview - Pussy Galore
          </BText4>
        </div>
      </div>

      <div className="flex w-full flex-row space-x-1 lg:space-x-4">
        <audio
          ref={audioRef}
          src={Pussy_Galore}
          onTimeUpdate={updateProgress}
        />

        <button
          onClick={togglePlayPause}
          className={`${isPlaying ? "bg-pauseBtn" : "bg-playBtn"} h-[20px] w-[20px]  bg-contain bg-center bg-no-repeat `}
        />

        <div className="relative flex h-[20px] flex-1 items-center justify-end">
          <canvas
            ref={canvasRef}
            className="absolute left-0 top-0 h-5 w-full border-[1px] border-black shadow-[inset_2.5px_2.5px_0px_#000000] blur-[.1px] "
          ></canvas>
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={seekAudio}
            className="absolute bottom-0 left-0 h-full w-full flex-1 cursor-pointer appearance-none overflow-hidden  bg-[#ffffff] opacity-10 [&::-moz-range-thumb]:h-[20px] [&::-moz-range-thumb]:w-0 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:shadow-[-300px_0_0_300px_#000000]  [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:w-0 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:shadow-[-300px_0_0_300px_#000000]"
          />
        </div>
        <div className="">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={gain}
            onChange={(e) => setGain(parseFloat(e.target.value))}
            className="h-3 w-[40px] cursor-pointer appearance-none rounded-lg shadow-[inset_.5px_.5px_.2px_#3f3f3f]  outline outline-[1px] outline-[#000000] sm:w-[50px] md:w-[65px] lg:w-[85px] [&::-webkit-slider-thumb]:h-[10px] [&::-webkit-slider-thumb]:w-[10px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#f60a0a] [&::-webkit-slider-thumb]:shadow-[inset_0px_-1.1px_1px_#ffffff] [&::-webkit-slider-thumb]:outline [&::-webkit-slider-thumb]:outline-[.5px] [&::-webkit-slider-thumb]:outline-black "
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
