import { createFileRoute } from '@tanstack/react-router';
import { CropsPage } from '@/features/crops';

export const Route = createFileRoute('/crops')({
	component: CropsPage,
});
