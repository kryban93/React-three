export default function IcosahedronElement({
	wireframe = false,
	size = 1,
}: IcosahedronElementTypes) {
	return (
		<mesh castShadow receiveShadow>
			<icosahedronBufferGeometry attach="geometry" args={[size, 1]} />
			<meshPhongMaterial
				attach="material"
				color="#ccc"
				flatShading
				wireframe={wireframe}
			/>
		</mesh>
	);
}

type IcosahedronElementTypes = {
	wireframe?: boolean;
	size: number;
};
