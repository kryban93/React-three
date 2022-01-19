import styled, { ThemeProvider } from 'styled-components';
import { Example } from './components/views/Example/Example';
import { GlobalStyles } from './styles/GlobalStyles';
import { Reset } from './styles/Reset';
import { theme } from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Reset />
			<GlobalStyles />
			<StyledContainer>
				<Example />
			</StyledContainer>
		</ThemeProvider>
	);
}

export default App;

const StyledContainer = styled.div`
	height: 300px;
`;
