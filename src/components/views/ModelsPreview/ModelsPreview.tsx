import styled from 'styled-components';
import AirplaneGltfElement from '../../threeElements/AirplaneGltfElement/AirplaneGltfElement';
import GltfModelCanvas from '../../threeElements/GltfModelCanvas/GltfModelCanvas';

export default function ModelsPreview() {
	return (
		<StyledWrapper>
			<GltfModelCanvas>
				<AirplaneGltfElement />
			</GltfModelCanvas>
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
