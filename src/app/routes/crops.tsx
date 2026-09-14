import { CropsPage } from '@features/crops';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/crops')({
	component: CropsPage,
});
