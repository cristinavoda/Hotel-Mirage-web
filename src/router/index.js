import { createRouter, createWebHistory } from 'vue-router'



import HomeView from '../views/HomeView.vue'
import ReservasView from '../views/ReservasView.vue'
import RoomsView from '../views/RoomsView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 } 
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
  path: '/reservas',
  name: 'reservas',
  component: () => import('../views/ReservasView.vue')
},


    {
      path: '/habitaciones',
      name: 'rooms',
      component: RoomsView
    },
    {
      path: '/experiencias',
      name: 'experiences',
      component: ExperienceView
    },
    {
      path: '/galeria',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactView
    }
  ]


})

export default router
