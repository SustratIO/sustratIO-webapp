import { apiClient } from '@core/axios';
import type { Plantation } from '@features/overview/types';

import { useQuery } from '@tanstack/react-query';

/**
 * Returns the data from the given farm.
 */
export const usePlantation = (plantationId?: string | null) => {
	const query = useQuery<Plantation>({
		queryKey: ['farm', plantationId],
		enabled: Boolean(plantationId),
		// Each 5 minutes
		staleTime: 1000 * 60 * 5,
		queryFn: async () => {
			if (!plantationId) {
				throw new Error('farmId is required to fetch a plantation');
			}

			const { data } = await apiClient.get<Plantation>(
				`/v1/plantation/${plantationId}`,
			);
			return data;
		},
	});
	return query;
};
