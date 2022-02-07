import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Nav from './components/ui/Nav/Nav';
import { Example } from './components/views/Example/Example';
import MainView from './components/views/MainView/MainView';
import ModelsPreview from './components/views/ModelsPreview/ModelsPreview';
import ParticlesWaves from './components/views/ParticlesWaves/ParticlesWaves';
import RotatingBoxes from './components/views/RotatingBoxes/RotatingBoxes';
import { GlobalStyles } from './styles/GlobalStyles';
import { Reset } from './styles/Reset';
import { theme } from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Reset />
			<GlobalStyles />
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="" element={<MainView />} />
					<Route path="/box" element={<Example />} />
					<Route path="/modelspreview" element={<ModelsPreview />} />
					<Route path="/rotatingboxes" element={<RotatingBoxes />} />
					<Route path="/particleswaves" element={<ParticlesWaves />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
