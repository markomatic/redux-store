const storageWhitelistedKeys = [];

export const getStorageWhitelistedKeys = () => [...storageWhitelistedKeys];

export const addStorageWhitelistedKeys = (...keys) => storageWhitelistedKeys.push(...keys);
