// import { configureStore } from '@reduxjs/toolkit';
// import memberReducer from './memberSlice'; // Ensure memberSlice exports a valid reducer
// import authReducer from './authSlice';

// export const store = configureStore({
//   reducer: {
//     members: memberReducer,
//     auth: authReducer,
//   },
// });

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import memberReducer from './memberSlice';
import authReducer from './authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Combine your reducers
const rootReducer = combineReducers({
  members: memberReducer,
  auth: authReducer,
});

// Define a persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['members', 'auth'], // reducers you want to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store using the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor linked to the store
export const persistor = persistStore(store);
