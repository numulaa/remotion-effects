import {
	Easing,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
} from 'remotion';

export const Rise: React.FC<{
	color: string;
	fontSize: number;
	children: React.ReactNode;
	animate: 'entrance' | 'exit';
}> = ({color, fontSize, children, animate}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps, height} = useVideoConfig();
	// entrance
	const inSpring = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		from: 0,
		to: 1,
	});
	const inOpacity = interpolate(inSpring, [0, 1], [0, 1], {
		extrapolateRight: 'clamp',
	});
	const inTranslateY = interpolate(inSpring, [0, 1], [height / 2, 0], {
		extrapolateRight: 'clamp',
	});

	// exit
	const outSpring = spring({
		fps,
		frame: frame % durationInFrames,
		config: {
			damping: 200,
		},
		from: 1,
		to: 0,
	});
	const outOpacity = interpolate(inSpring, [0, 1], [1, 0], {
		extrapolateRight: 'clamp',
	});
	const outTranslateY = interpolate(inSpring, [0, 1], [0, height / 2], {
		extrapolateRight: 'clamp',
	});

	// checking
	const opacity = animate === 'entrance' ? inOpacity : outOpacity;
	const translateY = animate === 'entrance' ? inTranslateY : outTranslateY;
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				fontSize: `${fontSize}rem`,
				color: color,
				opacity: opacity,
				transform: `translateY(${translateY}px)`,
			}}
		>
			{children}
		</div>
	);
};
