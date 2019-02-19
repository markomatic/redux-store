import { all } from 'redux-saga/effects';

const sagas = [];

const getSagas = () => [...sagas];

export const registerSagas = (...newSagas) => sagas.push(...newSagas);

export function* rootSaga() {
    yield all(getSagas());
}
