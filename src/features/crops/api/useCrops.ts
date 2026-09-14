import { apiClient } from '@core/axios';
import type { Pagination } from '@core/types/api';
import type { Crop } from '@features/crops/types';

import { useQuery } from '@tanstack/react-query';

/**
 * Returns authenticated user crops.
 *
 * @returns {Pagination<Crop>} Paginated list of user crops.
 */
export const useCrops = (userId?: string | null) => {
	const query = useQuery<Pagination<Crop>>({
		queryKey: ['crops', userId],
		queryFn: async () => {
			const { data } = await apiClient.get<Pagination<Crop>>('/v1/crops');
			return data;
		},
		staleTime: 1000 * 10 * 1,
		enabled: Boolean(userId),
	});
	return query;
};
