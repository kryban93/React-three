import { useRef } from 'react';
import * as three from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import styled from 'styled-components';

export function Example() {
	return (
		<StyledCanvas
			camera={{
				near: 1,
				far: 1000,
				zoom: 1,
				position: [2, 2, 0],
			}}
		>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box />
			<axesHelper />
		</StyledCanvas>
	);
}

function Box() {
	const boxRef = useRef<three.Mesh>();

	useFrame((state, delta) => {
		boxRef.current!.rotation.x += 0.01;
		boxRef.current!.rotation.y += 0.01;
	});

	return (
		<mesh ref={boxRef}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="#aca" />
		</mesh>
	);
}

const StyledCanvas = styled(Canvas)``;
