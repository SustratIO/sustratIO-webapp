import { useCrops } from '@features/crops/api/useCrops';
import { CropList } from '@features/crops/components/CropList';
import { useAuthStore } from '@stores/useAuthStore';
import { Navigate } from '@tanstack/react-router';

export const CropDashboard = () => {
	const { user, isAuthenticated, isLoading: isUserLoading } = useAuthStore();

	const {
		data: cropsPage,
		isLoading: isCropsAPILoading,
		isError: isCropsAPIError,
		error: cropAPIError,
	} = useCrops(user?.id);

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	if (isUserLoading) return <p>Loading session...</p>;
	if (isCropsAPIError) return <p>API Error: {cropAPIError.message}</p>;
	if (isCropsAPILoading) return <p>Loading crops...</p>;

	return <CropList items={cropsPage?.items ?? []} />;
};
