import { Canvas } from '@react-three/fiber';

export function DotAnimation() {
	return (
		<Canvas>
			<Dots />
		</Canvas>
	);
}

function Dots() {
	return (
		<mesh>
			<circleBufferGeometry />
			<meshBasicMaterial />
		</mesh>
	);
}
