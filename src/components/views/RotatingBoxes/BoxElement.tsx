export default function BoxElement({
	sinus,
	cosinus,
	color,
	rotation,
	size,
}: BoxElementProps) {
	return (
		<mesh
			position={[sinus, 0, cosinus]}
			rotation={[0, rotation, 0]}
			castShadow
			key={`${sinus}`}
		>
			<boxGeometry args={[size, size, size]} />
			<meshPhongMaterial color={color} />
		</mesh>
	);
}

export type BoxElementProps = {
	sinus: number;
	cosinus: number;
	color: string;
	rotation: number;
	size: number;
};
