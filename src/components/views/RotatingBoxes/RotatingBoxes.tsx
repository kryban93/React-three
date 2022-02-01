import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import BoxRing from './BoxRing';

export default function RotatingBoxes() {
	return (
		<StyledWrapper>
			<Canvas
				camera={{
					near: 1,
					far: 1000,
					zoom: 1,
					position: [30, 40, 40],
				}}
			>
				<OrbitControls enableDamping dampingFactor={0.06} />
				<ambientLight />
				<pointLight position={[10, 10, 0]} />
				<axesHelper />
				<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
					<planeGeometry args={[200, 200]} />
					<shadowMaterial opacity={0.1} />
				</mesh>
				<BoxRing radius={3} count={30} color="#F76E11" size={1} />
				<BoxRing radius={6} count={40} color="#313552" size={1} />
				<BoxRing radius={9} count={60} color="#B8405E" size={1} />
				<BoxRing radius={12} count={80} color="#313552" size={1} />
				<BoxRing radius={15} count={110} color="#B8405E" size={1} />
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
