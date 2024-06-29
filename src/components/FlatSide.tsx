import {interpolate, useCurrentFrame, useVideoConfig, spring} from 'remotion';

export const FlatSide: React.FC<{
	children: React.ReactNode;
	animate: 'entrance' | 'exit';
	direction: 'left' | 'right';
}> = ({children, animate, direction}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps, width} = useVideoConfig();
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
	const inTranslateX = interpolate(
		inSpring,
		[0, 1],
		direction === 'left' ? [-width / 2, 0] : [width / 2, 0],
		{
			extrapolateRight: 'clamp',
		},
	);

	// [width/2,0] from right
	// [0,width/2]
	//[-width/2, 0] from left to right

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
	// because from 1 to 0, so [width/2,0] means from 0 => width/2 position
	// [-width/2,0] means from 0 => -width/2
	const outOpacity = interpolate(inSpring, [0, 1], [1, 0], {
		extrapolateRight: 'clamp',
	});
	const outTranslateX = interpolate(
		outSpring,
		[0, 1],
		direction === 'left' ? [width / 2, 0] : [-width / 2, 0],
		{
			extrapolateRight: 'clamp',
		},
	);

	// checking
	const opacity = animate === 'entrance' ? inOpacity : outOpacity;
	const translateX = animate === 'entrance' ? inTranslateX : outTranslateX;
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%',
				opacity: opacity,
				transform: `translateX(${translateX}px)`,
			}}
		>
			{children}
		</div>
	);
};
