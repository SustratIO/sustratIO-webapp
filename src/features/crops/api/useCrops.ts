import { apiClient } from '@core/axios';
import type { Pagination } from '@core/types/api';
import type { Crop } from '@features/crops/types';

import { useQuery } from '@tanstack/react-query';

/**
 * Returns authenticated user crops.
 */
export const useCrops = (userId?: string | null) => {
	const query = useQuery<Pagination<Crop>>({
		queryKey: ['crops', userId],
		enabled: Boolean(userId),
		staleTime: 1000 * 10 * 1,
		queryFn: async () => {
			const { data } = await apiClient.get<Pagination<Crop>>('/v1/crops');
			return data;
		},
	});
	return query;
};
