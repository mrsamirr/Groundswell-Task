import { useCurrentFrame, useVideoConfig, spring } from 'remotion';
import { random } from 'remotion';
import { categories } from './TheProps';


const PADDING = 20;
const TAG_WIDTH = 150;
const TAG_HEIGHT = 40;


const CategoryBox = ({ text, index, position }: { text: string; index: number; position: { x: number; y: number } }) => {


  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = spring({
    frame: frame - index * 5,
    from: 0,
    to: 1,
    fps,
    config: { damping: 100 },
  });

  const scale = spring({
    frame: frame - index * 5,
    from: 0,
    to: 1,
    fps,
    config: { mass: 0.5 ,damping: 10 },
  });

  return (
    <div
     className='px-1 py-1 border border-solid rounded-2xl border-green-700 text-emerald-500 text-2xl font-extrabold absolute bg-[#084338]'
      style={{
        opacity,
        transform: `scale(${scale})`,
        left: position.x,
        top: position.y,
        width: TAG_WIDTH,
        height: TAG_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {text}
    </div>
  );
};

export const CategoryTags: React.FC = () => {
  const { width, height } = useVideoConfig();


  const getRandomPosition = (index: number, totalTags: number) => {
    const gridSize = Math.ceil(Math.sqrt(totalTags));
    const cellWidth = (width - PADDING * 2) / gridSize;
    const cellHeight = (height - PADDING * 2) / gridSize;

    const col = index % gridSize;
    const row = Math.floor(index / gridSize);

    const x = PADDING + col * cellWidth + random(`x-${index}`) * (cellWidth - TAG_WIDTH);
    const y = PADDING + row * cellHeight + random(`y-${index}`) * (cellHeight - TAG_HEIGHT);

    return { x, y };

  };
  

  return (
    <div 
    className='relative bg-emerald-950' style={{ width, height }}>
      {categories.map((category, index) => (
        <CategoryBox
          key={category}
          text={category}
          index={index}
          position={getRandomPosition(index, categories.length)} />
      ))}
    </div>
  );
};