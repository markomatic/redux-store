import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import filter from 'redux-storage-decorator-filter';
import { createLogger } from 'redux-logger';
import createLocalSorageEngine from 'redux-storage-engine-localstorage';
import createSagaMiddleware from 'redux-saga';
import * as storage from 'redux-storage';
import { getMiddlewares } from './middlewares';
import { getReducers } from './reducers';
import { rootSaga } from './sagas';
import { getStorageBlacklistedKeys } from './storage-blacklisted-keys';
import { getStorageKey } from './storage-key';
import { getStorageWhitelistedKeys } from './storage-whitelisted-keys';

let store;
let engine;

const initStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [
        createLogger(),
        sagaMiddleware,
        ...getMiddlewares()
    ];
    let reducer = combineReducers(getReducers());

    const storageKey = getStorageKey();
    if (storageKey) {
        engine = filter(
            createLocalSorageEngine(storageKey),
            getStorageWhitelistedKeys(),
            getStorageBlacklistedKeys()
        );
        reducer = storage.reducer(reducer);
        middlewares.push(storage.createMiddleware(engine));
    }

    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    store = createStoreWithMiddleware(reducer);

    sagaMiddleware.run(rootSaga);
};

export const getStoreAsync = async () => {
    if (store) {
        return store;
    }

    initStore();

    if (engine) {
        await storage.createLoader(engine)(store);
    }

    return store;
};

export const dispatch = (...rest) => store.dispatch(...rest);
