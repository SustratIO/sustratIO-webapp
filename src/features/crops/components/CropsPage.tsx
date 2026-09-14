import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@/components/ErrorFallback';
import { CropDashboard } from './CropDashboard';

export const CropsPage = () => {
	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() => {
				// Logic for resetting
				console.debug('Resetting Crops Dashboard');
			}}
		>
			<CropDashboard />
		</ErrorBoundary>
	);
};
