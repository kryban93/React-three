import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as three from 'three';

export default function IcosahedronElement({
	wireframe = false,
	size = 1,
	color = '#fff',
	direction = 'left',
}: IcosahedronElementTypes) {
	const IcosahedronRef = useRef<three.Mesh>();

	useFrame(() => {
		if (direction === 'left') {
			IcosahedronRef.current!.rotation.x += 0.01;
			IcosahedronRef.current!.rotation.y += 0.01;
		} else {
			IcosahedronRef.current!.rotation.x -= 0.01;
			IcosahedronRef.current!.rotation.y -= 0.01;
		}
	});
	return (
		<mesh castShadow receiveShadow ref={IcosahedronRef}>
			<icosahedronBufferGeometry attach="geometry" args={[size, 1]} />
			<meshPhongMaterial
				attach="material"
				color={color}
				flatShading={!wireframe}
				wireframe={wireframe}
			/>
		</mesh>
	);
}

type IcosahedronElementTypes = {
	wireframe?: boolean;
	size: number;
	color?: string;
	direction: 'left' | 'right';
};
