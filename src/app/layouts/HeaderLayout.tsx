import { Link } from '@tanstack/react-router';

export const HeaderLayout = () => {
	return (
		<header>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/crops">Crops</Link>
			</nav>
		</header>
	);
};
