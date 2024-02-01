import VueRouter from "vue-router";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: {
            render: (h) => h(import('../components/Inicio.vue')),
        }
    },
    {
        path: '/inicio',
        
    }

]

const router = new VueRouter(routes)

export default router;