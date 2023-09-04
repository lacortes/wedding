import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rsvpReducer from './slices/rsvpSlice';

import sessionStorage from 'redux-persist/es/storage/session';
import { persistReducer } from 'redux-persist';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';

const persistConfig = {
    key: 'root',
    storage: sessionStorage
};

const combinedReducers = combineReducers({ rsvp: rsvpReducer });

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: { ignoreActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ] } })
});