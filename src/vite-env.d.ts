interface ImportMetaEnv {
	readonly VITE_AUTH_PROVIDER?: 'auth0' | 'mock';
	readonly VITE_API_URL?: string;
	readonly VITE_AUTH0_DOMAIN?: string;
	readonly VITE_AUTH0_CLIENT_ID?: string;
	readonly VITE_AUTH0_AUDIENCE?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
