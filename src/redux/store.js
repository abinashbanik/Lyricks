// import { configureStore } from '@reduxjs/toolkit';

// import playerReducer from './features/playerSlice';
// import { shazamCoreApi } from './services/shazamCore';


// export const store = configureStore({
//   reducer: {
//     [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
//     player: playerReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concate(shazamCoreApi.middleware),
// });


import { configureStore } from '@reduxjs/toolkit';

import { shazamCoreApi } from './services/shazamCore';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
 