import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import SearchDogsByBreeds from '../views/SearchDogsByBreeds.vue'
const routes = [
   
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
    ];

    const router = createRouter({
        history: createWebHistory(),
        routes,
      });
      
      export default router;