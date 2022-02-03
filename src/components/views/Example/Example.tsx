import { useRef } from 'react';
import * as three from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';
import CanvasElement from '../../threeElements/CanvasElement/CanvasElement';

export function Example() {
	return (
		<StyledWrapper>
			<CanvasElement
				cameraOptions={{
					near: 1,
					far: 1000,
					zoom: 1,
					position: new three.Vector3(2, 2, 2),
				}}
				orbitControls
				ambientLight
				pointLight
				pointLightPosition={new three.Vector3(10, 0, 0)}
			>
				<Box />
			</CanvasElement>
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
