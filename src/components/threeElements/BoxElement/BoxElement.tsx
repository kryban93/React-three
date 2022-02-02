import { useRef } from 'react';
import * as three from 'three';

export default function BoxElement({
	xPosition = 0,
	zPosition = 0,
	color = '#cac',
	yRotation = 0,
	size = 1,
}: BoxElementProps) {
	const boxRef = useRef<three.Mesh>();
	return (
		<mesh
			position={[xPosition, 0, zPosition]}
			rotation={yRotation ? [0, yRotation, 0] : [0, 0, 0]}
			castShadow
			key={`${xPosition}`}
			ref={boxRef}
		>
			<boxGeometry args={[size, size, size]} attach="geometry" />
			<meshPhongMaterial color={color} attach="material" />
		</mesh>
	);
}

export type BoxElementProps = {
	xPosition: number;
	zPosition: number;
	color: string;
	yRotation?: number;
	size?: number;
};
