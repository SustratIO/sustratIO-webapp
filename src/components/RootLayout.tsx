import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const RootComponent = () => {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Test nav page */}
			<nav className="p-4 bg-slate-900 text-white flex gap-4">
				<Link to="/" className="[&.active]:font-bold">
					Home
				</Link>
				<Link to="/crops" className="[&.active]:font-bold">
					Crops
				</Link>
			</nav>

			{/* Current page render */}
			<main className="flex-1 p-6">
				<Outlet />
			</main>

			{/* Toolset for inspecting routes and types */}
			{import.meta.env.DEV && (
				<TanStackRouterDevtools position="bottom-right" />
			)}
		</div>
	);
};
