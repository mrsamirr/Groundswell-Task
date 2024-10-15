import { AbsoluteFill } from "remotion";
import { Background } from "./Background";
import { TextMain } from "./TextMain";
import React from "react";
import { CategoryTags } from "./CategoryTags";
import { MainTextSchema } from "./TypeSafety";


export const MyComposition:React.FC<MainTextSchema> = ({
  textPropOne : propOne,
  textPropTwo : propTwo,
  textPropThree : propThree,
  textPropFour : propFour,
}) => {

  return (
  <AbsoluteFill>
    <Background />
    <CategoryTags />
    <TextMain
     textPropOne={propOne} 
     textPropTwo={propTwo}
     textPropThree={propThree}
     textPropFour={propFour}
      />
  </AbsoluteFill>
  );
};
