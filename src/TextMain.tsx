import React from 'react';
import {
    AbsoluteFill,
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig
} from 'remotion';

export const TextMain: React.FC<{
    textPropOne: string;
    textPropTwo: string;
}> = ({ textPropOne,textPropTwo }) => {
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
                    className='relative text-9xl text-white font-medium text-wrap'
                    style={{
                        transform: `translateY(${wave1}px)`,
                    }}
                > {textPropOne}</p>
                <p
                    className='relative text-9xl text-white font-medium'
                    style={{
                        transform: `translateY(${wave2}px)`,
                    }}
                > {textPropTwo}</p>
            </div>
        </AbsoluteFill>
    );
};