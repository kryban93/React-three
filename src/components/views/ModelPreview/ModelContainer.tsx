import { Suspense } from 'react';
import styled from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AirplaneGLTFModel from './ModelPreview';

export default function ModelContainer() {
	return (
		<StyledWrapper>
			<Canvas
				camera={{
					near: 1,
					far: 1000,
					zoom: 1,
					position: [3, 3, 3],
				}}
			>
				<OrbitControls />
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<axesHelper />
				<AirplaneGLTFModel />
			</Canvas>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.section`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	background: linear-gradient(90deg, #009988 0%, #597e8d 100%);
`;
