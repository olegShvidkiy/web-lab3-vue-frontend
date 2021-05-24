import { createRouter, createWebHistory } from "vue-router";
import home from "./views/home";
import add from "./views/add";
import del from "./views/delete";
const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/add",
    name: "add",
    component: add,
  },
  {
    path: "/del",
    name: "del",
    component: del,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
