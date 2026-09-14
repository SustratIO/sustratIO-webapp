import { useAuthStore } from '@app/stores/useAuthStore';
import axios from 'axios';

export const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8000',
});

// Interceptor for injecting the token
apiClient.interceptors.request.use(
	async (config) => {
		// We get the `getToken` function directly from the store, separated from React cycle
		const { getToken } = useAuthStore.getState();
		const token = await getToken();

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		const normalizedError =
			error instanceof Error ? error : new Error(String(error));
		return Promise.reject(normalizedError);
	},
);
