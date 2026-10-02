import type { Crop } from '@features/crops/types';

interface CropListPops {
	items: Crop[];
}

export const CropList = ({ items }: CropListPops) => {
	if (items.length === 0) return <p>No crops created.</p>;

	return (
		<ul>
			{items.map((crop) => (
				<li key={crop.id}>{crop.name}</li>
			))}
		</ul>
	);
};
