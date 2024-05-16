"use client";
import { AudioHTMLAttributes, useEffect, useRef, useState } from "react";
import Pussy_Galore from "../../public/music/Pussy_Galore_mix_10.mp3";

export const Music2 = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const volumeInputRef = useRef<HTMLInputElement>(null);

  const audioCTX = new AudioContext();
  const gainNode = audioCTX.createGain();
  const analyserNode = audioCTX.createAnalyser();

  if (audioRef.current) {
    const track = audioCTX.createMediaElementSource(audioRef.current);

    track.connect(gainNode).connect(audioCTX.destination);
    // .connect(analyserNode);
  }

  const playPause = () => {
    if (buttonRef.current && audioRef.current) {
      if (audioCTX.state === "suspended") {
        audioCTX.resume();
      }

      // Play or pause track depending on state
      if (buttonRef.current.dataset.playing === "false") {
        audioRef.current.play();
        buttonRef.current.dataset.playing = "true";
      } else if (buttonRef.current.dataset.playing === "true") {
        audioRef.current.pause();
        buttonRef.current.dataset.playing = "false";
      }
    }
  };

  const ended = () => {
    if (buttonRef.current && audioRef.current)
      buttonRef.current.dataset.playing = "false";
  };

  const controlVolume = () => {
    if (volumeInputRef.current) {
      const volume = Number(volumeInputRef.current.value);
      console.log("Volume: " + volume);
      gainNode.gain.value = volume;
    }
  };

  return (
    <div className="h-full w-full bg-red-300">
      <h1>oihdoih</h1>
      <input
        ref={volumeInputRef}
        onChange={controlVolume}
        type="range"
        id="volume"
        min="0"
        max="2"
        step="0.01"
      />
      <audio ref={audioRef} src={Pussy_Galore} onEnded={ended}></audio>
      <button
        ref={buttonRef}
        data-playing="false"
        role="switch"
        aria-checked="false"
        onClick={playPause}
      >
        <span>Play/Pause</span>
      </button>
    </div>
  );
};

// export const MusicPlayer = () => {
//   //state
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);

//   // references
//   const audioRef = useRef<HTMLAudioElement>(null); // refence our audio component
//   const progressRef = useRef<HTMLInputElement>(null); // reference for progressbar
//   const animationRef = useRef<number>(0);
//   const divElement = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const seconds = Math.floor(
//       audioRef.current ? audioRef.current.duration : 0
//     );
//     setDuration(seconds);
//     if (progressRef.current) progressRef.current.max = seconds.toString();
//   }, [audioRef.current?.onloadeddata, audioRef.current?.readyState]);

//   const calculateTime = (secs: number) => {
//     const minutes = Math.floor(secs / 60);
//     const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
//     const seconds = Math.floor(secs % 60);
//     const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
//     return `${returnedMinutes} : ${returnedSeconds}`;
//   };

//   const togglePlay = () => {
//     const preValue = isPlaying;
//     setIsPlaying(!preValue);
//     if (!preValue) {
//       audioRef.current?.play();
//       animationRef.current = requestAnimationFrame(whilePlaying);
//     } else {
//       audioRef.current?.pause();
//       cancelAnimationFrame(animationRef.current);
//     }
//   };

//   const whilePlaying = () => {
//     if (audioRef.current && progressRef.current && divElement.current) {
//       progressRef.current.value = audioRef.current.currentTime.toString();
//       console.log(
//         "progressRef.current.value: ",
//         progressRef.current.value,
//         "audioRef.current.currentTime: ",
//         audioRef.current.currentTime,
//         "currentTime: ",
//         currentTime
//       );

//       // changePlayerCurrentTime(Number(progressRef.current.value));
//       setCurrentTime(Number(progressRef.current.value));

//       divElement.current.className = `absolute  left-0 top-0 z-10 h-3 w-[${Math.round((Number(progressRef.current.value) / duration) * 100)}%] cursor-pointer rounded-l-xl bg-red-800`;

//       animationRef.current = requestAnimationFrame(whilePlaying);
//     }
//   };

//   const changeRange = () => {
//     if (audioRef.current && progressRef.current) {
//       const progressCurrentValue = Number(progressRef.current.value);
//       audioRef.current.currentTime = progressCurrentValue;

//       changePlayerCurrentTime(progressCurrentValue);
//     }
//   };

//   const changePlayerCurrentTime = (range: number) => {
//     // if (audioRef.current && progressRef.current && divElement.current) {
//     // console.log("currentTime: ", currentTime, "range: ", range);

//     setCurrentTime(range);
//     // }
//   };

//   return (
//     <div className="flex w-[700px] flex-row align-middle">
//       <audio ref={audioRef} src={Pussy_Galore} preload="metadata"></audio>

//       <button onClick={togglePlay}>{isPlaying ? ">" : "="}</button>

//       {/* Current time */}
//       <div className="font-mono text-xs">{calculateTime(currentTime)}</div>

//       {/* Progress bar */}
//       <div className="relative flex h-10 w-20 flex-col">
//         {/* amount before the toggle */}
//         <div
//           ref={divElement}
//           // className={`absolute  left-0 top-0 z-10 h-3 w-[${Math.round((currentTime / duration) * 100)}] cursor-pointer rounded-l-xl bg-red-800`}
//         ></div>
//         <input
//           ref={progressRef}
//           type="range"
//           defaultValue={0}
//           onChange={changeRange}
//           className="absolute h-3 w-full appearance-none rounded-xl bg-orange-300 outline-none "
//         />
//       </div>

//       {/* Duration */}
//       <div className="font-mono text-xs">{calculateTime(duration)}</div>
//     </div>
//   );
// };
