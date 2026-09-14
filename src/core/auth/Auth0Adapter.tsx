import { useAuthStore } from '@app/stores/useAuthStore';
import { useAuth0 } from '@auth0/auth0-react';
import type React from 'react';
import { useEffect } from 'react';

export const Auth0Adapter: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	if (!import.meta.env.VITE_AUTH0_AUDIENCE) {
		throw new Error('Incorrect OAuth0 setup');
	}

	const {
		isAuthenticated,
		isLoading,
		user,
		loginWithRedirect,
		logout,
		getAccessTokenSilently,
	} = useAuth0();
	const setAuthData = useAuthStore((state) => state.setAuthData);

	useEffect(() => {
		setAuthData({
			isAuthenticated,
			isLoading,
			user: user
				? {
						id: user.sub ?? '',
						email: user.email ?? '',
						name: user.name ?? '',
					}
				: null,
			login: () => loginWithRedirect(),
			logout: () =>
				logout({ logoutParams: { returnTo: window.location.origin } }),
			getToken: async () => {
				try {
					return await getAccessTokenSilently({
						authorizationParams: {
							audience: import.meta.env.VITE_AUTH0_AUDIENCE,
						},
					});
				} catch (e) {
					console.error(e);
					return null;
				}
			},
		});
	}, [
		setAuthData,
		isAuthenticated,
		isLoading,
		user,
		loginWithRedirect,
		logout,
		getAccessTokenSilently,
	]);

	return <>{children}</>;
};
