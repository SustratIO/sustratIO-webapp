import { CropDashboard } from '@features/crops/components/CropDashboard';
import { CropsErrorBoundary } from '@features/crops/components/CropsErrorBoundary';

export const CropsPage = () => {
	return (
		<CropsErrorBoundary>
			<CropDashboard />
		</CropsErrorBoundary>
	);
};
