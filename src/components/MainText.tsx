import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from 'remotion';

interface WordPullUpProps {
  words: string;
  delayPerWord?: number;
  className?: string;
}

const Word: React.FC<{ word: string; index: number; delayPerWord: number }> = ({
  word,
  index,
  delayPerWord,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delay = index * delayPerWord;
  const animationProgress = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 200,
      stiffness: 200,
    },
  });

  const y = interpolate(animationProgress, [0, 1], [20, 0]);
  const opacity = interpolate(animationProgress, [0, 1], [0, 1]);

  return (
    <span
      style={{
        display: 'inline-block',
        paddingRight: '8px',
        transform: `translateY(${y}px)`,
        opacity,
      }}
    >
      {word === '' ? '\u00A0' : word}
    </span>
  );
};

export const WordPullUp: React.FC<WordPullUpProps> = ({
  words,
  delayPerWord = 3,
  className,
}) => {
  const wordArray = words.split(' ');

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1
        className={`text-white font-display text-center text-6xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm ${className}`}
      >
        {wordArray.map((word, i) => (
          <Word key={i} word={word} index={i} delayPerWord={delayPerWord} />
        ))}
      </h1>
    </AbsoluteFill>
  );
};