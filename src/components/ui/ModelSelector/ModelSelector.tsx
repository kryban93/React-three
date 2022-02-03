import styled from 'styled-components';

const models = [{ name: 'dinosaur' }, { name: 'airplane' }];

export default function ModelSelector({ selectFunction }: ModelSelectorTypes) {
	return (
		<StyledWrapper>
			{models.map((model) => (
				<div key={model.name}>
					<StyledLabel htmlFor={model.name}>{model.name}</StyledLabel>
					<StyledInput
						type="radio"
						name="model"
						value={`${model.name}`}
						onChange={(event) => selectFunction(event.target.value)}
						id={model.name}
					/>
				</div>
			))}
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;

	margin: 50px;
`;

const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: ${({ theme }) => theme.fontSize.xl};
	font-family: Azimo, sans-serif;

	&:hover {
		color: white;
	}
`;

const StyledInput = styled.input`
	display: none;
	&:checked + ${StyledLabel} {
		color: white;
		background-color: red;
	}
`;

type ModelSelectorTypes = {
	selectFunction: (value: string) => void;
};
