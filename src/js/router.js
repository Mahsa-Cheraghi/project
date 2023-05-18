import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home-1/Home.vue";
import Home2 from "../components/Home-2/Home2.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    name: "home2",
    component: Home2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // ...
});
export default router;
