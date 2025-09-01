import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import {createAPI} from '../services/api';
import { redirect } from './middlewares/redirect';
import { createBrowserHistory } from 'history';

export const browserHistory = createBrowserHistory();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: createAPI(),
      },
    }).concat(redirect(browserHistory))
});
