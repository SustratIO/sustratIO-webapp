import { useAuthStore } from '@stores/useAuthStore';

export const LoginPage = () => {
	const { login } = useAuthStore();

	return (
		<>
			<h1>Please login on the provider</h1>
			<button type="button" onClick={() => void login()}>
				Login
			</button>
		</>
	);
};
