import Head from 'next/head';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from '../store/index';

import Layout from '../components/Layout';
import '../styles/globals.css';
import { ScrollToTop } from '../components/ScrollComps';

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Elengecy Interiors</title>
                <meta
                    name="description"
                    content="•Renovations • Luxury Furniture •Interior Design -Your one stop to Everything Home !! -Open weekdays 9-5 Saturday 10-3" 
                />
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
            <ScrollToTop />
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.instanceOf(Object).isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
