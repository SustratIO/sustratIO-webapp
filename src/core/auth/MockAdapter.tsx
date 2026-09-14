import { useAuthStore } from '@app/stores/useAuthStore';
import type React from 'react';
import { useEffect } from 'react';

export const MockAdapter: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const setAuthData = useAuthStore((state) => state.setAuthData);

	useEffect(() => {
		setAuthData({
			isAuthenticated: true, // Simulate login
			isLoading: false,
			user: { id: 'dev-1', email: 'admin@sustratio.local', name: 'Mock User' },
			login: () => {
				setAuthData({ isAuthenticated: true });
			},
			logout: () => {
				setAuthData({ isAuthenticated: false, user: null });
			},
			getToken: () => {
				return Promise.resolve('mock-jwt-token-123');
			},
		});
	}, [setAuthData]);

	return <>{children}</>;
};
