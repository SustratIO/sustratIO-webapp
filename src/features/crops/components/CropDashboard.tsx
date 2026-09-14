import { useAuthStore } from '@/stores/useAuthStore';
import { useCrops } from '../api/useCrops';
import { CropList } from './CropList';

export const CropDashboard = () => {
	const userId = useAuthStore((state) => state.user?.id);

	const { data: cropsPage, isLoading } = useCrops(userId);

	if (isLoading) return <p>Loading crops...</p>;

	return (
		<CropList
			items={cropsPage?.items ?? []}
			onSelect={(cropId) => {
				console.debug(cropId);
			}}
		/>
	);
};
