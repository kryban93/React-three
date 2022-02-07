import * as three from 'three';
import styled from 'styled-components';
import CanvasElement from '../../threeElements/CanvasElement/CanvasElement';
import ParticlesElement from '../../threeElements/ParticlesElement/ParticlesElement';

export default function ParticlesWaves() {
	return (
		<StyledWrapper>
			<CanvasElement
				cameraOptions={{
					near: 1,
					far: 1000,
					zoom: 1,
					position: new three.Vector3(20, 20, 20),
				}}
				orbitControls
				ambientLight
				pointLight
				pointLightPosition={new three.Vector3(10, 0, 0)}
			>
				<ParticlesElement amount={200} radius={0.5} separation={5} />
			</CanvasElement>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.section`
	height: 100vh;
	width: 100vw;
`;
