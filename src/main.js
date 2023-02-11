import "./assets/css/index.css";
import store from "./store";
import { createApp } from "vue";
import router from "./routes/routes";
import App from "./App.vue";

const vueApp = createApp(App);
vueApp.use(store).use(router);

vueApp.mount("#app");
