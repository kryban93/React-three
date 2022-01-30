import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>`
@import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;700&display=swap');
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
}
h2 {
	font-size: 1.5rem;
}

`;
