import React from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function GltfModelCanvas({ children }: GltfModelCanvasProps) {
	return (
		<Canvas
			shadows
			camera={{
				near: 1,
				far: 1000,
				zoom: 1,
				position: [20, 20, 20],
			}}
		>
			<OrbitControls />
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<axesHelper />
			{children}
		</Canvas>
	);
}

type GltfModelCanvasProps = {
	children: React.ReactNode;
};
