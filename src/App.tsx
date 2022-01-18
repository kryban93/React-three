import { ThemeProvider } from 'styled-components';
import { Reset } from './styles/Reset';
import { theme } from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Reset />
			<div className="App">
				<header className="App-header">
					<h1>Try me</h1>
				</header>
			</div>
		</ThemeProvider>
	);
}

export default App;
