import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import SearchDogsByBreeds from '../views/SearchDogsByBreeds.vue'
import DogDetails from '../views/DogDetails.vue'
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';

      
     

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/dogs-by-breeds/:breeds?",
        name: "dogsByBreeds",
        component: SearchDogsByBreeds,
      },
      {
        path: '/dog/:id',
        name: 'dogDetails',
        component: DogDetails
      }
    ]
  },
  {
    path: '/guest',
    component: GuestLayout
  }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;