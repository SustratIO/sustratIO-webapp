import { create } from 'zustand';

interface UserProfile {
	id: string;
	email: string;
}

interface AuthState {
	user: UserProfile | null;
	token: string | null;
	isAuthenticated: boolean;
	setAuth: (token: string, user: UserProfile) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	token: null,
	isAuthenticated: false,

	// Actions for login and refreshing token
	setAuth: (token: string, user: UserProfile) => {
		set({ token, user, isAuthenticated: true });
	},

	// Action for logout
	logout: () => {
		set({ token: null, isAuthenticated: false });
	},
}));
