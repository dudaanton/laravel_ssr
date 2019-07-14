import createApp from './users'

const { app, store } = createApp()

if (window.__INITIAL_STATE__) {
  // Инициализируем состояние хранилища данными, внедрёнными на сервере
  store.replaceState(window.__INITIAL_STATE__)
}

app.$mount('#app')
