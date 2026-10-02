import { RootLayout } from '@app/layouts/RootLayout';
import { GlobalErrorBoundary } from '@appComponents/GlobalErrorBoundary';
import { AuthProvider } from '@core/auth/AuthProvider';
import { createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
	component: () => (
		<AuthProvider>
			<RootLayout />
		</AuthProvider>
	),
	errorComponent: () => GlobalErrorBoundary,
});
