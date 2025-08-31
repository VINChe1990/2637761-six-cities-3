import {PayloadAction} from '@reduxjs/toolkit';
import {Middleware} from 'redux';

import {rootReducer} from '../reducer';
import { BrowserHistory } from 'history';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect = (history: BrowserHistory): Middleware<unknown, Reducer> =>
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'redirectToRoute') {
          history.push(action.payload);
        }
        return next(action);
      };
