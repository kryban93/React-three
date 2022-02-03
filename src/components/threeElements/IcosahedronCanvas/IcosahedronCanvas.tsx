import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import IcosahedronElement from '../IcosahedronElement/IcosahedronElement';

export default function IcosahedronCanvas() {
	return (
		<StyledWrapper>
			<Canvas
				shadows
				camera={{
					near: 1,
					far: 110,
					zoom: 1,
					position: [0, 0, 20],
				}}
			>
				<OrbitControls enableDamping dampingFactor={0.06} />
				<ambientLight color="#999999" intensity={0.1} />
				<directionalLight
					color="#ffffff"
					intensity={0.5}
					position={[1, 1, 0]}
					castShadow
				/>
				<directionalLight
					color="#7209b7"
					intensity={1}
					position={[-1, 2, 0]}
					castShadow
				/>
				<directionalLight
					color="#f3722c"
					intensity={1}
					position={[1, -0.5, 0]}
					castShadow
				/>

				<IcosahedronElement size={9} wireframe direction="left" />
				<IcosahedronElement size={6} direction="right" />
				<axesHelper scale={[8, 8, 8]} />
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
