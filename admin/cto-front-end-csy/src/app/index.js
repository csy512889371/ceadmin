
import React from 'react';
import {Provider} from 'react-redux';
import CRouter from './route/index';
import {AppContainer} from 'react-hot-loader';
import configureStore from './Store';

let store = configureStore();

export default () => {
    return (
        <AppContainer>
            <Provider store={store}>
                <CRouter store={store}/>
            </Provider>
        </AppContainer>
    )
}
