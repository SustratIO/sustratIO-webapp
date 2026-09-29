import type { Crop } from '../types/index';

export const CropDetail = ({ cropData }: { cropData: Crop }) => {
  console.log(
    `CROP: ${cropData.updated_at ? cropData.updated_at.toDateString() : 'NADA'}`,
  );
  return (
    <dl className='grid grid-cols-[35%_auto] divide-y divide-gray-200 overflow-y-auto p-7'>
      <dt>Id: </dt>
      <dd>{cropData.id}</dd>
      <dt>Name: </dt>
      <dd>{cropData.name}</dd>
      <dt>Unique name: </dt>
      <dd>{cropData.unique_name}</dd>
      <dt>Description:</dt>
      <dd>{cropData.description}</dd>
      <dt>Notes: </dt>
      <dd>{cropData.notes}</dd>
      <dt>Created at: </dt>
      <dd>{new Date(cropData.created_at).toDateString()}</dd>
    </dl>
  );
};
