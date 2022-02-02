import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Nav from './components/ui/Nav/Nav';

import { Example } from './components/views/Example/Example';
import MainView from './components/views/MainView/MainView';
import ModelContainer from './components/views/AirplaneModelCanvas/AirplaneModelCanvas';
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
					<Route path="/gltfairplane" element={<ModelContainer />} />
					<Route path="/rotatingboxes" element={<RotatingBoxes />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
