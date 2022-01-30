import styled from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function AirplaneModel() {
	return (
		<StyledWrapper>
			<Canvas
				camera={{
					near: 1,
					far: 1000,
					zoom: 1,
					position: [20, 20, 15],
				}}
			>
				<OrbitControls />
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Airplane />
				<axesHelper />
			</Canvas>
		</StyledWrapper>
	);
}

function Airplane() {
	return (
		<group>
			<mesh>
				<boxGeometry args={[5, 5, 15]} />
				<meshStandardMaterial color="#aca" />
			</mesh>
			<mesh position={[0, 0, 2]}>
				<boxGeometry args={[20, 1, 5]} />
				<meshStandardMaterial color="#cca" />
			</mesh>
			<mesh position={[0, 4, -7]}>
				<boxGeometry args={[1, 8, 5]} />
				<meshStandardMaterial color="#cca" />
			</mesh>
		</group>
	);
}

const StyledWrapper = styled.section`
	height: 70vh;
	width: 100%;
	display: flex;
	align-items: center;
`;
