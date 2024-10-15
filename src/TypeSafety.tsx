import { z } from 'zod';


export const mainTextSchema = z.object({
	textPropOne: z.string(),
	textPropTwo: z.string(),
	textPropThree: z.string(),
	textPropFour: z.string(),
});

export const categoryBoxSchema = z.object({
    text: z.string(),
    delay: z.number(),
  });


export type MainTextSchema = z.infer<typeof mainTextSchema>;
export type CategoryBoxSchema = z.infer<typeof categoryBoxSchema>;
  