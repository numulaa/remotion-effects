import {AbsoluteFill} from 'remotion';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import {Rise} from '../components/Rise';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export const RiseComposition: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
}) => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<Rise fontSize={2} color="red" animate="exit">
				<h1>Rise Effect</h1>
			</Rise>
		</AbsoluteFill>
	);
};
