// runs in browser only

import { createApp } from './main';

const { app, router, store } = createApp();

// eslint-disable-next-line no-underscore-dangle
if (window.__INITIAL_STATE__) {
  // We initialize the store state with the data injected from the server
  // eslint-disable-next-line no-underscore-dangle
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  app.$mount('#app');
});
