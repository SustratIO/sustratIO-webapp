import type { FallbackProps } from 'react-error-boundary';

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
	const errorMessage =
		error instanceof Error
			? error.message
			: typeof error === 'string'
				? error
				: 'An unknown error occurred';

	return (
		<div className="p-4 border border-red-200 bg-red-50 rounded-md text-red-900">
			<h3 className="text-lg font-semibold">
				Something went wrong within the module
			</h3>
			<p className="text-sm font-mono text-red-700 my-2">{errorMessage}</p>
			<button
				type="button"
				onClick={resetErrorBoundary}
				className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition"
			>
				Retry
			</button>
		</div>
	);
};
