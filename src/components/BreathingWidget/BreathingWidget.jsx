// src/components/BreathingWidget/BreathingWidget.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <div>
      <h2 className="text-lg md:text-4xl font-semibold text-[#1a3e6f] text-center mb-6">
        Pause &amp; Breathe: Your Moment of Calm
      </h2>
      <br />
      <div className="max-w-md mx-auto flex flex-col items-center space-y-6">



        {/* Card container */}
        <div className="p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center space-y-8">
          {/* Animated breathing circle with wavy gradient */}
          <motion.div
            className="relative rounded-full animated-gradient"
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
              `px-8 py-3 rounded-full text-white font-semibold transition-all ` +
              (isRunning
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-blue-600 hover:bg-blue-700')
            }
          >
            {isRunning ? 'Stop' : 'Start'}
          </button>
        </div>

        {/* Gradient Animation Keyframes */}
        <style jsx global>{`
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animated-gradient {
    background: linear-gradient(-45deg, #ff6ec4, #7873f5, #43e97b, #38f9d7);
    background-size: 400% 400%;
    animation: gradientShift 20s ease infinite;
  }
`}</style>
      </div>
    </div>

  );
}