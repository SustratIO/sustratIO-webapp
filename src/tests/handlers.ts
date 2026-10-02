import type { Crop } from '@features/crops';

import { HttpResponse, http } from 'msw';

export const handlers = [
	http.get('*/v1/api/crops', () => {
		return HttpResponse.json<Crop[]>([
			{ id: 'uuid', name: 'Tomato', created_at: new Date(Date.now()) },
		]);
	}),
];
