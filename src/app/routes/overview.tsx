import { OverviewPage } from '@features/overview';
import { useAuthStore } from '@stores/useAuthStore';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/overview')({
	beforeLoad: ({ location }) => {
		const { isAuthenticated } = useAuthStore.getState();
		if (!isAuthenticated) {
			throw redirect({
				to: '/login',
				search: { redirect: location.href },
			});
		}
	},
	component: OverviewPage,
});
