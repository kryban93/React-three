import { useState, useEffect } from 'react';
import * as three from 'three';
import changeToRadians from '../../../additional/changeToRadians';
import BoxElement from './BoxElement';

export default function BoxRing({ count, radius, color, size }: BoxRingProps) {
	const [boxesPosition, setBoxesPosition] = useState<stateProps[]>([]);
	useEffect(() => {
		createRings();
	}, []);
	function createRings() {
		const boxArray = [];
		for (let i = 0; i < count; i += 1) {
			const length = 360 / count;
			const radialPosition = changeToRadians(length * i);
			const distance = radius * 2;
			const sinus = Math.sin(radialPosition) * distance;
			const cosinus = Math.cos(radialPosition) * distance;

			boxArray.push({ sinus, cosinus, radialPosition });
		}
		setBoxesPosition(boxArray);
	}

	return (
		<group castShadow>
			{boxesPosition.map((boxItem) => (
				<BoxElement
					sinus={boxItem.sinus}
					cosinus={boxItem.cosinus}
					rotation={boxItem.radialPosition}
					color={color}
					key={`${boxItem.sinus}${boxItem.cosinus}`}
					size={size}
				/>
			))}
		</group>
	);
}

export type BoxRingProps = {
	children?: React.ReactNode;
	count: number;
	radius: number;
	color: string;
	size: number;
};

type stateProps = {
	sinus: number;
	cosinus: number;
	radialPosition: number;
};
