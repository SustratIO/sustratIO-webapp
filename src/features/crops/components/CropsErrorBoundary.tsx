import { ModuleErrorFallback } from '@shared/components/ModuleErrorFallback';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export interface CropsBoundaryProps {
	children: ReactNode;
}

export const CropsErrorBoundary = ({ children }: CropsBoundaryProps) => {
	// Reset TanStack Query cache on retry
	const { reset } = useQueryErrorResetBoundary();

	return (
		<ErrorBoundary
			onReset={reset}
			FallbackComponent={(props) => (
				<ModuleErrorFallback {...props} moduleName="Crops" />
			)}
			onError={(error, info) => {
				// Notify telemetry service if needed
				console.error('[Crops Error]:', error, info.componentStack);
			}}
		>
			{children}
		</ErrorBoundary>
	);
};
