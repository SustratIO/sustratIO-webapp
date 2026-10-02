import { FooterLayout } from '@app/layouts/FooterLayout';
import { HeaderLayout } from '@app/layouts/HeaderLayout';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const RootLayout = () => {
	return (
		<>
			<HeaderLayout />

			{/* Current page render */}
			<main>
				<Outlet />
			</main>

			<FooterLayout />

			{/* Toolset for inspecting routes and types */}
			{import.meta.env.DEV && import.meta.env.MODE !== 'test' && (
				<TanStackRouterDevtools position="bottom-right" />
			)}
		</>
	);
};
