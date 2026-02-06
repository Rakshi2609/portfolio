import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showControls, setShowControls] = useState(false);
  const [showEqualizer, setShowEqualizer] = useState(false);
  const [bass, setBass] = useState(0);
  const [treble, setTreble] = useState(0);
  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceRef = useRef(null);
  const gainNodeRef = useRef(null);
  const bassFilterRef = useRef(null);
  const trebleFilterRef = useRef(null);

  // Initialize Web Audio API
  useEffect(() => {
    const initAudioContext = () => {
      if (audioRef.current && !audioContextRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const context = new AudioContext();
        audioContextRef.current = context;

        const source = context.createMediaElementSource(audioRef.current);
        sourceRef.current = source;

        const gainNode = context.createGain();
        gainNode.gain.value = volume;
        gainNodeRef.current = gainNode;

        // Bass filter (low-shelf)
        const bassFilter = context.createBiquadFilter();
        bassFilter.type = 'lowshelf';
        bassFilter.frequency.value = 200;
        bassFilter.gain.value = bass;
        bassFilterRef.current = bassFilter;

        // Treble filter (high-shelf)
        const trebleFilter = context.createBiquadFilter();
        trebleFilter.type = 'highshelf';
        trebleFilter.frequency.value = 3000;
        trebleFilter.gain.value = treble;
        trebleFilterRef.current = trebleFilter;

        // Connect nodes
        source.connect(bassFilter);
        bassFilter.connect(trebleFilter);
        trebleFilter.connect(gainNode);
        gainNode.connect(context.destination);

        // Always start paused - user must click play
        setIsPlaying(false);
      }
    };

    // Initialize on component mount
    const timer = setTimeout(initAudioContext, 100);
    return () => clearTimeout(timer);
  }, []);



  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      // Update gain node volume
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.value = volume;
      }
      // If music should be playing, ensure it plays
      if (isPlaying && audioRef.current.paused) {
        audioRef.current.play().catch(err => {
          console.log('Audio play failed:', err);
        });
      }
    }
  }, [volume, isPlaying]);

  const playAudio = () => {
    if (audioRef.current && audioContextRef.current) {
      // Resume AudioContext if suspended
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume().then(() => {
          audioRef.current.play().catch(err => {
            console.log('Audio play failed:', err);
          });
        });
      } else {
        audioRef.current.play().catch(err => {
          console.log('Audio play failed:', err);
        });
      }
    }
  };



  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      // Resume AudioContext on user interaction
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume().then(() => {
          playAudio();
          setIsPlaying(true);
        });
      } else {
        playAudio();
        setIsPlaying(true);
      }
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleBassChange = (e) => {
    const value = parseFloat(e.target.value);
    setBass(value);
    if (bassFilterRef.current) {
      bassFilterRef.current.gain.value = value;
    }
  };

  const handleTrebleChange = (e) => {
    const value = parseFloat(e.target.value);
    setTreble(value);
    if (trebleFilterRef.current) {
      trebleFilterRef.current.gain.value = value;
    }
  };

  const toggleEqualizer = () => {
    setShowEqualizer(!showEqualizer);
  };

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        src="/music/background.mp3"
      />

      {/* Music Controls - Fixed Bottom Right */}
      <div className="fixed bottom-6 right-6 z-[-100] flex flex-col items-end gap-3">
        
        {/* Equalizer Panel */}
        <div
          className={`transition-all duration-300 ${
            showEqualizer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-black/90 backdrop-blur-md border border-[#4DB8FF]/30 rounded-2xl px-5 py-4 w-64">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-sm flex items-center gap-2">
                <i className="fas fa-sliders-h text-[#4DB8FF]"></i>
                Equalizer
              </h3>
              <button
                onClick={toggleEqualizer}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Bass Control */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-gray-400 flex items-center gap-2">
                  <i className="fas fa-drum"></i>
                  Bass
                </label>
                <span className="text-xs text-[#4DB8FF] font-mono">{bass > 0 ? '+' : ''}{bass}dB</span>
              </div>
              <input
                type="range"
                min="-12"
                max="12"
                step="1"
                value={bass}
                onChange={handleBassChange}
                className="w-full h-1 bg-gray-700 rounded-full appearance-none cursor-pointer accent-[#4DB8FF]"
              />
            </div>

            {/* Treble Control */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-gray-400 flex items-center gap-2">
                  <i className="fas fa-guitar"></i>
                  Treble
                </label>
                <span className="text-xs text-[#4DB8FF] font-mono">{treble > 0 ? '+' : ''}{treble}dB</span>
              </div>
              <input
                type="range"
                min="-12"
                max="12"
                step="1"
                value={treble}
                onChange={handleTrebleChange}
                className="w-full h-1 bg-gray-700 rounded-full appearance-none cursor-pointer accent-[#4DB8FF]"
              />
            </div>

            {/* Volume Control */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs text-gray-400 flex items-center gap-2">
                  <i className="fas fa-volume-up"></i>
                  Volume
                </label>
                <span className="text-xs text-[#4DB8FF] font-mono">{Math.round(volume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-1 bg-gray-700 rounded-full appearance-none cursor-pointer accent-[#4DB8FF]"
              />
            </div>

            {/* Preset Buttons */}
            <div className="mt-4 pt-4 border-t border-gray-700/50 flex gap-2">
              <button
                onClick={() => {
                  setBass(0);
                  setTreble(0);
                  if (bassFilterRef.current) bassFilterRef.current.gain.value = 0;
                  if (trebleFilterRef.current) trebleFilterRef.current.gain.value = 0;
                }}
                className="flex-1 px-2 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded transition-all"
              >
                Flat
              </button>
              <button
                onClick={() => {
                  setBass(6);
                  setTreble(-3);
                  if (bassFilterRef.current) bassFilterRef.current.gain.value = 6;
                  if (trebleFilterRef.current) trebleFilterRef.current.gain.value = -3;
                }}
                className="flex-1 px-2 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded transition-all"
              >
                Bass Boost
              </button>
              <button
                onClick={() => {
                  setBass(-3);
                  setTreble(6);
                  if (bassFilterRef.current) bassFilterRef.current.gain.value = -3;
                  if (trebleFilterRef.current) trebleFilterRef.current.gain.value = 6;
                }}
                className="flex-1 px-2 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded transition-all"
              >
                Crisp
              </button>
            </div>
          </div>
        </div>

        {/* Control Buttons Row */}
        <div className="flex items-center gap-3">
          {/* Equalizer Toggle Button */}
          <button
            onClick={toggleEqualizer}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95 ${
              showEqualizer
                ? 'bg-gradient-to-br from-[#4DB8FF] to-[#AEE6FF] shadow-[#4DB8FF]/50'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
            title="Equalizer"
          >
            <i className={`fas fa-sliders-h ${showEqualizer ? 'text-black' : 'text-[#4DB8FF]'} text-sm`}></i>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-14 h-14 bg-gradient-to-br from-[#4DB8FF] to-[#AEE6FF] rounded-full flex items-center justify-center shadow-lg shadow-[#4DB8FF]/50 hover:scale-110 transition-all active:scale-95 group"
            title={isPlaying ? 'Pause Music' : 'Play Music'}
          >
            <i className={`fas fa-${isPlaying ? 'pause' : 'play'} text-black text-lg ${!isPlaying && 'ml-1'}`}></i>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Custom range slider styling */
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          background: #4DB8FF;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 8px #4DB8FF;
        }

        input[type="range"]::-moz-range-thumb {
          width: 14px;
          height: 14px;
          background: #4DB8FF;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 8px #4DB8FF;
        }
      `}</style>
    </>
  );
};

export default MusicPlayer;
