import type { Crop } from '@features/crops/types';

interface CropListPops {
  items: Crop[];
  onSelect: (id: string) => void;
}

export const CropList = ({ items, onSelect }: CropListPops) => {
  if (items.length === 0) return <p>No crops created.</p>;

  return (
    <fieldset className='fieldset-base min-h-0'>
      <legend>Crops</legend>
      <ul className='max-h-full min-h-0 divide-y divide-gray-200 overflow-y-auto'>
        {items.map((crop) => (
          <li key={crop.id}>
            <button
              type='button'
              onClick={() => {
                onSelect(crop.id);
              }}
            >
              {crop.name}
            </button>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};
