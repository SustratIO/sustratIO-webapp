import { Auth0Provider } from '@auth0/auth0-react';
import { Auth0Adapter } from '@core/auth/Auth0Adapter';
import { MockAdapter } from '@core/auth/MockAdapter';

// --- Main Factory Provider --
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const providerType = import.meta.env.VITE_AUTH_PROVIDER;

	switch (providerType) {
		case 'auth0':
			if (
				!(
					import.meta.env.VITE_AUTH0_DOMAIN &&
					import.meta.env.VITE_AUTH0_CLIENT_ID &&
					import.meta.env.VITE_AUTH0_AUDIENCE
				)
			) {
				throw new Error('Incorrect OAuth0 setup');
			}

			return (
				<Auth0Provider
					domain={import.meta.env.VITE_AUTH0_DOMAIN}
					clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
					authorizationParams={{
						redirect_uri: window.location.origin,
						audience: import.meta.env.VITE_AUTH0_AUDIENCE,
					}}
				>
					<Auth0Adapter>{children}</Auth0Adapter>
				</Auth0Provider>
			);
		case 'mock':
			return <MockAdapter>{children}</MockAdapter>;
		default:
			throw new Error('No auth provider setup!');
	}
};
