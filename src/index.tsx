import React from 'react';
import {createRoot} from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import App from './components/App/App';
import { browserHistory, store } from './store';
import { fetchOffersAction, checkAuthAction } from './store/apiActions';
import HistoryRouter from './components/HistoryRoute/HistoryRoute';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
