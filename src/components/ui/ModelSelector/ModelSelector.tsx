import styled from 'styled-components';

const models = [{ name: 'dinosaur' }, { name: 'airplane' }];

export default function ModelSelector({ selectFunction }: ModelSelectorTypes) {
	return (
		<StyledWrapper>
			{models.map((model) => (
				<StyledLabel key={model.name}>
					<StyledInput
						type="radio"
						name="model"
						value={`${model.name}`}
						onChange={(event) => selectFunction(event.target.value)}
					/>
					{model.name}
				</StyledLabel>
			))}
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
	border: 1px solid red;
`;

const StyledInput = styled.input``;

const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: ${({ theme }) => theme.fontSize.l};
	font-family: Azimo, sans-serif;
`;

type ModelSelectorTypes = {
	selectFunction: (value: string) => void;
};
