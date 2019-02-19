const middlewares = [];

export const getMiddlewares = () => [...middlewares];

export const registerMiddlewares = (...newMiddlewares) => middlewares.push(...newMiddlewares);
