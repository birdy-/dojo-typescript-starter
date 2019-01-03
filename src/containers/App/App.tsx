import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout } from '@features/layout';
import { Music } from '@features/music';
import { configureStore } from '@store';

const store = configureStore();

export type AppState = {};

export const App = () => (
  <Provider store={store}>
    <Layout>
      <Switch>
        <Route path="/" exact render={() => <Music />} />
        <Route path="/" render={() => <div>Nope</div>} />
      </Switch>
    </Layout>
  </Provider>
);
