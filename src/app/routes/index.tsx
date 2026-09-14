import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: () => (
		<>
			<h1>Welcome to SustratIO</h1>
			<p>Monitoring dashboard and soil quality.</p>
		</>
	),
});
