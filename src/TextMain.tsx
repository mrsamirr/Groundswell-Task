import React from 'react';
import {
    AbsoluteFill,
} from 'remotion';
import { MainTextSchema } from './TypeSafety';
import { AnimatedText } from "remotion-animate-text";




export const TextMain: React.FC<MainTextSchema> = ({
    textPropOne = [],
}) => {
    // const frame = useCurrentFrame();
    // const { height, fps } = useVideoConfig();

    const animation = {
        delimiter: "",
        opacity: [0, 1],
        x: [1, 0],
        y: [1, 0],
        scale: [0, 1],
        rotate: [0, 0],
        hideLoading: false,
        refRange: [0, 100], // can be any length and all other properties should also be of same length
        durations: [40, 50] // using this you can control for how long each part should animate in frames
    };

    // const entrance = spring({
    //     fps,
    //     frame,
    //     config: {
    //         damping: 200,
    //     },
    //     durationInFrames: 30,
    // });

    // const entranceOffset = interpolate(entrance, [0, 1], [height, 0 / 2]);

    // const wave1 = Math.cos(frame / 15) * 10 + entranceOffset;
    // const wave2 = Math.cos((frame - 5) / 15) * 10 + entranceOffset;

    return (
        <AbsoluteFill
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
            <div className=' text-7xl text-white font-bold text-wrap'>
                <AnimatedText duration={30} animation={animation}>
                 {textPropOne}
                </AnimatedText>
            </div>
            
        </AbsoluteFill>
    );
};