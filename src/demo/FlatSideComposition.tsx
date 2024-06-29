import {AbsoluteFill} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import {FlatSide} from '../components/FlatSide';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export const FlatSideComposition: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
}) => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<div className="m-10" />

			<FlatSide animate="exit" direction="left">
				<h1>Flat Side Effect</h1>
			</FlatSide>
			<div className="m-3" />
		</AbsoluteFill>
	);
};
