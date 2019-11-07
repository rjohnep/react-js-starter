import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './containers/App';

const MOUNT_NODE = document.getElementById('app');

const render = (): void => {
  ReactDOM.render(<App />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable React components
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./containers/App'], () => {
    if (MOUNT_NODE) ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
