import { createRouter, createWebHistory } from 'vue-router'
import TopScreen from './screens/TopScreen.vue'
import CreateScreen from './screens/CreateScreen.vue'
import EditScreen from './screens/EditScreen.vue'
import NotFoundScreen from './screens/NotFoundScreen.vue'

const routes = [
  { path: '/', component: TopScreen },
  { path: '/new', component: CreateScreen },
  { path: '/todos/:id', component: EditScreen },
  { path: '/:notFound(.*)', component: NotFoundScreen },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
