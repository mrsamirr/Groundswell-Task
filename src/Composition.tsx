import { AbsoluteFill } from "remotion";
import { Background } from "./Background";
import React from "react";
import { CategoryTags } from "./components/CategoryTags";
import { MainTextSchema } from "./TypeSafety";
import { WordPullUp } from "./components/MainText";
import {TheBrandClouds} from "./components/BrandFame";


export const MyComposition: React.FC<MainTextSchema> = ({
  textPropOne: propOne,
}) => {

  return (
    <AbsoluteFill>
      {/* <Background /> */}
      {/* <CategoryTags />
      <WordPullUp words={propOne} className="" /> */}
     <TheBrandClouds />
    </AbsoluteFill>
  );
};
