// app/page-new.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const sections = [
  {
    heading: 'Reimagine Connections.',
    subheading: 'First AI Professional Social Network',
    cta: 'Join Today'
  },
  {
    heading: 'Why Networkqy?',
    bullets: [
      {
        emoji: '🔍',
        title: 'Find Hidden Matches',
        text: 'AI surfaces connections based on your intent, values, and timing — not just keywords.'
      },
      {
        emoji: '🤝',
        title: 'Warm Intros, Always',
        text: 'Receive high-context intros that feel organic, not cold calls.'
      },
      {
        emoji: '📈',
        title: 'Smarter Follow-Ups',
        text: 'Get notified when it’s the right time to reconnect or make a move.'
      }
    ]
  },
  {
    heading: 'Built for Builders.',
    tagline: 'Whether you’re fundraising, hiring, or launching something new — Networkqy is your sidekick for serendipity.',
    cta: 'Join the Beta'
  }
];

const rotatingTexts = [
  'Find your cofounder',
  'Pitch your startup',
  'Connect with investors',
  'Join powerful communities',
  'Get discovered by talent'
];

const partnerLogos = [
  { name: 'PerplexityAI', src: '/partners/perplexity.png' },
  { name: 'Google', src: '/partners/gcp.png' },
  { name: 'in5 DUbai', src: '/partners/in5.png' },
  { name: 'NVIDIA', src: '/partners/nvidea.png' },
  { name: 'Dubai Holding', src: '/partners/dh.jpg' }
];

export default function PageNew() {
  const [displayedText, setDisplayedText] = useState('');
  const [fullText, setFullText] = useState(rotatingTexts[0]);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 80;
    const delayBetweenPhrases = 1200;

    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        const nextIndex = (textIndex + 1) % rotatingTexts.length;
        setFullText(rotatingTexts[nextIndex]);
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex(nextIndex);
      }, delayBetweenPhrases);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText, textIndex]);

  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 bg-gradient-to-b from-white to-purple-50">
        <h1 className="text-6xl font-bold tracking-tight mb-4">Networkqy</h1>
        <p className="text-2xl text-purple-600 font-medium h-8 transition-all duration-500 whitespace-nowrap">
          {displayedText}
        </p>
        <p className="text-lg text-gray-600 mt-6 max-w-xl">
          {sections[0].subheading}
        </p>
        <Link href="/join">
  <button className="mt-8 px-6 py-3 text-white bg-purple-600 rounded-full text-lg hover:bg-purple-700 transition">
    {sections[0].cta}
  </button>
</Link>


        {/* Partner Logos */}
        <div className="mt-16 opacity-80 text-xs text-gray-500">
          <p className="mb-4 font-semibold uppercase tracking-wide">Backed by</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {partnerLogos.map((logo, i) => (
              <div key={i} className="relative w-44 h-20 grayscale hover:grayscale-0 transition mt-6">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">{sections[1].heading}</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {sections[1].bullets.map((item, i) => (
            <div key={i} className="bg-purple-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Builder Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-purple-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-6">{sections[2].heading}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">{sections[2].tagline}</p>
        <Link href="/join">
  <button className="px-8 py-4 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700 transition">
    {sections[2].cta}
  </button>
</Link>

      </section>

      {/* Footer */}
      <footer className="bg-white py-10 text-center text-gray-400 text-sm border-t">
        <p>&copy; 2025 Networkqy. The First AI Professional Social Network.</p>
      </footer>
    </main>
  );
}
