import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Quiz from "../views/Quiz.vue";
import Results from "../views/Results.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/quiz",
      name: "Quiz",
      component: Quiz,
    },
    {
      path: "/results",
      name: "Results",
      component: Results,
    },
  ],
});

export default router;
