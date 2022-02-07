import { useEffect, useRef, useState } from 'react';
import * as three from 'three';

export default function ParticlesElement({
	color = '#fff',
	radius = 1,
	separation,
	amount,
}: ParticlesElementProps) {
	const particlesRef = useRef<three.Group>();
	const [particlesPosition, setParticlesPosition] = useState<stateProps[]>([]);
	useEffect(() => {
		generateParticles();
	}, []);

	function generateParticles() {
		const particlesArray = [];
		for (let ix = 1; ix < amount; ix += 1) {
			const xPosition = ix * separation - (amount * separation) / 2;
			let yPosition: number;
			for (let iy = 1; iy < amount; iy += 1) {
				yPosition = iy * separation - (amount * separation) / 2;
				particlesArray.push({ xPosition, yPosition });
			}
		}
		console.log(particlesArray);
		setParticlesPosition(particlesArray);
	}

	return (
		<group castShadow ref={particlesRef}>
			{particlesPosition.map((particle) => (
				<mesh
					key={`${particle.xPosition}particle${particle.yPosition}`}
					position={[particle.xPosition, particle.yPosition, 2]}
				>
					<sphereBufferGeometry args={[radius, 5, 5]} attach="geometry" />
					<meshPhongMaterial color={color} attach="material" />
				</mesh>
			))}
		</group>
	);
}

export type ParticlesElementProps = {
	amount: number;
	color?: string;
	radius?: number;
	separation: number;
};

type stateProps = {
	xPosition: number;
	yPosition: number;
};
