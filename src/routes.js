import { createWebHistory, createRouter } from "vue-router";
import SignUp from "./components/SignUp.vue";
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "SignUp",
    path: "/sign-up",
    component: SignUp,
  },
  {
    name: "Login",
    path: "/login",
    component: LoginPage,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
