import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Product from "./views/Product.vue";
import Cart from "./views/Cart.vue";
const routes = [
    {
        path: '/' ,
        component: Home
    },
    {
        path: '/login' ,
        component: Login
    },
    {
        path: '/card' ,
        component: Cart
    },
    {
        path: '/product/:categoryId' ,
        component: Product
    }
]

export default createRouter({
    history: createWebHistory() ,
    routes
})