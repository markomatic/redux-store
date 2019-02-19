const reducers = {};

export const getReducers = () => ({ ...reducers });

export const registerReducers = newReducers => Object.assign(reducers, newReducers);
