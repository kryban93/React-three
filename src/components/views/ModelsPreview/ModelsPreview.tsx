import { useState } from 'react';
import styled from 'styled-components';
import AirplaneGltfElement from '../../threeElements/AirplaneGltfElement/AirplaneGltfElement';
import GltfModelCanvas from '../../threeElements/GltfModelCanvas/GltfModelCanvas';
import DinosaurGtlfElement from '../../threeElements/DinosaurGltfElement/DinosaurGltfElement';
import ModelSelector from '../../ui/ModelSelector/ModelSelector';

export default function ModelsPreview() {
	const [selectedModel, setSelectedModel] = useState<string>();

	const selectFunction = (value: string) => {
		setSelectedModel(value);
		console.log(value);
	};
	return (
		<StyledWrapper>
			<ModelSelector selectFunction={selectFunction} />
			<GltfModelCanvas>
				{selectedModel === 'airplane' ? <AirplaneGltfElement /> : null}
				{selectedModel === 'dinosaur' ? <DinosaurGtlfElement /> : null}
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
