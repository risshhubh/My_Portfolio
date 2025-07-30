import React, { useRef, useState } from "react";

const sampleTrack = {
  title: "Sample Track",
  artist: "Unknown Artist",
  src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
};

const MusicPage = ({ darkMode }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className={`h-full w-full p-4 pb-24 overflow-y-auto bg-gradient-to-b ${darkMode ? "from-gray-900 to-gray-800" : "from-[#f8fbff] to-[#e6ecf3]"}`}>
      <h2 className="text-xl font-bold mb-5 text-gray-800 dark:text-white flex items-center gap-2">
        <span role="img" aria-label="Music">🎵</span> Music
      </h2>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="w-32 h-32 rounded-full bg-blue-200 dark:bg-blue-900 flex items-center justify-center mb-6">
          <span className="text-5xl">🎧</span>
        </div>
        <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{sampleTrack.title}</div>
        <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">{sampleTrack.artist}</div>
        <audio ref={audioRef} src={sampleTrack.src} onEnded={() => setPlaying(false)} />
        <button
          onClick={togglePlay}
          className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition text-base"
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
      <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">Sample music player. Add your own tracks!</div>
    </div>
  );
};

export default MusicPage; 