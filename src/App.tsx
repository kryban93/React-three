import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Nav from './components/ui/Nav/Nav';
import AirplaneModel from './components/views/AirplaneModel/AirplaneModel';
import { DotAnimation } from './components/views/DotAnimation/DotAnimation';
import { Example } from './components/views/Example/Example';
import ModelContainer from './components/views/ModelPreview/ModelContainer';
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
					<Route path="/box" element={<Example />} />
					<Route path="/dots" element={<DotAnimation />} />
					<Route path="/airplane" element={<AirplaneModel />} />
					<Route path="/gltfairplane" element={<ModelContainer />} />
					<Route path="/rotatingboxes" element={<RotatingBoxes />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
