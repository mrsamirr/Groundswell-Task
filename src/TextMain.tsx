import React from 'react';
import {
    AbsoluteFill,
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig
} from 'remotion';
import { MainTextSchema } from './TypeSafety';

export const TextMain: React.FC<MainTextSchema> = ({ 
    textPropOne,
    textPropTwo,
    textPropThree,
    textPropFour }) => {

    const frame = useCurrentFrame();
    const { height, fps } = useVideoConfig();

    const entrance = spring({
        fps,
        frame,
        config: {
            damping: 200,
        },
        durationInFrames: 30,
    });

    const entranceOffset = interpolate(entrance, [0, 1], [height, 0 / 2]);

    const wave1 = Math.cos(frame / 15) * 10 + entranceOffset;
    const wave2 = Math.cos((frame - 5) / 15) * 10 + entranceOffset;

    return (
        <AbsoluteFill
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div>
                <p
                    className='relative text-7xl text-white font-bold text-wrap'
                    style={{
                        transform: `translateY(${wave1}px)`,
                    }}
                > {textPropOne}<span style={{ color: '#00ff9d' }}>{textPropTwo}</span>{textPropThree}</p>
                
                <p
                    className='relative text-7xl text-white font-bold'
                    style={{
                        transform: `translateY(${wave2}px)`,
                    }}
                > {textPropFour}</p>
            </div>
        </AbsoluteFill>
    );
};