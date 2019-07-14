import Vue from 'vue'
import App from './layouts/App'
import createRouter from './users_router'
import createStore from './store'
import { sync } from 'vuex-router-sync'

const router = createRouter()
const store = createStore()

sync(store, router)

const app = new Vue({
  render: (r) => r(App),
  router,
  store
});

export default () => {
  return { app, router, store }
}
