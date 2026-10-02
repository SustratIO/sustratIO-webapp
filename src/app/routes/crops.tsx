import { CropsPage } from '@features/crops';
import { useAuthStore } from '@stores/useAuthStore';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/crops')({
	beforeLoad: ({ location }) => {
		const { isAuthenticated } = useAuthStore.getState();
		if (!isAuthenticated) {
			throw redirect({
				to: '/login',
				search: { redirect: location.href },
			});
		}
	},
	component: CropsPage,
});
