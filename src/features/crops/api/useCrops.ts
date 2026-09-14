import { useQuery } from '@tanstack/react-query';

import { api } from '@/config/axios';

import type { Pagination } from '@/types';
import type { Crop } from '../types';

/**
 * Returns authenticated user crops.
 *
 * @returns {Pagination<Crop>} Paginated list of user crops.
 */
export const useCrops = (userId?: string | null) => {
	return useQuery<Pagination<Crop>>({
		queryKey: ['crops', userId],
		queryFn: async () => {
			const { data } = await api.get<Pagination<Crop>>('/v1/crops');
			return data;
		},
		staleTime: 1000 * 10 * 1,
		enabled: Boolean(userId),
	});
};
