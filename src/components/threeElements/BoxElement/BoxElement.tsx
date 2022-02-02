export default function BoxElement({
	xPosition,
	zPosition,
	color,
	yRotation,
	size,
}: BoxElementProps) {
	return (
		<mesh
			position={[xPosition, 0, zPosition]}
			rotation={yRotation ? [0, yRotation, 0] : [0, 0, 0]}
			castShadow
			key={`${xPosition}`}
		>
			<boxGeometry args={[size, size, size]} attach="geometry" />
			<meshPhongMaterial color={color} attach="material" />
		</mesh>
	);
}

export type BoxElementProps = {
	xPosition: number;
	zPosition: number;
	color: string;
	yRotation?: number;
	size?: number;
};
