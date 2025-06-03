import {createRouter, createWebHistory} from 'vue-router'
import AboutMe from '@/pages/AboutMe.vue'
import HomePage from '@/pages/HomePage.vue'
import MyGallery from '@/pages/MyGallery.vue'
import MyWork from '@/pages/MyWork.vue'

const routes = [
    {path: '/', component: HomePage},
    {path: '/about-me', component: AboutMe},
    {path: '/my-gallery', component: MyGallery},
    {path: '/my-work', component: MyWork},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
