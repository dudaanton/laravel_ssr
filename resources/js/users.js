import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './layouts/App'
import Users from './pages/Users/index'
import User from './pages/Users/_id'
import ExampleComponent from './components/ExampleComponent'

Vue.use(VueRouter)

const router = new VueRouter({
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

export default new Vue({
    render: (r) => r(App),
    router
});
