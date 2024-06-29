import {Composition} from 'remotion';
import {RiseComposition, myCompSchema} from './demo/RiseComposition';
import './style.css';
import {FlatSideComposition} from './demo/FlatSideComposition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Rise"
				component={RiseComposition}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Welcome to Remotion with Tailwind CSS',
					titleColor: '#000000',
					logoColor: '#00bfff',
				}}
			/>
			<Composition
				id="FlatSide"
				component={FlatSideComposition}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Welcome to Remotion with Tailwind CSS',
					titleColor: '#000000',
					logoColor: '#00bfff',
				}}
			/>
		</>
	);
};
