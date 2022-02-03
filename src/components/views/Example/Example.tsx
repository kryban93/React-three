import { useRef } from 'react';
import * as three from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';

export function Example() {
	return (
		<StyledWrapper>
			<Canvas
				shadows
				camera={{
					near: 1,
					far: 1000,
					zoom: 1,
					position: [2, 2, 0],
				}}
			>
				<OrbitControls />
				<ambientLight color="#fff" intensity={0.5} />
				<directionalLight
					color="#fff"
					intensity={1}
					position={[10, 0, 0]}
					castShadow
				/>
				<directionalLight
					color="#af7527"
					intensity={50}
					position={[7.5, -10, 5]}
					castShadow
				/>
				<directionalLight
					color="#3a0d55"
					intensity={1}
					position={[-10, -5, 20]}
					castShadow
				/>
				<pointLight position={[10, 10, 10]} />
				<Box />
				<axesHelper />
			</Canvas>
		</StyledWrapper>
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

const StyledWrapper = styled.section`
	height: 100vh;
`;
