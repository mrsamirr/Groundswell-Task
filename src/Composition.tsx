import { AbsoluteFill } from "remotion";
import { Background } from "./Background";
import React from "react";
import { CategoryTags } from "./CategoryTags";
import { MainTextSchema } from "./TypeSafety";
import { WordPullUp } from "./MainText";


export const MyComposition: React.FC<MainTextSchema> = ({
  textPropOne: propOne,
}) => {

  return (
    <AbsoluteFill>
      <Background />
      <CategoryTags />
      <WordPullUp words={propOne} className="" />
    </AbsoluteFill>
  );
};
