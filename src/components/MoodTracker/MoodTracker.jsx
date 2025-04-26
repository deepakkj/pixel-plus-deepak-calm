// src/components/MoodTracker/MoodTracker.jsx
'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogBackdrop, DialogTitle } from '@headlessui/react';
import { Smile } from 'lucide-react';
import MoodCarousel from '../MoodCarousel/MoodCarousel';

const moodOptions = ['😌', '😰', '😴', '🤔', '😊'];
const maxEntries = 5;

export default function MoodTracker() {
  const [isOpen, setIsOpen] = useState(false);
  const [entries, setEntries] = useState([]);
  const [selectedMood, setSelectedMood] = useState('');
  const [text, setText] = useState('');

  // Load saved entries from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('moodEntries') || '[]');
    setEntries(saved.slice(-maxEntries));
  }, []);

  // Save a new entry and update state/localStorage
  const handleSave = () => {
    if (!selectedMood || !text.trim()) return;
    const newEntry = { mood: selectedMood, text: text.trim(), time: Date.now() };
    const all = [...(JSON.parse(localStorage.getItem('moodEntries') || '[]')), newEntry];
    localStorage.setItem('moodEntries', JSON.stringify(all));
    const last = all.slice(-maxEntries);
    setEntries(last);
    setText('');
    setSelectedMood('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Enhanced Mood Tracker Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300 transition transform flex items-center z-1"
        aria-label="Track Mood"
      >
        <Smile className="w-6 h-6 animate-bounce" />
        <span className="mx-2 hidden sm:inline font-semibold">How do you feel?</span>
      </button>

      {/* Modal dialog */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="relative bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
          <DialogTitle className="text-xl text-center font-bold mb-4">
            How do you feel today?
          </DialogTitle>

          {/* Mood options */}
          <div className="grid grid-cols-5 gap-2 mb-4">
            {moodOptions.map(m => (
              <button
                key={m}
                onClick={() => setSelectedMood(m)}
                className={`text-2xl p-2 rounded ${selectedMood === m ? 'bg-blue-100' : ''}`}
              >{m}</button>
            ))}
          </div>

          {/* Journal input */}
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            maxLength={140}
            placeholder="Write a quick note..."
            className="w-full border rounded p-2 mb-4"
          />

          {/* Actions */}
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >Cancel</button>
            <button
              onClick={handleSave}
              disabled={!selectedMood || !text.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >Save</button>
          </div>

          {/* Entry carousel */}
          {entries.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                Your previous {entries.length} entries
              </h3>
              <MoodCarousel entries={entries} />
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
}
