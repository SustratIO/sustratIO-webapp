import type { Plantation } from '@features/overview';
import { DataRetrievalError, LoadingResources } from '@shared/components';
import type React from 'react';
import { useTranslation } from 'react-i18next';

interface PlantationHeaderProps {
	isLoading: boolean;
	data?: Plantation;
	isError: boolean;
	errorMsg?: string;
}

export const PlantationHeader: React.FC<PlantationHeaderProps> = ({
	isLoading,
	data,
	isError,
	errorMsg,
}) => {
	const { t } = useTranslation('translation', {
		keyPrefix: 'Features.overview.components.PlantationHeader',
	});

	if (isLoading) {
		return <LoadingResources message={t('isLoading')} />;
	}

	if (!data) {
		return <p>{t('NoData')}</p>;
	}

	if (isError) {
		return <DataRetrievalError message={t('Error', { message: errorMsg })} />;
	}

	return <p>{t('Description', { plantationName: data.name })}</p>;
};
