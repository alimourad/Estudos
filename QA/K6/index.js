//index.js
import PostLogin from './Post-Login.js';
import FirstTest from './Get-Corretoras.js';
import { group, sleep } from 'k6';

export default () => {
	group('Endpoint Post Login', () => {
		PostLogin();
	});

	sleep(1);
} 