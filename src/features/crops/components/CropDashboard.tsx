import { useAuthStore } from '@app/stores/useAuthStore';
import { useCrops } from '@features/crops/api/useCrops';
import { CropList } from '@features/crops/components/CropList';

export const CropDashboard = () => {
	const {
		user,
		isAuthenticated,
		login,
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
		return (
			<button
				type="button"
				onClick={() => {
					void login();
				}}
			>
				Login to see crops
			</button>
		);
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
			<CropList
				items={cropsPage?.items ?? []}
				onSelect={(cropId) => {
					console.debug(cropId);
				}}
			/>
		</>
	);
};
