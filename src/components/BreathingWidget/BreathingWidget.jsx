// src/components/BreathingWidget/BreathingWidget.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './BreathingWidget.module.scss';
import { CirclePlay, CircleStop } from 'lucide-react';

// Breathing phases: inhale, hold, exhale
const phases = [
  { scale: 1, opacity: 0.5, duration: 4, label: 'Breathe In' },
  { scale: 1.3, opacity: 0.7, duration: 2, label: 'Hold' },
  { scale: 1, opacity: 0.5, duration: 6, label: 'Breathe Out' },
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

  const { scale, opacity, duration, label } = phases[phaseIdx];

  return (
    <section className={styles.breathingWidget_container}>
      <h2 className={`${styles.breathingWidget_title} text-lg md:text-4xl font-semibold`}>
        Take a Deep Breath Now
      </h2>
      <p className={`${styles.breathingWidget_description}`}>
        Experience the power of guided breathing to calm your mind, reduce stress, and restore focus anytime, anywhere.
      </p>
      <br />
      <div className="max-w-md mx-auto flex flex-col items-center space-y-6">
        {/* Card container */}
        {/* Animated breathing circle with wavy gradient */}
        <motion.div
          className={styles.breathingCircle}
          style={{ width: '14rem', height: '14rem' }}
          animate={{ scale, opacity }}
          transition={{ duration, ease: 'easeInOut' }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
            {label}
          </span>
        </motion.div>

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