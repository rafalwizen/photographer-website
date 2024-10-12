import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './i18n/i18n.jsx';
import config from '../config/config.json'
import ReactGA from 'react-ga4';

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
