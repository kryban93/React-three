import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import IcosahedronElement from './IcosahedronElement';

export default function IcosahedronWithWireframe() {
	return (
		<StyledWrapper>
			<Canvas
				shadows
				camera={{
					near: 1,
					far: 110,
					zoom: 1,
					position: [10, 10, 10],
				}}
			>
				<OrbitControls enableDamping dampingFactor={0.06} />
				<ambientLight />
				<directionalLight color="#fff" intensity={1} position={[10, 5, -5]} />
				<directionalLight
					color="#af7527"
					intensity={1}
					position={[0, 15, -10]}
				/>
				<directionalLight
					color="#3a0d55"
					intensity={1}
					position={[-10, -5, 20]}
				/>
				<IcosahedronElement size={7} wireframe />
				<IcosahedronElement size={5} />
				<axesHelper />
			</Canvas>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.section`
	height: 70%;
	width: 50%;
	display: flex;
	align-items: center;
`;
