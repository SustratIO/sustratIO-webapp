import type { FallbackProps } from 'react-error-boundary';

interface ModuleErrorFallbackProps extends FallbackProps {
	moduleName: string;
}

export const ModuleErrorFallback = ({
	error,
	resetErrorBoundary,
	moduleName,
}: ModuleErrorFallbackProps) => {
	const errorMessage =
		error instanceof Error
			? error.message
			: typeof error === 'string'
				? error
				: 'An unknown error occurred';

	return (
		<>
			<h3>Module Error at: {moduleName}</h3>
			<p>{errorMessage}</p>
			<button type="button" onClick={resetErrorBoundary}>
				Reload {moduleName}
			</button>
		</>
	);
};
