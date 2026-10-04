import { LoadingResources } from '@shared/components';
import { useAuthStore } from '@stores/useAuthStore';
import { useTranslation } from 'react-i18next';

export const HeaderAuthControls = () => {
	const { isAuthenticated, isLoading, user, login, logout } = useAuthStore();
	const { t } = useTranslation('translation', {
		keyPrefix: 'App.Components.auth.HeaderAuthControls',
	});

	if (isLoading) {
		return <LoadingResources message={t('loading')} />;
	}

	if (!isAuthenticated) {
		return (
			<button type="button" onClick={() => void login()}>
				{t('login')}
			</button>
		);
	}

	if (!user) {
		throw new Error('User not found');
	}

	return (
		<>
			<div>
				<p>{user.name}</p>
				<p>{user.role}</p>
			</div>
			<div>
				<button type="button" onClick={() => void logout()}>
					{t('logout')}
				</button>
			</div>
		</>
	);
};
