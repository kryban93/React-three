import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { DotAnimation } from './components/views/DotAnimation/DotAnimation';
import { Example } from './components/views/Example/Example';
import { GlobalStyles } from './styles/GlobalStyles';
import { Reset } from './styles/Reset';
import { theme } from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Reset />
			<GlobalStyles />

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Example />} />
					<Route path="/dots" element={<DotAnimation />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;

const StyledContainer = styled.div`
	height: 300px;
`;
