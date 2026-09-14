import type { FallbackProps } from 'react-error-boundary';

export const GlobalErrorBoundary = ({
	error,
	resetErrorBoundary,
}: FallbackProps) => {
	const errorMessage =
		error instanceof Error
			? error.message
			: typeof error === 'string'
				? error
				: 'An unknown error occurred';

	return (
		<>
			<h3>Application error</h3>
			<p>{errorMessage}</p>
			<button type="button" onClick={resetErrorBoundary}>
				Reload application
			</button>
		</>
	);
};
