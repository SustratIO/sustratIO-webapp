import { routeTree } from '@app/routeTree.gen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
	createMemoryHistory,
	createRouter,
	RouterContextProvider,
} from '@tanstack/react-router';
import { type RenderOptions, render } from '@testing-library/react';
import type { ReactElement } from 'react';

export const createTestRouterFromFiles = (initialLocation = '/') => {
	const router = createRouter({
		routeTree: routeTree,
		history: createMemoryHistory({
			// Do not touch actual DOM history
			initialEntries: [initialLocation],
		}),
	});

	return router;
};

interface RenderWithFileRoutesOptions extends Omit<RenderOptions, 'wrapper'> {
	initialLocation?: string;
}

const customRender = (
	ui: ReactElement,
	options?: RenderWithFileRoutesOptions,
) => {
	const testQueryClient = new QueryClient({
		defaultOptions: {
			queries: {
				// This avoid timeouts waiting from retries on tests that fail on purpose
				retry: false,
			},
		},
	});

	// Create a Dummy In-Memory Router for tests
	const router = createTestRouterFromFiles(options?.initialLocation);

	const WrapperWithProviders = ({
		children,
	}: {
		children: React.ReactNode;
	}) => {
		return (
			<QueryClientProvider client={testQueryClient}>
				<RouterContextProvider router={router}>
					{children}
				</RouterContextProvider>
			</QueryClientProvider>
		);
	};

	return {
		...render(ui, { wrapper: WrapperWithProviders, ...options }),
		router: router,
	};
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
