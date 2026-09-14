import { GlobalErrorBoundary } from '@app/components/GlobalErrorBoundary';
import { RootLayout } from '@app/layouts/RootLayout';
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
