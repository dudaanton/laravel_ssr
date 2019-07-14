import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Предположим, что у нас есть универсальный API,
// который возвращает Promises и опустим детали реализации
const fetchUsers = () => {
  return axios.get('/api/users')
}

export default () => {
  return new Vuex.Store({
    // ВАЖНО: состояние должно быть функцией,
    // чтобы модуль мог инстанцироваться несколько раз
    state: () => ({
      users: {}
    }),

    getters: {
      getUsers (state) {
        return state.users
      },
    },

    actions: {
      fetchUsers ({ commit }) {
        // возвращаем Promise через `store.dispatch()`
        // чтобы могли определять когда данные будут загружены
        return fetchUsers().then(res => {
          commit('setUsers', { users: res.data.data })
        })
      }
    },

    mutations: {
      setUsers (state, { users }) {
        Vue.set(state.users, users)
      }
    }
  })
}
