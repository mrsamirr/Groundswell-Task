import { random, AbsoluteFill, interpolate, useCurrentFrame, Img } from 'remotion';
import { logos } from './Logo';

interface Logo {
  name: string;
  url: string;
}

const theCompanyPositions = (count: number) => {
  const positions = [];
  const rows = Math.ceil(Math.sqrt(count));
  const cols = Math.ceil(count / rows);
  const rowGap = 90 / (rows + 1);
  const colGap = 90 / (cols + 1);

  // Deterministic positions in a scattered grid-like pattern
  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;

    // Use deterministic random with logo name as a seed
    const randomOffsetX = random(`x-seed-${i}`) * 5 - 2.5;
    const randomOffsetY = random(`y-seed-${i}`) * 5 - 2.5;

    positions.push({
      top: `${(row + 1) * rowGap + randomOffsetY}%`,
      left: `${(col + 1) * colGap + randomOffsetX}%`,
    });
  }

  return positions;
};

const positions = theCompanyPositions(logos.length);

const LogoItem = ({ logo, index }: { logo: Logo; index: number }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame - index * 5,
    [0, 30],
    [0, 1],
    { extrapolateRight: 'clamp' }
  );

  const position = positions[index % positions.length];

  return (
    <div style={{
      position: 'absolute',
      top: position.top,
      left: position.left,
      opacity,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      width: '180px',
    }}>
      <div style={{
        overflow: 'hidden',
      }}>
        <Img className='h-30 w-70' src={logo.url} alt={logo.name} />
      </div>
    </div>
  );
};

export const TheBrandClouds = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#af9bfb', padding: '20px', position: 'relative' }}>
      {logos.map((logo, index) => (
        <LogoItem key={logo.name} logo={logo} index={index} />
      ))}
    </AbsoluteFill>
  );
}
