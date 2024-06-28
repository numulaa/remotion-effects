import {AbsoluteFill} from 'remotion';
import {Logo} from '../Logo';
import {Subtitle} from '../Subtitle';
import {Title} from '../Title';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import {Rise} from '../components/Rise';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export const MyComposition: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
}) => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<div className="m-10" />

			<Rise fontSize={2} color="red" animate="exit">
				<h1>Rise Effect</h1>
			</Rise>
			<div className="m-3" />
		</AbsoluteFill>
	);
};
