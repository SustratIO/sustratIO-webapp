// Auto-generated tree
import { routeTree } from '@app/routeTree.gen';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const queryClient = new QueryClient();

const router = createRouter({
	routeTree,
	// Context dependencies
	context: {
		queryClient,
	},
});

// Register router to enable auto-complete and strict typing in the app
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error('Failed to find the root element.');
}

createRoot(rootElement).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>,
);
