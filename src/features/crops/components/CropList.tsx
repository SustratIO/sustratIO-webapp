import type { Crop } from '@features/crops/types';

interface CropListPops {
	items: Crop[];
	onSelect: (id: string) => void;
}

export const CropList = ({ items, onSelect }: CropListPops) => {
	if (items.length === 0) return <p>No crops created.</p>;

	return (
		<ul>
			{items.map((crop) => (
				<li key={crop.id}>
					<button
						type="button"
						onClick={() => {
							onSelect(crop.id);
						}}
					>
						{crop.name}
					</button>
				</li>
			))}
		</ul>
	);
};
