const storageBlacklistedKeys = [];

export const getStorageBlacklistedKeys = () => [...storageBlacklistedKeys];

export const addStorageBlacklistedKeys = (...keys) => storageBlacklistedKeys.push(...keys);
