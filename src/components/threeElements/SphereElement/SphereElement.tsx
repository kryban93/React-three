export default function SphereElement({
	xPosition,
	zPosition,
	color,
	yRotation,
	heightSegments = 1,
	widthSegments = 1,
	radius = 1,
}: BoxElementProps) {
	return (
		<mesh
			position={[xPosition, 0, zPosition]}
			rotation={yRotation ? [0, yRotation, 0] : [0, 0, 0]}
			castShadow
			key={`${xPosition}`}
		>
			<sphereGeometry
				args={[radius, heightSegments, widthSegments]}
				attach="geometry"
			/>
			<meshPhongMaterial color={color} attach="material" />
		</mesh>
	);
}

export type BoxElementProps = {
	xPosition: number;
	zPosition: number;
	color: string;
	yRotation?: number;
	radius?: number;
	widthSegments: number;
	heightSegments: number;
};
