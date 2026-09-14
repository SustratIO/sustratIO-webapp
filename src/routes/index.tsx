import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: () => (
		<>
			<h1 className="text-2xl font-bold">Welcome to SustratIO</h1>
			<p>Monitoring dashboard and soil quality.</p>
		</>
	),
});
