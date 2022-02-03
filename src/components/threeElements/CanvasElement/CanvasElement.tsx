import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as three from 'three';

export default function CanvasElement({
	children,
	shadows = true,
	orbitControls = false,
	ambientLight = true,
	pointLight = false,
	pointLightPosition,
	axesHelper = false,
	cameraOptions = {
		near: 1,
		far: 1000,
		zoom: 1,
		position: new three.Vector3(20, 20, 20),
	},
}: CanvasElementProps) {
	return (
		<Canvas
			shadows={shadows}
			camera={{
				near: cameraOptions.near,
				far: cameraOptions.far,
				zoom: cameraOptions.zoom,
				position: cameraOptions.position,
			}}
		>
			{orbitControls && <OrbitControls enableDamping dampingFactor={0.06} />}
			{ambientLight && <ambientLight />}
			{axesHelper && <axesHelper />}
			{pointLight && <pointLight position={pointLightPosition} />}
			{children}
		</Canvas>
	);
}

type CanvasElementProps = {
	children: React.ReactNode;
	shadows?: boolean;
	orbitControls?: boolean;
	ambientLight?: boolean;
	pointLight?: boolean;
	pointLightPosition?: three.Vector3;
	axesHelper?: boolean;
	cameraOptions: {
		near: number;
		far: number;
		zoom: number;
		position: three.Vector3;
	};
};
