import { useCurrentFrame, useVideoConfig, spring } from 'remotion';
import { random } from 'remotion';
import { CategoryBoxSchema, categoryBoxSchema } from './TypeSafety';
import { categories } from './TheProps';



const CategoryBox = ({ text, delay }: CategoryBoxSchema) => {

  categoryBoxSchema.parse({ text, delay });

  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = spring({
    frame: frame - delay,
    fps,
    config: { damping: 100 },
  });

  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 100 },
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        padding: '5px 20px',
        borderRadius: '15px',
        border: '1px solid #37dfbb',
        backgroundColor: '#084338',
        color: '#00ff9d',
        fontSize: '20px',
        fontWeight: 'bold',
        position: 'absolute',
        top: `${random('y' + text) * 80}%`,
        left: `${random('x' + text) * 80}%`,
      }}
    >
      {text}
    </div>
  );
};

export const CategoryTags: React.FC = () => {
  const { width, height } = useVideoConfig();

  

  return (
    <div style={{ flex: 1, backgroundColor: '#001a0e', width, height }}>
      {categories.map((category, index) => (
        <CategoryBox
          key={category}
          text={category}
          delay={index * 5} />
      ))}
    </div>
  );
};