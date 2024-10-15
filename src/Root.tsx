import './tailwind.css';
import { Composition } from "remotion";
import { MyComposition } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
      id="TheBackground"
      component={MyComposition}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        textPropOne: 'and donate when and where',
        textPropTwo: 'it matters most to you'
      }}
      />
    </>
  );
};
