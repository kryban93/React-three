import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>`

html {
	font-family: 'Arimo', sans-serif;
	font-size: 16px;
	line-height: 1.25rem;	
}

body {
	height: 100vh;	
}

h1 {
	font-size: 2rem; 
	line-height: 2.2rem;
}
h2 {
	font-size: 1.5rem;
	line-height: 2.rem;
}

`;
