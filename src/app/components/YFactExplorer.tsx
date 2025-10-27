'use client';

import { useMemo, useState } from 'react';

const FACTS = [
  'Y pulls double duty in English, acting as both a consonant and a vowel depending on where it appears in a word.',
  'Mathematicians rely on y as the standard symbol for vertical position on the Cartesian plane.',
  'In genetics, the Y chromosome is one of the two sex chromosomes and carries genes that trigger male development.',
  'In linguistics, y sounds range from the consonant “yuh” in yes to the vowel sound in gym.',
  'Signal processing engineers denote the output of a system with y[n], representing each discrete moment in time.',
  'The question “why?” shares a sound with the letter Y, making it a symbol for curiosity and critical thinking.',
  'In color science, Y is the luminance axis in the CIE color space, capturing perceived brightness.',
  'The Greek letter upsilon eventually evolved into the Roman letter Y, carrying millennia of history with it.'
];

const historyLimit = 4;

export function YFactExplorer() {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * FACTS.length));
  const [history, setHistory] = useState<number[]>([]);

  const currentFact = FACTS[currentIndex];

  const nextLabel = useMemo(() => {
    const nextCount = history.length + 1;
    return nextCount === 1 ? 'fact discovered' : 'facts discovered';
  }, [history.length]);

  const handleDiscover = () => {
    let nextIndex = currentIndex;

    if (FACTS.length > 1) {
      while (nextIndex === currentIndex) {
        nextIndex = Math.floor(Math.random() * FACTS.length);
      }
    }

    setHistory((prev) => [currentIndex, ...prev].slice(0, historyLimit));
    setCurrentIndex(nextIndex);
  };

  return (
    <section>
      <div className="cta">
        <button type="button" className="cta-button" onClick={handleDiscover}>
          Discover another Y
        </button>
        <span className="cta-caption">
          {history.length + 1} {nextLabel} in this session
        </span>
      </div>
      <div className="fact-panel" aria-live="polite">
        {currentFact}
      </div>
      {history.length > 0 && (
        <div className="facts-grid" aria-label="Recently explored facts">
          {history.map((factIndex) => (
            <article key={`${factIndex}-${FACTS[factIndex].length}`} className="fact-card">
              <h3>Previously</h3>
              <p>{FACTS[factIndex]}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
