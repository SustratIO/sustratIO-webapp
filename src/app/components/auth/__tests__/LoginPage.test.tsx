import { LoginPage } from '@appComponents/auth/LoginPage';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('LoginPage renders correctly', () => {
	render(<LoginPage />);

	const header = screen.getByRole('heading', {
		name: /Please login on the provider/i,
	});
	const loginButton = screen.getByRole('button', { name: /Login/i });

	expect(header).toBeInTheDocument();
	expect(loginButton).toBeInTheDocument();
});
