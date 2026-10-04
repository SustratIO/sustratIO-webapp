import type React from 'react';

interface LoadingResourcesProps {
	message?: string | null;
}

export const LoadingResources: React.FC<LoadingResourcesProps> = ({
	message = 'Loading resources...',
}) => {
	return <p>{message}</p>;
};
