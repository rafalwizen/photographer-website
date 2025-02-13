import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './i18n/i18n.jsx';
import ReactGA from 'react-ga4';

const configUrl = '/config/config.json';

const loadConfig = async () => {
    try {
        const response = await fetch(configUrl);
        if (!response.ok) {
            throw new Error(`Failed to load config: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

loadConfig().then((config) => {
    if (config) {
        const GA_MEASUREMENT_ID = config.google_analytics.measurement_id;
        ReactGA.initialize(GA_MEASUREMENT_ID);

        const logPageView = () => {
            ReactGA.send('pageview', { page: window.location.pathname });
        };

        ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
                <App logPageView={logPageView} />
            </React.StrictMode>
        );
    } else {
        console.error('Failed to load config, app may not work correctly.');
    }
});
