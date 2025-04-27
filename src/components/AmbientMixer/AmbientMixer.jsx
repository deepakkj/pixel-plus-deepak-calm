'use client';

import { useState, useRef, useEffect } from 'react';
import { CloudRain, Waves, Volume2 } from 'lucide-react';

import styles from './AmbientMixer.module.scss';

// Ambient tracks + background GIFs
const tracks = [
  { name: 'Rain', file: '/sounds/rain.mp3', icon: CloudRain },
  { name: 'Waves', file: '/sounds/waves.mp3', icon: Waves },
  { name: 'White Noise', file: '/sounds/white-noise.mp3', icon: Volume2 },
];
const backgroundMap = {
  'Rain': '/gifs/rain.gif',
  'Waves': '/gifs/oceanwaves.webp',
  'White Noise': '/gifs/whitenoise.webp',
};

export default function AmbientMixer() {
  const audioRefs = useRef({});
  const [playing, setPlaying] = useState({});

  // Pause all audio on unmount
  useEffect(() => () => {
    Object.values(audioRefs.current).forEach(a => a && a.pause());
  }, []);

  // Only one track plays at a time
  const toggleTrack = (name) => {
    const audio = audioRefs.current[name];
    if (!audio) return;
    setPlaying(prev => {
      const wasPlaying = !!prev[name];
      // pause others
      Object.entries(audioRefs.current).forEach(([key, a]) => {
        if (key !== name && a) a.pause();
      });
      // toggle this
      wasPlaying ? audio.pause() : audio.play();
      return tracks.reduce((acc, { name: t }) => ({ ...acc, [t]: t === name && !wasPlaying }), {});
    });
  };

  // Determine active track for background
  const activeTrack = Object.keys(playing).find(k => playing[k]);
  const bgUrl = activeTrack ? backgroundMap[activeTrack] : null;

  return (
    <section className={styles.ambientMixer_container} style={{ backgroundImage: bgUrl && `url(${bgUrl})` }}>
      <div className={`${styles.ambientMixer_description} ${bgUrl && styles.darkdescription}`}>
        <h2>
          Relax Your Mind
        </h2>
        <p>
          Whether you need to concentrate, meditate, or just unwind, our Ambient Mixer has you covered.
        </p>
        <p>
          Try it out and find your perfect soundscape!
        </p>
      </div>
      {/* Controls overlay */}
      <div className={styles.ambientMixer_buttons}>
        {tracks.map(({ name, file, icon: Icon }) => (
          <div key={name} className={styles.ambientMixer_button_wrapper}>
            <button
              onClick={() => toggleTrack(name)}
              className={
                `flex place-content-center items-center px-5 py-3 rounded-full font-semibold transition-all border-1 duration-200 cursor-pointer ` +
                (playing[name]
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300')
              }
            >
              <Icon className="w-5 h-5 mr-2" />
              <span>{playing[name] ? `Stop ${name}` : `Play ${name}`}</span>
            </button>
            <audio
              ref={el => { audioRefs.current[name] = el; }}
              src={file}
              loop
            />
          </div>
        ))}
      </div>
    </section>
  );
}
