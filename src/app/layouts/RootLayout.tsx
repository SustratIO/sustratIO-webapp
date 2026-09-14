import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const RootLayout = () => {
	return (
		<>
			<header>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/crops">Crops</Link>
				</nav>
			</header>

			{/* Current page render */}
			<main>
				<Outlet />
			</main>

			<footer></footer>

			{/* Toolset for inspecting routes and types */}
			{import.meta.env.DEV && (
				<TanStackRouterDevtools position="bottom-right" />
			)}
		</>
	);
};
