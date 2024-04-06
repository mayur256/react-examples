// redux packages
import { configureStore } from '@reduxjs/toolkit';

// reducer
import { rootReducer } from './reducers';

// Instantiate redux store
export const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
