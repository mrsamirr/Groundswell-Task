import { AbsoluteFill } from "remotion";
import { Background } from "./Background";
import { TextMain } from "./TextMain";
import { z } from 'zod';
import React from "react";

export const myCompSchema = z.object({
	textPropOne: z.string(),
	textPropTwo: z.string(),
});

export const MyComposition:React.FC<z.infer<typeof myCompSchema>> = ({
  textPropOne : propOne,
  textPropTwo : propTwo,
}) => {

  return (
  <AbsoluteFill>
    <Background />
    <TextMain
     textPropOne={propOne} 
     textPropTwo={propTwo} />
  </AbsoluteFill>
  );
};
