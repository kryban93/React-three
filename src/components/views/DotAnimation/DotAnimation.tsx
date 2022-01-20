import { Canvas } from '@react-three/fiber';
import * as three from 'three';
import { useLayoutEffect, useRef } from 'react';

export function DotAnimation() {
	return (
		<Canvas>
			<Dots />
		</Canvas>
	);
}

function Dots() {
	const dotsRef = useRef<three.InstancedMesh>();

	useLayoutEffect(() => {
		const transform = new three.Matrix4();
		for (let i = 0; i < 10000; i += 1) {
			const x = (i % 100) - 50;
			const y = Math.floor(i / 100) - 50;
			transform.setPosition(x, y, 0);
			dotsRef.current!.setMatrixAt(i, transform);
		}
	}, []);
	return (
		<instancedMesh ref={dotsRef} args={[undefined, undefined, 1]}>
			<circleBufferGeometry />
			<meshBasicMaterial color="#ffccff" />
		</instancedMesh>
	);
}
