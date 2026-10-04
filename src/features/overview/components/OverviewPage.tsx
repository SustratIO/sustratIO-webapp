import { usePlantation } from '@features/overview/api/usePlantation';
import { PlantationHeader } from '@features/overview/components/PlantationHeader';
import { useTranslation } from 'react-i18next';

export const OverviewPage = () => {
	const {
		data: plantationData,
		isLoading: isPlantationLoading,
		isError: isPlantationError,
		error: plantationAPIError,
	} = usePlantation('dummyFarmId');

	const { t } = useTranslation('translation', {
		keyPrefix: 'Features.overview.OverviewPage',
	});

	const today = new Date();
	const temperatureCelsius = 24; // Example temperature in Celsius

	return (
		<section>
			<div>
				<p>
					{today.toDateString()} - {temperatureCelsius} ºC
				</p>
				<h1>{t('Title')}</h1>
				<PlantationHeader
					isError={isPlantationError}
					isLoading={isPlantationLoading}
					data={plantationData}
					errorMsg={plantationAPIError?.message}
				/>
			</div>
			<div>
				<button type="button">{t('Buttons.Overview')}</button>
				<button type="button">{t('Buttons.Data')}</button>
				<button type="button">{t('Buttons.Permissions')}</button>
				<button type="button">{t('Buttons.Alerts')}</button>
			</div>
		</section>
	);
};
