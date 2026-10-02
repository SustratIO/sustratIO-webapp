import { CropDashboard } from '@features/crops/components/CropDashboard';
import { useAuthStore } from '@stores/useAuthStore';

import { delay, HttpResponse, http } from 'msw';
import { beforeEach, expect, test } from 'vitest';
import { server } from '@/tests/server';
import { render, screen } from '@/tests/utils';

// Session cleanup of each test
beforeEach(() => {
	useAuthStore.setState({
		user: null,
		isAuthenticated: false,
		isLoading: false,
	});
});

test('user is loading after login', async () => {
	useAuthStore.setState({
		isAuthenticated: true,
		isLoading: true,
	});

	render(<CropDashboard />, { initialLocation: '/crops' });

	const item = await screen.findByText('Loading session...');
	expect(item).toBeInTheDocument();
});

test('user crops are loading after logging', async () => {
	useAuthStore.setState({
		user: { id: '1', name: 'Test', email: 'test@test.com' },
		isAuthenticated: true,
		isLoading: false,
	});

	// Override handler to inject infinite delay
	server.use(
		http.get('*/v1/crops', async () => {
			// Suspends promise resolution
			await delay('infinite');
			return HttpResponse.json([]);
		}),
	);

	render(<CropDashboard />, { initialLocation: '/crops' });

	const loadingMessage = await screen.findByText('Loading crops...');
	expect(loadingMessage).toBeInTheDocument();
});
