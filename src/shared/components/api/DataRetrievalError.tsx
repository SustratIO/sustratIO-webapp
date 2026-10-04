import type React from 'react';
import { useTranslation } from 'react-i18next';

interface DataRetrievalErrorProps {
	message: string;
}

export const DataRetrievalError: React.FC<DataRetrievalErrorProps> = ({
	message,
}) => {
	const { t } = useTranslation('translation', {
		keyPrefix: 'Shared.Components.DataRetrievalError',
	});
	return <p>{t('Message', { message })}</p>;
};
