import { useState, useEffect } from 'react';

export default function useWindowDimenions() {
	const [windowDimensions, setWindowDimenions] = useState(
		getWindowDimensions(),
	);

	useEffect(() => {
		function hadleResize() {
			setWindowDimenions(getWindowDimensions());
		}

		window.addEventListener('resize', hadleResize);
	});

	return windowDimensions;
}

const getWindowDimensions = (): WindowDimensionsProps => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

type WindowDimensionsProps = {
	width: number;
	height: number;
};
