import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue';
const routes = [
        { path: '/', component: Home },
    ]
    // const router = createRouter({});

// router.afterEach(async(to, from, failure) => {
//     if (!failure) setTimeout(() => window.HSStaticMethods.autoInit(), 100);
// });

export default routes;