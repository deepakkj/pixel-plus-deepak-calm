'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './BreathingWidget.module.scss';
import { CirclePlay, CircleStop } from 'lucide-react';
import Image from 'next/image';

// Breathing phases: inhale, hold, exhale
const phases = [
  { scale: 1, opacity: 0.5, duration: 4, label: 'Breathe In', color: '#4CAF50' },
  { scale: 1.3, opacity: 0.7, duration: 8, label: 'Hold', color: '#FF9800' },
  { scale: 1, opacity: 0.5, duration: 6, label: 'Breathe Out', color: '#2b7fff' },
];

export default function BreathingWidget() {
  const [isRunning, setIsRunning] = useState(false);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const timerRef = useRef(null);

  // cycle through phases
  const startCycle = (idx = 0) => {
    setPhaseIdx(idx);
    const next = (idx + 1) % phases.length;
    timerRef.current = setTimeout(() => startCycle(next), phases[idx].duration * 1000);
  };

  // toggle the breathing animation
  const handleToggle = () => {
    if (isRunning) {
      clearTimeout(timerRef.current);
      setIsRunning(false);
      setPhaseIdx(0);
    } else {
      setIsRunning(true);
      startCycle();
    }
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const { scale, opacity, duration, label, color } = phases[phaseIdx];

  return (
    <section className={styles.breathingWidget_container}>
      <h2 className={`${styles.breathingWidget_title} text-lg md:text-4xl font-semibold`}>
        Take a Deep Breath Now
      </h2>
      <p className={`${styles.breathingWidget_description}`}>
        Experience the power of guided breathing to calm your mind, reduce stress, and restore focus anytime, anywhere.
      </p>
      <div className="text-center items-center justify-center flex flex-col">
        {/* Card container */}
        <div className={styles.breathingWaves}>
        <Image
                    alt="Breathing Waves"
                    loading="lazy"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center center"
                    src={isRunning ? "transparent-sound-wave-visualization.svg": "transparent-sound-wave-static.svg"}
                  />
          <span className={styles.breathingLabel} style={{ scale, color: isRunning ? color : 'rgb(112 224 255)' }}>
            {isRunning ? label : 'Lets Go!'}
          </span>
        </div>

        {/* Start/Stop button */}
        <button
          onClick={handleToggle}
          className={
            `px-8 py-3 rounded-full text-white font-semibold transition-all flex justify-content-center align-items-center place-items-center ` +
            (isRunning
              ? styles.stopButton
              : styles.startButton)
          }
        >
          {isRunning ? <CircleStop className="w-5 h-5 mr-2" /> : <CirclePlay className="w-5 h-5 mr-2" />}
           <span>{isRunning ? 'Stop' : 'Start'}</span>
        </button>

      </div>
    </section>

  );
}