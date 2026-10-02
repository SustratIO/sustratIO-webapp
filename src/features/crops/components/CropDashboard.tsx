import { useCrops } from '@features/crops/api/useCrops';
import { CropList } from '@features/crops/components/CropList';
import { useAuthStore } from '@stores/useAuthStore';
import { Navigate } from '@tanstack/react-router';

export const CropDashboard = () => {
	const {
		user,
		isAuthenticated,
		logout,
		isLoading: isUserLoading,
	} = useAuthStore();

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

	return (
		<>
			<h1>Welcome, {user?.email}</h1>
			<button
				type="button"
				onClick={() => {
					void logout();
				}}
			>
				Logout
			</button>
			<CropList items={cropsPage?.items ?? []} />
		</>
	);
};
