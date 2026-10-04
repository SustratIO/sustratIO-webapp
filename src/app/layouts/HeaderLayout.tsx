import { HeaderAuthControls } from '@appComponents/auth';
import logo from '@assets/img/logo.jpeg';
import { useAuthStore } from '@stores/useAuthStore';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export const HeaderLayout = () => {
	const { isAuthenticated, isLoading } = useAuthStore();
	const { t } = useTranslation('translation', {
		keyPrefix: 'App.Layouts.HeaderLayout.Nav',
	});

	return (
		<header>
			<div>
				<div>
					<Link to="/">
						<img src={logo} alt="SustratIO Logo" width={40} height={40} />
						<span>
							Sustrat<span>IO</span>
						</span>
					</Link>
				</div>
				{isAuthenticated && !isLoading ? (
					<nav>
						<Link to="/overview">{t('overview')}</Link>
						<Link to="/crops">{t('crops')}</Link>
					</nav>
				) : null}

				<div>
					<HeaderAuthControls />
				</div>
			</div>
		</header>
	);
};
