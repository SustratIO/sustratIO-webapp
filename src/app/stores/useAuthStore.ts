import { create } from 'zustand';

export interface AuthUser {
	id: string;
	email: string;
	name?: string;
}

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
	user: AuthUser | null;
	// Function injection for the active provider (OAuth0 or Mock)
	login: () => void | Promise<void>;
	logout: () => void | Promise<void>;
	getToken: () => Promise<string | null | undefined>;
	// Internal method for the provider to update the store
	setAuthData: (data: Partial<AuthState>) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	isAuthenticated: false,
	isLoading: true,
	user: null,
	login: () => {
		console.warn('Login not initialized.');
	},
	logout: () => {
		console.warn('Logout not initialized.');
	},
	// eslint-disable-next-line @typescript-eslint/require-await
	getToken: async () => null,
	setAuthData: (data) => {
		set((state) => ({ ...state, ...data }));
	},
}));
