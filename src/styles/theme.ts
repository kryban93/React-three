export const theme: Partial<ThemeProps> = {
	primary: '#264653',
	secondary: '#e76f51',
	tertiary: '#2a9d8f',
	quaternary: '#f4a261',
	fontSize: {
		s: '0.875rem',
		m: '1rem',
		ml: '1.25rem',
		l: '1.5rem',
		xl: '2rem',
		xxl: '2.5rem',
	},
	fontWeight: {
		bold: 700,
		medium: 500,
		regular: 400,
	},
};

export type ThemeProps = {
	primary: string;
	secondary: string;
	tertiary: string;
	quaternary: string;
	fontSize: {};
	fontWeight: {};
};
