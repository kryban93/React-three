import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
	nodes: {
		Trex_1: THREE.SkinnedMesh;
		Trex_2: THREE.SkinnedMesh;
		Trex_3: THREE.SkinnedMesh;
		Trex_4: THREE.SkinnedMesh;
		Trex_5: THREE.SkinnedMesh;
		root: THREE.Bone;
	};
	materials: {
		LightYellow: THREE.MeshStandardMaterial;
		LightGreen: THREE.MeshStandardMaterial;
		Green: THREE.MeshStandardMaterial;
		Black: THREE.MeshStandardMaterial;
		Red: THREE.MeshStandardMaterial;
	};
	animations: GLTFActions[];
};

type ActionName =
	| 'Armature|TRex_Attack'
	| 'Armature|TRex_Death'
	| 'Armature|TRex_Idle'
	| 'Armature|TRex_Jump'
	| 'Armature|TRex_Run'
	| 'Armature|TRex_Walk';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function Model(props: JSX.IntrinsicElements['group']) {
	const group = useRef<THREE.Group>();
	const { nodes, materials, animations } = useGLTF('/T-Rex.glb') as any;
	const { actions } = useAnimations(animations, group);
	console.log(actions);
	return (
		<group ref={group} {...props} dispose={null}>
			<group
				name="Armature"
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[300, 300, 300]}
			>
				<primitive object={nodes.root} />
			</group>
			<group
				position={[0, 0, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[100, 100, 100]}
			>
				<skinnedMesh
					geometry={nodes.Trex_1.geometry}
					material={materials.LightYellow}
					skeleton={nodes.Trex_1.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Trex_2.geometry}
					material={materials.LightGreen}
					skeleton={nodes.Trex_2.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Trex_3.geometry}
					material={materials.Green}
					skeleton={nodes.Trex_3.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Trex_4.geometry}
					material={materials.Black}
					skeleton={nodes.Trex_4.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Trex_5.geometry}
					material={materials.Red}
					skeleton={nodes.Trex_5.skeleton}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('/T-Rex.glb');
