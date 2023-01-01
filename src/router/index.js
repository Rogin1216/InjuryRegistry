import {createRouter, createWebHistory} from 'vue-router'
import TraumaForm from '../view/TraumaForm.vue'
import Dashboard from '../components/DashBoard.vue'
import Login from '../components/LoginPage.vue'

const routes = [
    {
        path: '/TraumaInjuryForm/:enccode',
        name: 'Trauma Injury Form',
        // redirect: '/',
        component: TraumaForm
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router