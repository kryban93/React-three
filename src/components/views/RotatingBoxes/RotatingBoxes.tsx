import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import styled from 'styled-components';
import { OrbitControls, useHelper } from '@react-three/drei';
import BoxRing from './BoxRing';

export default function RotatingBoxes() {
	return (
		<StyledWrapper>
			<Canvas
				shadows
				camera={{
					near: 1,
					far: 1000,
					zoom: 1,
					position: [30, 40, 40],
				}}
			>
				<OrbitControls enableDamping dampingFactor={0.06} />
				<ambientLight />
				<SpotLight />
				<axesHelper />
				<mesh
					rotation={[-Math.PI / 2, 0, 0]}
					position={[0, -2, 0]}
					receiveShadow
				>
					<planeGeometry args={[200, 200]} />
					<shadowMaterial opacity={0.15} />
				</mesh>
				<BoxRing
					radius={4}
					count={30}
					color="#F76E11"
					size={1}
					direction="left"
				/>
				<BoxRing
					radius={8}
					count={40}
					color="#313552"
					size={1.5}
					direction="right"
				/>
				<BoxRing
					radius={12}
					count={50}
					color="#B8405E"
					size={1.75}
					direction="left"
				/>
				<BoxRing
					radius={16}
					count={70}
					color="#313552"
					size={2}
					direction="right"
				/>
				<BoxRing
					radius={20}
					count={80}
					color="#B8405E"
					size={2.25}
					direction="left"
				/>
			</Canvas>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.section`
	height: 100vh;
	background: linear-gradient(
		90deg,
		rgba(51, 68, 111, 1) 0%,
		rgba(138, 84, 170, 1) 100%
	);
`;

function SpotLight() {
	const light = useRef();
	// useHelper(light, three.SpotLightHelper, '#fff');
	return (
		<spotLight ref={light} intensity={0.7} position={[0, 40, 20]} castShadow />
	);
}
