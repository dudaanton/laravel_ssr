import Vue from 'vue'
import Router from 'vue-router'
import Users from './pages/Users/index'
import User from './pages/Users/_id'

Vue.use(Router)

export default () => {
  return new Router({
    mode: 'history',
    routes: [
        {
            path: '/users',
            name: 'users',
            component: Users
        },
        {
            path: '/users/:id',
            name: 'user',
            component: User
        },
    ],
});
}
