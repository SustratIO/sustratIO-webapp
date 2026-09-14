import type { Crop } from '../types';

interface CropListPops {
	items: Crop[];
	onSelect: (id: string) => void;
}

export const CropList = ({ items, onSelect }: CropListPops) => {
	if (items.length === 0) return <p>No crops created.</p>;

	return (
		<ul className="divide-y divide-gray-200">
			{items.map((crop) => (
				<li key={crop.id}>
					<button
						type="button"
						onClick={() => {
							onSelect(crop.id);
						}}
						className="w-full text-left p-4 hover:bg-gray-50 cursor-pointer focus:outline-none focus:bg-gray-100"
					>
						{crop.name}
					</button>
				</li>
			))}
		</ul>
	);
};
