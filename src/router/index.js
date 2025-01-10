import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import EventsView from '@/views/EventsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import EventView from '@/views/EventView.vue';
import AddEventView from '@/views/AddEventView.vue';
import EditEventView from '@/views/EditEventView.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',   
        component: HomeView,
      },
      {
        path: '/events',
        name: 'events',   
        component: EventsView,
      },
      {
        path: '/events/:id',
        name: 'event',
        component: EventView,
      },
      {
        path: '/events/add',
        name: 'add-event',
        component: AddEventView,
      },
      {
        path: '/events/edit/:id',
        name: 'edit-event',
        component: EditEventView,
      },
      {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFoundView,
      },
   ],
});

export default router;